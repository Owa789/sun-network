const mainFullNode = 'http://39.107.81.225:9190';
const mainSolidityNode = 'http://39.107.81.225:9197';
const mainEventServer = 'http://39.107.81.225:50001';

const sideFullNode = 'http://39.107.81.225:8190';
const sideSolidityNode = 'http://39.107.81.225:8197';
const sideEventServer = 'http://39.107.81.225:50001';

module.exports = {
    PRIVATE_KEY: '6815B367FDDE637E53E9ADC8E69424E07724333C9A2B973CFA469975E20753FC',
    CONSUME_USER_RESOURCE_PERCENT: 30,
    DEPOSIT_FEE: 0,
    MAPPING_FEE: 0,
    WITHDRAW_FEE: 10000000,
    FEE_LIMIT: 100000000,
    MAIN_FULL_NODE_API: mainFullNode,
    MAIN_SOLIDITY_NODE_API: mainSolidityNode,
    MAIN_EVENT_API: mainEventServer,
    SIDE_FULL_NODE_API: sideFullNode,
    SIDE_SOLIDITY_NODE_API: sideSolidityNode,
    SIDE_EVENT_API: sideEventServer,
    // NETWORK_ID: "*",
    MAIN_GATEWAY_ADDRESS: 'TGYn6Uek8mdfcKg6NzahVu8DWMWv6cYGzi',
    MAIN_GATEWAY_ADDRESS_HEX: '41482A1B3FAC9461884CD525DBD316872F930021F3',
    SIDE_GATEWAY_ADDRESS: 'TA6qkW19Ff8dk9EYRqjktUR4SkhNiooLdr',
    SIDE_GATEWAY_ADDRESS_HEX: '41017196979B7C97CDF373781E26DD49328FFCF6AE',
    SIDE_CHAIN_ID: '41F7AFFF7316CDA1E1BC9B21B7CC98BB84A4EA5510',
    //ADDRESS_HEX: '41d7bfa8bfeb5822837878180a66921473339cf0d3',
    //ADDRESS_BASE58: 'TVdyt1s88BdiCjKt6K2YuoSmpWScZYK1QF',
    ADDRESS_HEX1:'000000000000000000000000d1e7a6bc354106cb410e65ff8b181c600ff14292',
    ADDRESS_HEX2:'41d1e7a6bc354106cb410e65ff8b181c600ff14292',
    TOKEN_ID: 1000001,
    ACCOUNTADDRESS:'TV75jZpdmP2juMe1dRwGrwpV6AMU6mr1EU',
    //HASH20: 'c599148ed97c881eee7269344c29d3bb356afa6127a86df39a7c154ee8d4584f',
    CONTRACT_ADDRESS20: 'TEpcc6x7x9J8qbKukvLvb42LhJeTzshC83',
    CONTRACT_ADDRESS20_HEX: '41353896CD2E65D3334EEBE91ABE6D554342D82B13',
    ADDRESS20_MAPPING: 'TW3jqUPmzBfcY1kcMtB6ndBQtM2u6RWhf5',
    ADDRESS20_MAPPING_HEX: '41dc3deb473becf30c8e561933fcc2cca33ba40425',
    //HASH721: '5c5acf3d0d6653ab847d79232de68c7f8df0c55727317944f3f81243d6e547ae',
    CONTRACT_ADDRESS721: 'TAZDtFWP4iYwzn5YbeGDPCEfA5CND9KCXA',
    CONTRACT_ADDRESS721_HEX: '41066EE1253D542EDDF4F6B4AC7A906AB14C2D064C',
    ADDRESS721_MAPPING: 'TJNzAtZnLU1DNqHW6sxQdtG41RCmHPjoGn',
    ADDRESS721_MAPPING_HEX: '415c40476bd7b585a8b7be466be74254154e088e92',
    TIMEOUT: function(ms) {
        return new Promise(resolve => {
            setTimeout(resolve, ms);
        });
    }

}