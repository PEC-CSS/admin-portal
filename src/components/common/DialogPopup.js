import { Dialog } from "@mui/material";
import { Josefin_Sans } from "next/font/google";

const font = Josefin_Sans({
    preload: false,
});

function DialogPopup({
    icon,
    errorTitle,
    errorDescription,
    handleClose,
    handleAction,
}) {
    return (
        <Dialog
            open={true}
            onClose={handleClose}
            sx={{ padding: "0", margin: "0", backdropFilter: "blur(1px)" }}
        >
            <div className={``}>
                <div className={``}>
                    <div className={` ${font.className}`}>
                        {icon}
                        {errorTitle}
                    </div>
                    <div className={``}> {errorDescription} </div>
                </div>

                <button onClick={handleAction ?? handleClose}> OK </button>
            </div>
        </Dialog>
    );
}

export default DialogPopup;
