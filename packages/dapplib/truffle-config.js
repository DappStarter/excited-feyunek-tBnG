require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth office quality install industry food ghost'; 
let testAccounts = [
"0xf97fcb48bb6d37bb801947e815ca31fd86b5f3886146d55ed35ef5687308c0fd",
"0x3a52ae170bd54de06193c1c7483fddedb47d5622b7996e58e85f7434d1c36595",
"0xd1e3fff18af1f7d3df325bc11405b1e7cd495aeae7e0959f02b58a0f8dd69b39",
"0xd29699d59034cdd81e2df983949468ddc3e235546d0864bc7dff47d2b67eb74b",
"0xa73b0770e01095f73bd1f784eda849b4fad2730155ca7b555e55b3dd3047c94a",
"0x382bd5126a0bbad0a0fa603c3b49d8000184a4267bfaa3b442bc606a5113d9a7",
"0xc7ab4498c08d54ec11d29821cb8c1a94291f7becf683b606790b69ed463ef954",
"0xd4ea0bf2a41107f11b216545eb4941d4beb09a5554a25135cada49a511c024e5",
"0x4b028d2601adedc7dfb20326115875fecff010306e6711969453fa28f376ba04",
"0x8147b7b332a138a0c1e751ca2087a4b02ad89175c01945d9caf79c65e62d12f3"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


