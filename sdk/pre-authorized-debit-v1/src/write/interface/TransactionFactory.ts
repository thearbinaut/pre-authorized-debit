import { TransactionWithMetadata } from "./shared";
import {
  ApproveSmartDelegateParams,
  ApproveSmartDelegateResult,
  ClosePreAuthorizationAsDebitAuthorityParams,
  ClosePreAuthorizationAsDebitAuthorityResult,
  ClosePreAuthorizationAsOwnerParams,
  ClosePreAuthorizationAsOwnerResult,
  DebitParams,
  DebitResult,
  InitOneTimePreAuthorizationParams,
  InitOneTimePreAuthorizationResult,
  InitRecurringPreAuthorizationParams,
  InitRecurringPreAuthorizationResult,
  InitSmartDelegateParams,
  InitSmartDelegateResult,
  PausePreAuthorizationParams,
  PausePreAuthorizationResult,
  UnpausePreAuthorizationParams,
  UnpausePreAuthorizationResult,
} from "./params";
import { PublicKey } from "@solana/web3.js";

type TxFactoryFn<Params, Result> = (
  params: Params,
) => Promise<TransactionWithMetadata<Result>>;

// Provide these if mint is NATIVE_MINT (Token or Token2022)
export type WrapNativeMintAdditionalParams = {
  wrapNativeMintParams?: {
    lamportsSourceAccount?: PublicKey;
    wrapLamportsAmount: bigint;
  };
};

// Provide these if mint is NATIVE_MINT (Token or Token2022)
export type UnwrapNativeMintAdditionalParams = {
  unwrapNativeMintParams?: {
    lamportsDestinationAccount?: PublicKey;
  };
};

export interface TransactionFactory {
  buildInitSmartDelegateTx: TxFactoryFn<
    InitSmartDelegateParams,
    InitSmartDelegateResult
  >;

  buildInitOneTimePreAuthorizationTx: TxFactoryFn<
    InitOneTimePreAuthorizationParams & WrapNativeMintAdditionalParams,
    InitOneTimePreAuthorizationResult
  >;

  buildInitRecurringPreAuthorizationTx: TxFactoryFn<
    InitRecurringPreAuthorizationParams & WrapNativeMintAdditionalParams,
    InitRecurringPreAuthorizationResult
  >;

  buildPausePreAuthorizationTx: TxFactoryFn<
    PausePreAuthorizationParams,
    PausePreAuthorizationResult
  >;

  buildUnpausePreAuthorizationTx: TxFactoryFn<
    UnpausePreAuthorizationParams,
    UnpausePreAuthorizationResult
  >;

  buildClosePreAuthorizationAsOwnerTx: TxFactoryFn<
    ClosePreAuthorizationAsOwnerParams & UnwrapNativeMintAdditionalParams,
    ClosePreAuthorizationAsOwnerResult
  >;

  buildClosePreAuthorizationAsDebitAuthorityTx: TxFactoryFn<
    ClosePreAuthorizationAsDebitAuthorityParams,
    ClosePreAuthorizationAsDebitAuthorityResult
  >;

  buildDebitTx: TxFactoryFn<
    DebitParams & UnwrapNativeMintAdditionalParams,
    DebitResult
  >;

  // sets delegate to smartDelegate and amount to u64::max
  buildApproveSmartDelegateTx: TxFactoryFn<
    ApproveSmartDelegateParams,
    ApproveSmartDelegateResult
  >;
}