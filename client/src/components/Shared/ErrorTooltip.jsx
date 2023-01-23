import { Tooltip, TooltipWrapper } from "./Shared.styles";

const ErrorToolTip = ({ text }) => {
    return (
        <TooltipWrapper>
            <Tooltip>{text}</Tooltip>
        </TooltipWrapper>
    );
};

export default ErrorToolTip;
