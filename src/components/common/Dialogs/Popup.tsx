import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Stack,
} from "@mui/material";
import Controls from "src/components/controls/Controls";
import CloseIcon from "@mui/icons-material/Cancel";

export default function Popup({ title, children, openPopup, onClose }) {
  return (
    <Dialog open={openPopup} onClose={onClose} maxWidth="md">
      <DialogTitle>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Controls.IconButton onClick={onClose}>
            <CloseIcon />
          </Controls.IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}
