require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remain hole hope enroll bottom total'; 
let testAccounts = [
"0xa89de45f911a925e32d87580407df380a4cf983bbd5fad5660f14f14ca8d6005",
"0x2817cc92fa61a94044b33352221c019dd719b9f54d51e13a872ed0e119e926b2",
"0x91bf3e28508325b4a12d891e036f86ec9fd2a17af91565523715de8511280360",
"0x4dfbbe606c0a7048c71d3d922b894601e47e6cbbb76efa3d99b63e0e3f920542",
"0xce9c0a51cbbb9b0d68401d5d54ac3dc75b185cab3a90db4006bed980fd6a6a75",
"0x2e0f55235ad8d70915a4acf33561d84693e8d4603c07b6563a7fbf75a20cb7c3",
"0x5c8e4a2a7a2a44f31fdbc42f5112a9c9ace91e03f0382cc6813fb5febd2e2199",
"0x46ffce5e428880ea61ccd5fe3f53f5f84bddb7424d70f889fc3541c33f1fee9e",
"0x61c8551cf031d70d9aa6a080856a329b2e2134d5109c2fa7add86dc88f776995",
"0x4139818059af7e2849e1496fabd061c6b01f9a1b451017ad40b70a85812bd88e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

