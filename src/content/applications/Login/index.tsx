import {
  Box,
  Card,
  Typography,
  Container,
  Divider,
  Button,
  FormControl,
  OutlinedInput,
  InputAdornment
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import TextField from '@mui/material/TextField';

import { styled } from '@mui/material/styles';

const MainContent = styled(Box)(
  ({ theme }) => `
    height: 100%;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
);

const OutlinedInputWrapper = styled(OutlinedInput)(
  ({ theme }) => `
    background-color: ${theme.colors.alpha.white[100]};
`
);

const ButtonSearch = styled(Button)(
  ({ theme }) => `
    margin-right: -${theme.spacing(1)};
`
);

function Status404() {
  return (
    <>
      <Helmet>
        <title>Login Page</title>
      </Helmet>
      <MainContent>
        <Container maxWidth="md">
          <Container maxWidth="sm">
            <Card sx={{ textAlign: 'center', mt: 3, p: 4 }}>
              <FormControl variant="outlined" fullWidth>
                  <TextField
                    required
                    id="outlined-required"
                    type="email"
                    label="E-mail"
                    defaultValue=""
                  />
                  <br />
                <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                />
              </FormControl>
              <Divider sx={{ my: 4 }} />
              <Button href="/dashboards/crypto" variant="contained" style={{marginRight: 45, width: '30%'}}>
                Register
              </Button>
              <Button href="/dashboards/crypto" variant="contained" style={{width: '30%'}}>
                Login
              </Button>
            </Card>
          </Container>
        </Container>
      </MainContent>
    </>
  );
}

export default Status404;
