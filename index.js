const axios = require('axios');
const jwt = require('jsonwebtoken');
const tenantId = "";
const accessToken = "";

const fetchPublicKeys = async () => {
    const response = await axios.get(`https://login.microsoftonline.com/${tenantId}/discovery/v2.0/keys`);
    return response.data;
};

const validateAccessToken = async (accessToken, publicKeys) => {
    const decodedToken = jwt.decode(accessToken, { complete: true });
    const { header } = decodedToken;
    const { kid } = header;

    const publicKey = publicKeys.keys.find((key) => key.kid === kid);
    const publicKeyWithBeginAndEnd = "-----BEGIN CERTIFICATE-----\n" + publicKey.x5c[0] + "\n-----END CERTIFICATE-----\n";

    if (!publicKey) {
        throw new Error('Public key not found for the given key ID');
    }

    const verifiedToken = jwt.verify(accessToken, publicKeyWithBeginAndEnd, { algorithms: ['RS256'] });
    return verifiedToken;
};

const validate = async (accessToken) => {
    try {
        const publicKeys = await fetchPublicKeys();
        const verifiedToken = await validateAccessToken(accessToken, publicKeys);
        console.log('Access token is valid:', verifiedToken);
    }
    catch (error) {
        console.error('Access token validation failed:', error);
    }
};

validate(accessToken);