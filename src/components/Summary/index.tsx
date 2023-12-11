import { ArrowCircleUp } from "phosphor-react";
import { SummaryContainer } from "./styles";

export function Summary() {
    return(
        <SummaryContainer>
            <div>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00b37e" />
                </header>

                <strong>R$ 17.400,00</strong>
            </div>
        </SummaryContainer>
    )
}