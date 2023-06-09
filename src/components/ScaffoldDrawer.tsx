import { Check } from "@mui/icons-material";
import {
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemButton,
  Divider,
  Button,
  ListItemIcon,
} from "@mui/material";
import { useAtom } from "jotai";
import React from "react";
import { lessonStateAtom } from "../atoms/lessonStateAtom";
import SearchBar from "./SearchBar";
import GenericBox from "./GenericBox";
import Paragraph from "./Paragraph";

export type ScaffoldDrawerProps = {
  drawerTitle: string;
  drawerItems: { text: string; slugified: string }[];
  onItemClicked: (itemSlugified: string) => void;
};
export default ({
  drawerTitle,
  drawerItems,
  onItemClicked,
}: ScaffoldDrawerProps) => {
  const [lessonState] = useAtom(lessonStateAtom);

  return (
    <>
      <Toolbar>{<SearchBar />}</Toolbar>
      <List>
        <ListItem>
          <ListItemText>
            <Typography variant="body1" color="primary.main">
              {drawerTitle}
            </Typography>
          </ListItemText>
        </ListItem>
        {drawerItems.map((item) => (
          <ListItem key={`${item.slugified}`} disablePadding>
            <ListItemButton
              onClick={() => {
                onItemClicked(item.slugified);
              }}
            >
              {lessonState == "POS_TESTE_RESPONDIDO" ? (
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
              ) : undefined}
              <ListItemText
                sx={{ ml: 1 }}
                disableTypography
                primary={
                  <Typography variant="overline">{item.text}</Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider />
        <ListItem>
          <Button
            variant="outlined"
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            Reiniciar progresso
          </Button>
        </ListItem>
        <ListItem>
          <GenericBox
            title="Referências bibliográficas"
            anchorText="Ver referências"
          >
            <>
              <Typography variant="h4" sx={{ ml: 2 }}>
                Hemostasia
              </Typography>
              {[
                "Mackman N. The role of tissue factor and factor VIIa in hemostasis. Anesth Analg. 2009;108:1447–1452. doi: 10.1213/ane.0b013e31819bceb1",
                "Cool DE, MacGillivray RT (outubro de 1987). «Characterization of the human blood coagulation factor XII gene. Intron/exon gene organization and analysis of the 5'-flanking region». The Journal of Biological Chemistry. 262 (28): 13662–73. PMID 2888762",
                "«Fibrinolysis - primary or secondary: MedlinePlus Medical Encyclopedia». medlineplus.gov (em inglês). Consultado em 6 de janeiro de 2021",
                "JUNQUEIRA, L. C.; CARNEIRO, J. Histologia básica. 13ª edição. Rio de Janeiro - RJ: Guanabara Koogan, 2017.",
              ].map((e) => (
                <Paragraph>{e}</Paragraph>
              ))}
              <Typography variant="h4" sx={{ ml: 2 }}>
                Histologia da pele e dos vasos sanguíneos
              </Typography>
              {[
                "Gitirana, Lycia de Brito (2004). Histologia - Conceitos Básicos dos Tecidos 1ª ed. São Paulo: Atheneu. 172 páginas. ISBN 8573796774",
                "JUNQUEIRA, L. C.; CARNEIRO, J. Histologia básica. 13ª edição. Rio de Janeiro - RJ: Guanabara Koogan, 2017. Gilbert, Scott F. (2000). «Lateral Plate Mesoderm». Developmental Biology. 6th edition (em inglês). Consultado em 14 de dezembro de 2021",
                "«ectoderm | anatomy». Encyclopedia Britannica. Consultado em 10 de maio de 2016",
                "Infopédia. «endoderme | Definição ou significado de endoderme no Dicionário Infopédia de Termos Médicos». Infopédia - Dicionários Porto Editora. Consultado em 14 de dezembro de 2021",
              ].map((e) => (
                <Paragraph>{e}</Paragraph>
              ))}
              <Typography variant="h4" sx={{ ml: 2 }}>
                Peculiaridades do colágeno
              </Typography>
              {[
                "D’AGOSTINI BORGES ESTEVES, M. L. .; BRANDÃO, B. J. F. . COLÁGENO E O ENVELHECIMENTO CUT NEO. BWS Journal, [S. l.], v. 5, p. 1–10, 2022. Disponível em: https://bwsjournal.emnuvens.com.br/bwsj/article/view/161. Acesso em: 22 maio. 2023.",
                "MONTANHA, Vanessa Camila. Preparação e caracterização de micropartículas de colágeno ou fibroína como suporte para células-tronco. 2012. 88 f. Dissertação (Mestrado) - Curso de Bioengenharia, Universidade de São Paulo, São Carlos, 2012.",
                "OLIVEIRA, Vagne de Melo et al. Colágeno: características gerais e produção de peptídeos bioativos - uma revisão com ênfase nos subprodutos do pescado. Acta Of Fisheries And Aquatic Resources, [S.I], v. 5, n. 2, p. 56-68, jul. 2017.",
                "SIONKOWSKA, Alina. Modification of collagen films by ultraviolet irradiation. Polymer Degradation And Stability, [S.L.], v. 68, n. 2, p. 147-151, abr. 2000. Elsevier BV. http://dx.doi.org/10.1016/s0141-3910(99)00176-7.",
              ].map((e) => (
                <Paragraph>{e}</Paragraph>
              ))}
              <Typography variant="h4" sx={{ ml: 2 }}>
                Ehlers Danlos
              </Typography>
              {[
                "KARTHIKEYAN, Akilandeswari; VENKAT-RAMAN, Narayanaswamy. Hypermobile Ehlers–Danlos syndrome and pregnancy. Obstetric Medicine, [S.L.], v. 11, n. 3, p. 104-109, 20 mar. 2018. SAGE Publications. http://dx.doi.org/10.1177/1753495x18754577.",
                "MALFAIT, Fransiska; WENSTRUP, Richard J.; PAEPE, Anne de. Clinical and genetic aspects of Ehlers-Danlos syndrome, classic type. Genetics In Medicine, [S.L.], v. 12, n. 10, p. 597-605, out. 2010. Elsevier BV. http://dx.doi.org/10.1097/gim.0b013e3181eed412.",
              ].map((e) => (
                <Paragraph>{e}</Paragraph>
              ))}
              <Typography variant="h4" sx={{ ml: 2 }}>
                Vitamina C e colágeno
              </Typography>
              {[
                "LYKKESFELDT, Jens; MICHELS, Alexander J.; FREI, Balz. Vitamin C. Advances In Nutrition, [S.L.], v. 5, n. 1, p. 16-18, jan. 2014. Elsevier BV. http://dx.doi.org/10.3945/an.113.005157.",
                "MANELA-AZULAY, Mônica; MANDARIM-DE-LACERDA, Carlos Alberto; PEREZ, Maurício de Andrade; FILGUEIRA, Absalom Lima; CUZZI, Tullia. Vitamina C. Anais Brasileiros de Dermatologia, [S.L.], v. 78, n. 3, p. 265-272, jun. 2003. FapUNIFESP (SciELO). http://dx.doi.org/10.1590/s0365-05962003000300002.",
              ].map((e) => (
                <Paragraph>{e}</Paragraph>
              ))}
              <Typography variant="h4" sx={{ ml: 2 }}>
                Trombofilias
              </Typography>
              {[
                "D'AMICO, Elbio Antonio. Trombofilia: quando suspeitar e como investigar?. Revista da Associação Médica Brasileira, [S.L.], v. 49, n. 1, p. 7-8, jan. 2003. Elsevier BV. http://dx.doi.org/10.1590/s0104-42302003000100012.",
                "OLIVEIRA, André Luiz Malavasi Longo de. Trombofilias maternas hereditárias com e sem tromboembolismo venoso: resultados maternos e neonatais. 2010. Dissertação (Mestrado em Obstetrícia e Ginecologia) - Faculdade de Medicina, Universidade de São Paulo, São Paulo, 2010. doi:10.11606/D.5.2010.tde-25082010-112901. Acesso em: 2023-05-24.",
              ].map((e) => (
                <Paragraph>{e}</Paragraph>
              ))}
              <Typography variant="h4" sx={{ ml: 2 }}>
                Coagulograma
              </Typography>
              {[
                "Cagnolati D, Sankarankutty A, Plínio J, Rocha S, Beer A, Castro O. HEMOSTASIA E DISTÚRBIOS DA COAGULAÇÃO [Internet]. Available from: https://sites.usp.br/dcdrp/wp-content/uploads/sites/273/2017/05/hemostasia_revisado.pdf",
                "Werneck Da Cruz1 G, Cristiane, Barbosa R, Ueda M. INTERPRETAÇÃO E APLICAÇÃO DO COAGULOGRAMA NA CLÍNICA MÉDICA [Internet]. 2011. Available from: http://www.cesumar.br/prppge/pesquisa/epcc2011/anais/gisele_werneck_cruz.pdf",
              ].map((e) => (
                <Paragraph>{e}</Paragraph>
              ))}
            </>
          </GenericBox>
        </ListItem>
        <ListItem>
          <ListItemText sx={{ textAlign: "center" }}>
            <Typography variant="overline">Versão 1.1.0</Typography>
          </ListItemText>
        </ListItem>
      </List>
    </>
  );
};
