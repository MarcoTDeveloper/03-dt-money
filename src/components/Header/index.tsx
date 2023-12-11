import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import * as Dialog from '@radix-ui/react-dialog';

import logoDTMoney from "../../assets/logo.svg";
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoDTMoney} />

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova Transação</NewTransactionButton>
                    </Dialog.Trigger>

                    <NewTransactionModal />

                </Dialog.Root>

            </HeaderContent>
        </HeaderContainer>
    )
}