/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  Shuffle_encrypt_v2Pairing,
  Shuffle_encrypt_v2PairingInterface,
} from "../../../../../@p0x-labs/poseidon-zk-circuits/contracts/shuffle_encrypt_v2_verifier.sol/Shuffle_encrypt_v2Pairing";

const _abi = [
  {
    inputs: [],
    name: "InvalidProof",
    type: "error",
  },
] as const;

const _bytecode =
  "0x60566050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220b8470ef81fc0051a66d06f0204351185f91687fa9574deee188403d0fd87bca164736f6c63430008040033";

type Shuffle_encrypt_v2PairingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Shuffle_encrypt_v2PairingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Shuffle_encrypt_v2Pairing__factory extends ContractFactory {
  constructor(...args: Shuffle_encrypt_v2PairingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Shuffle_encrypt_v2Pairing> {
    return super.deploy(overrides || {}) as Promise<Shuffle_encrypt_v2Pairing>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Shuffle_encrypt_v2Pairing {
    return super.attach(address) as Shuffle_encrypt_v2Pairing;
  }
  override connect(signer: Signer): Shuffle_encrypt_v2Pairing__factory {
    return super.connect(signer) as Shuffle_encrypt_v2Pairing__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Shuffle_encrypt_v2PairingInterface {
    return new utils.Interface(_abi) as Shuffle_encrypt_v2PairingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Shuffle_encrypt_v2Pairing {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as Shuffle_encrypt_v2Pairing;
  }
}