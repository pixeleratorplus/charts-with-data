import React from "react";
import NavBar from "../NavBar";
import { Link as Links } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Link from "@material-ui/core/Link";
import {
  Box,
  Paper,
  Typography,
  Container,
  Button,
  Divider
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
}));

export default props => {
  const passwordLink = "https://i2tb9.csb.app/reinitialisation-mot-de-passe";
  const idLink = "https://i2tb9.csb.app/reinitialisation-identifiant";
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <NavBar />
      <Container maxWidth="lg">
        <Paper
          style={{
            padding: 15,
            boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.18)",
            borderRadius: 10
          }}
        >
          <Box display="flex" alignItems="center" justifyContent="center">
            <Box flexGrow={1}>
              <Typography variant="h5" style={{ fontWeight: "bold" }}>
                Tutoriels
              </Typography>
            </Box>
            <Box p={1}>
              <Links to="/" style={{ textDecoration: "none", color: "white" }}>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#1875F0", color: "white" }}
                >
                  Accueil
                </Button>
              </Links>
            </Box>
          </Box>
          <Divider style={{ marginTop: 10, marginBottom: 15 }} />
          <div className={classes.root}>
            <ExpansionPanel
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography className={classes.heading}>Inscription</Typography>
                <Typography className={classes.secondaryHeading}>
                  Que faire apr??s l'inscription ?
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography component="h4">
                  Que se passe-t-il apr??s avoir renvoy?? ce formulaire pour
                  constituer votre demande d'inscription???? <br />
                  <ul>
                    <li>
                      Votre demande passe en commission d???admission (elle se
                      r??unit au minimum tous les lundis).
                    </li>
                    <li>
                      Si votre dossier est accept??, nous vous faisons passer des
                      tests techniques (sauf pour une admission en 1re ann??e).
                    </li>
                    <li>
                      Ensuite, un entretien d???orientation professionnelle sera
                      programm??.
                    </li>
                    <li> Signature du contrat d???inscription.</li>
                  </ul>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography className={classes.heading}>Connexion</Typography>
                <Typography className={classes.secondaryHeading}>
                  Que faire si j'ai oublier mon mot de passe?
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Si vous avez oublier votre mot de passe, pas de panique
                  rendez-vous sur
                  <Link
                    href={passwordLink}
                    style={{ marginRight: 5, marginLeft: 5 }}
                  >
                    cette page
                  </Link>
                  une fois sur cette page veuillez renseigner les diff??rents
                  champs propos??.
                  <br />
                  <br />
                  Une fois les champs remplis et envoy??, un email de
                  v??rification va vous ??tre envoy?? dans votre bo??te mail.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography className={classes.heading}>Connexion</Typography>
                <Typography className={classes.secondaryHeading}>
                  Que faire si j'ai oubli?? mon nom d'utilisateur ?
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Si vous avez oublier votre identifiant, pas de panique
                  rendez-vous sur
                  <Link href={idLink} style={{ marginRight: 5, marginLeft: 5 }}>
                    cette page
                  </Link>
                  une fois sur cette page veuillez renseigner les diff??rents
                  champs propos??.
                  <br />
                  <br />
                  Une fois les champs remplis et envoy??, un email de
                  v??rification va vous ??tre envoy?? dans votre bo??te mail.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography className={classes.heading}>T??ches</Typography>
                <Typography className={classes.secondaryHeading}>
                  Comment fonctionne la partie t??che?
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  La partie t??che, est une section tr??s importante de
                  l'inscription, en effet, cette derni??re permet de d'afficher
                  les derni??res ??tapes non compl??t??es. <br />
                  <br />
                  Pour compl??ter les t??ches, veuillez cliquer sur le bouton mis
                  ?? disposition, pour voir tous les diff??rentes t??ches que vous
                  devez accomplir veuillez vous rendre sur
                  <Link href="/taches" style={{ marginLeft: 5 }}>
                    cette page.
                  </Link>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </Paper>
      </Container>
    </>
  );
};
