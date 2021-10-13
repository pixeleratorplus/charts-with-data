import React from "react";
import { Box, Typography, Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";

export default props => {
  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={1}
        m={1}
        css={{ height: "100vh" }}
      >
        <Box p={1}>
          <img
            src="https://i.imgur.com/QIxIKBH.png"
            alt="404image"
            style={{ width: 350 }}
          />
          <Box p={1}>
            <Typography
              variant="subtitle2"
              style={{ color: "black", fontSize: 15 }}
            >
              Oops ! Vous n'êtes pas censé être ici <br />
              Une fois vivant et maintenant mort, ce fantôme semble avoir des
              affaires inachevées. Pourrait-il être avec vous ? Ou le trésor
              caché sous le plancher du vieux manoir dans les collines qui
              n'atteindra peut-être jamais son propriétaire légitime, un
              instituteur compatissant de Brooklyn.
            </Typography>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                style={{ color: "#1875F0", fontWeight: "bold", padding: 0 }}
              >
                Revenir à l'accueil
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
