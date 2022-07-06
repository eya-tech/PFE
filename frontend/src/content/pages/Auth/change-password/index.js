// @mui material components
// import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import {
Box,
Input,
Button
} from '@mui/material';

function Cover() {
  return (
      <Box pt={4} pb={3} px={3}>
        <Box component="form" role="form">
          <Box mb={4}>
            <Input type="password" placeholder="Old Password" fullWidth />
          </Box>{" "}
          <Box mb={4}>
            <Input type="password" placeholder="New Password"  fullWidth />
          </Box>{" "}
          <Box mb={4}>
            <Input type="password" placeholder="Confirm New Password" fullWidth />
          </Box>
          <Box mt={6} mb={1}>
            <Button
              variant="gradient"
              style={{ "background-color": "#E9D5DA", "border-radius": "20px" }}
              fullWidth
            >
              Save
            </Button>
          </Box>
        </Box>
      </Box>
  );
}

export default Cover;
