// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import {
  TransactionInstruction,
  PublicKey,
  AccountMeta,
} from "@solana/web3.js";
import BN from "bn.js";
import * as borsh from "@coral-xyz/borsh";
import * as types from "../types";

export interface ClosePreAuthorizationAccounts {
  receiver: PublicKey;
  authority: PublicKey;
  tokenAccount: PublicKey;
  preAuthorization: PublicKey;
}

export interface ClosePreAuthorizationAccountsJSON {
  receiver: string;
  authority: string;
  tokenAccount: string;
  preAuthorization: string;
}

export interface ClosePreAuthorizationInstruction {
  args: null;
  accounts: ClosePreAuthorizationAccounts;
}

export interface ClosePreAuthorizationInstructionJSON {
  args: null;
  accounts: ClosePreAuthorizationAccountsJSON;
}

export class ClosePreAuthorization {
  static readonly ixName = "closePreAuthorization";
  readonly ixName = ClosePreAuthorization.ixName;
  static readonly identifier: Buffer = Buffer.from([
    202, 3, 103, 53, 188, 38, 203, 30,
  ]);

  constructor(
    readonly programId: PublicKey,
    readonly instructionData: ClosePreAuthorizationInstruction
  ) {}

  static isIdentifierEqual(ixData: Buffer): boolean {
    return ixData.subarray(0, 8).equals(ClosePreAuthorization.identifier);
  }

  static fromDecoded(
    programId: PublicKey,
    flattenedAccounts: PublicKey[]
  ): ClosePreAuthorization {
    const accounts = {
      receiver: flattenedAccounts[0],
      authority: flattenedAccounts[1],
      tokenAccount: flattenedAccounts[2],
      preAuthorization: flattenedAccounts[3],
    };
    return new ClosePreAuthorization(programId, { args: null, accounts });
  }

  static decode(
    programId: PublicKey,
    flattenedAccounts: PublicKey[]
  ): ClosePreAuthorization {
    return ClosePreAuthorization.fromDecoded(programId, flattenedAccounts);
  }

  toAccountMetas(): AccountMeta[] {
    return [
      {
        pubkey: this.instructionData.accounts.receiver,
        isSigner: false,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.authority,
        isSigner: true,
        isWritable: false,
      },
      {
        pubkey: this.instructionData.accounts.tokenAccount,
        isSigner: false,
        isWritable: false,
      },
      {
        pubkey: this.instructionData.accounts.preAuthorization,
        isSigner: false,
        isWritable: true,
      },
    ];
  }

  build() {
    const data = ClosePreAuthorization.identifier;
    const ix = new TransactionInstruction({
      keys: this.toAccountMetas(),
      programId: this.programId,
      data,
    });
    return ix;
  }

  toArgsJSON(): null {
    return null;
  }

  toAccountsJSON(): ClosePreAuthorizationAccountsJSON {
    return {
      receiver: this.instructionData.accounts.receiver.toString(),
      authority: this.instructionData.accounts.authority.toString(),
      tokenAccount: this.instructionData.accounts.tokenAccount.toString(),
      preAuthorization:
        this.instructionData.accounts.preAuthorization.toString(),
    };
  }

  toJSON(): ClosePreAuthorizationInstructionJSON {
    return { args: this.toArgsJSON(), accounts: this.toAccountsJSON() };
  }
}