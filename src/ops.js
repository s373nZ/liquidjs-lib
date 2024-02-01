'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.REVERSE_OPS = exports.OPS = void 0;
const OPS = {
  // push value
  OP_FALSE: 0x00,
  OP_0: 0x00,
  OP_PUSHDATA1: 0x4c,
  OP_PUSHDATA2: 0x4d,
  OP_PUSHDATA4: 0x4e,
  OP_1NEGATE: 0x4f,
  OP_RESERVED: 0x50,
  OP_TRUE: 0x51,
  OP_1: 0x51,
  OP_2: 0x52,
  OP_3: 0x53,
  OP_4: 0x54,
  OP_5: 0x55,
  OP_6: 0x56,
  OP_7: 0x57,
  OP_8: 0x58,
  OP_9: 0x59,
  OP_10: 0x5a,
  OP_11: 0x5b,
  OP_12: 0x5c,
  OP_13: 0x5d,
  OP_14: 0x5e,
  OP_15: 0x5f,
  OP_16: 0x60,
  // control
  OP_NOP: 0x61,
  OP_VER: 0x62,
  OP_IF: 0x63,
  OP_NOTIF: 0x64,
  OP_VERIF: 0x65,
  OP_VERNOTIF: 0x66,
  OP_ELSE: 0x67,
  OP_ENDIF: 0x68,
  OP_VERIFY: 0x69,
  OP_RETURN: 0x6a,
  // stack ops
  OP_TOALTSTACK: 0x6b,
  OP_FROMALTSTACK: 0x6c,
  OP_2DROP: 0x6d,
  OP_2DUP: 0x6e,
  OP_3DUP: 0x6f,
  OP_2OVER: 0x70,
  OP_2ROT: 0x71,
  OP_2SWAP: 0x72,
  OP_IFDUP: 0x73,
  OP_DEPTH: 0x74,
  OP_DROP: 0x75,
  OP_DUP: 0x76,
  OP_NIP: 0x77,
  OP_OVER: 0x78,
  OP_PICK: 0x79,
  OP_ROLL: 0x7a,
  OP_ROT: 0x7b,
  OP_SWAP: 0x7c,
  OP_TUCK: 0x7d,
  // splice ops
  OP_CAT: 0x7e,
  OP_SUBSTR: 0x7f,
  OP_SUBSTR_LAZY: 0xc3,
  OP_LEFT: 0x80,
  OP_RIGHT: 0x81,
  OP_SIZE: 0x82,
  // bit logic
  OP_INVERT: 0x83,
  OP_AND: 0x84,
  OP_OR: 0x85,
  OP_XOR: 0x86,
  OP_EQUAL: 0x87,
  OP_EQUALVERIFY: 0x88,
  OP_RESERVED1: 0x89,
  OP_RESERVED2: 0x8a,
  // numeric
  OP_1ADD: 0x8b,
  OP_1SUB: 0x8c,
  OP_2MUL: 0x8d,
  OP_2DIV: 0x8e,
  OP_NEGATE: 0x8f,
  OP_ABS: 0x90,
  OP_NOT: 0x91,
  OP_0NOTEQUAL: 0x92,
  OP_ADD: 0x93,
  OP_SUB: 0x94,
  OP_MUL: 0x95,
  OP_DIV: 0x96,
  OP_MOD: 0x97,
  OP_LSHIFT: 0x98,
  OP_RSHIFT: 0x99,
  OP_BOOLAND: 0x9a,
  OP_BOOLOR: 0x9b,
  OP_NUMEQUAL: 0x9c,
  OP_NUMEQUALVERIFY: 0x9d,
  OP_NUMNOTEQUAL: 0x9e,
  OP_LESSTHAN: 0x9f,
  OP_GREATERTHAN: 0xa0,
  OP_LESSTHANOREQUAL: 0xa1,
  OP_GREATERTHANOREQUAL: 0xa2,
  OP_MIN: 0xa3,
  OP_MAX: 0xa4,
  OP_WITHIN: 0xa5,
  // crypto
  OP_RIPEMD160: 0xa6,
  OP_SHA1: 0xa7,
  OP_SHA256: 0xa8,
  OP_HASH160: 0xa9,
  OP_HASH256: 0xaa,
  OP_CODESEPARATOR: 0xab,
  OP_CHECKSIG: 0xac,
  OP_CHECKSIGVERIFY: 0xad,
  OP_CHECKMULTISIG: 0xae,
  OP_CHECKMULTISIGVERIFY: 0xaf,
  OP_DETERMINISTICRANDOM: 0xc0,
  OP_CHECKSIGFROMSTACK: 0xc1,
  OP_CHECKSIGFROMSTACKVERIFY: 0xc2,
  // expansion
  OP_NOP1: 0xb0,
  OP_NOP2: 0xb1,
  OP_CHECKLOCKTIMEVERIFY: 0xb1,
  OP_NOP3: 0xb2,
  OP_CHECKSEQUENCEVERIFY: 0xb2,
  OP_NOP4: 0xb3,
  OP_NOP5: 0xb4,
  OP_NOP6: 0xb5,
  OP_NOP7: 0xb6,
  OP_NOP8: 0xb7,
  OP_NOP9: 0xb8,
  OP_NOP10: 0xb9,
  // Elements: Tapscript (Streaming sha2 opcodes)
  OP_SHA256INITIALIZE: 0xc4,
  OP_SHA256UPDATE: 0xc5,
  OP_SHA256FINALIZE: 0xc6,
  // Introspection opcodes
  // inputs
  OP_INSPECTINPUTOUTPOINT: 0xc7,
  OP_INSPECTINPUTASSET: 0xc8,
  OP_INSPECTINPUTVALUE: 0xc9,
  OP_INSPECTINPUTSCRIPTPUBKEY: 0xca,
  OP_INSPECTINPUTSEQUENCE: 0xcb,
  OP_INSPECTINPUTISSUANCE: 0xcc,
  // current index
  OP_PUSHCURRENTINPUTINDEX: 0xcd,
  // outputs
  OP_INSPECTOUTPUTASSET: 0xce,
  OP_INSPECTOUTPUTVALUE: 0xcf,
  OP_INSPECTOUTPUTNONCE: 0xd0,
  OP_INSPECTOUTPUTSCRIPTPUBKEY: 0xd1,
  // transaction
  OP_INSPECTVERSION: 0xd2,
  OP_INSPECTLOCKTIME: 0xd3,
  OP_INSPECTNUMINPUTS: 0xd4,
  OP_INSPECTNUMOUTPUTS: 0xd5,
  OP_TXWEIGHT: 0xd6,
  // Arithmetic opcodes
  OP_ADD64: 0xd7,
  OP_SUB64: 0xd8,
  OP_MUL64: 0xd9,
  OP_DIV64: 0xda,
  OP_NEG64: 0xdb,
  OP_LESSTHAN64: 0xdc,
  OP_LESSTHANOREQUAL64: 0xdd,
  OP_GREATERTHAN64: 0xde,
  OP_GREATERTHANOREQUAL64: 0xdf,
  // Conversion opcodes
  OP_SCRIPTNUMTOLE64: 0xe0,
  OP_LE64TOSCRIPTNUM: 0xe1,
  OP_LE32TOLE64: 0xe2,
  // Crypto opcodes
  OP_ECMULSCALARVERIFY: 0xe3,
  OP_TWEAKVERIFY: 0xe4,
  OP_PUBKEYHASH: 253,
  OP_PUBKEY: 254,
  OP_INVALIDOPCODE: 255,
};
exports.OPS = OPS;
const REVERSE_OPS = {};
exports.REVERSE_OPS = REVERSE_OPS;
for (const op of Object.keys(OPS)) {
  const code = OPS[op];
  REVERSE_OPS[code] = op;
}
