"use strict";

// groups: [professor name, group name, webpage]
const group_names = [
  [
    "Prof. Peter Albers",
    "Symplectic Dynamics",
    "https://www.mathi.uni-heidelberg.de/~palbers/",
    "Peter Albers obtained his PhD from Leipzig University. After being a postdoc at NYU, Heinz Hopf lecturer at ETH Zürich, and von Neumann fellow at the IAS Princeton he accepted a tenure-track assistant professorship at Purdue University. In 2012 he moved to WWU Münster and accepted in 2017 a Chair for Pure Mathematics at Heidelberg University.",
    "",
  ],
  [
    "Prof. Artur Andrzejak",
    "Parallel and\nDistributed Systems",
    "https://pvs.ifi.uni-heidelberg.de/team/aa",
    "Artur Andrzejak received a PhD degree in computer science from ETH Zurich and a habilitation degree from FU Berlin. He worked at HP Labs Palo Alto in 2001–2002, at ZIB Berlin in 2003–2009, and was co-leading Data Mining Dep. at I2R Singapore in 2010. Since 2010 he holds the Chair for Parallel and Distributed Systems at Institute of Computer Science.",
    "",
  ],
  [
    "Prof. Peter Bastian",
    "Parallel Computing",
    "https://conan.iwr.uni-heidelberg.de/",
    "Peter Bastian obtained his PhD from Heidelberg University. After four years at Stuttgart University and his habilitation at Kiel University he was assistant professor at Heidelberg University and full professor at Stuttgart University before he became a full professor at IWR in 2008. From 2011–2020 he served as the scientific director of HGS MathComp. ",
    "",
  ],
  [
    "Prof. Hans Georg Bock",
    "Simulation and Optimization",
    "https://typo.iwr.uni-heidelberg.de/",
    "Hans Georg Bock studied Mathematics in Cologne and Bonn, where he obtained his doctoral degree. After a visiting professorship in Heidelberg, he became full professor for Applied Mathematics in Augsburg. Since 1991, he is full professor at IWR, Heidelberg. He is active as initiator, project leader and consultant of several research programs.",
    "",
  ],
  [
    "Prof. Gebhard Böckle",
    "Computational Arithmetic\nGeometry",
    "https://typo.iwr.uni-heidelberg.de/groups/arith-geom/home",
    "Gebhard Böckle received his Ph.D. from the University of Illinois at Urbana-Champaign in 1995. As a postdoc, he held positions in Essen, Strasbourg, Mannheim and the ETH Zürich. From 2003 to 2010 he was professor of Mathematics at the University of Duisburg-Essen. Since 2010 he leads the Computational Arithmetic Geometry group at Heidelberg University.",
    "",
  ],
  [
    "Prof. André Butz",
    "Atmospheric Physics",
    "https://www.iup.uni-heidelberg.de/en/research/ghg",
    "André Butz graduated with a Ph.D. in physics from Heidelberg University. After a postdoctoral stay in Utrecht, he became Emmy-Noether fellow at Karlsruhe and, in 2016, he was appointed professor at Deutsches Zentrum für Luft- und Raumfahrt and Munich University. Since 2018, he is professor at the Institute of Environmental Physics in Heidelberg.",
    "",
  ],
  [
    "Prof. Peter Comba",
    "Theory and Modeling in Inorganic\nand Bioinorganic Chemistry",
    "https://www.uni-heidelberg.de/fakultaeten/chemgeo/aci/comba/",
    "Peter Comba obtained his diploma from ETH Zürich and a PhD from the Université de Neuchâtel. After three years at the Australian National University in Canberra, two years at the University of Lausanne and five years at the University of Basel, he got his current position in 1992 at the Inorganic Chemistry department and the IWR in Heidelberg.",
    "",
  ],
  [
    "Prof. Andreas Dreuw",
    "Theoretical and Computational\nChemistry",
    "https://wwwagdreuw.iwr.uni-heidelberg.de/",
    "Andreas Dreuw obtained his PhD from Heidelberg University. After two years at the UC Berkeley, and eight years as Emmy-Noether and Heisenberg fellow at Goethe-University Frankfurt, he holds the Chair for Theoretical and Computational Chemistry at the IWR since 2011. At present, he is the managing director of the IWR.",
    "",
  ],
  [
    "Dr. Stefan Fischer",
    "Computational Biochemistry",
    "http://spider.iwr.uni-heidelberg.de/~fischer/index.html",
    "Stefan Fischer obtained his Ph.D. in biophysics from Harvard University in 1992, in the theoretical chemistry group of Martin Karplus (2013 Nobel laureate), where he pioneered the development of computational methods for studying complex motions and reactions in proteins. Since 1999, he heads the Computational Biochemistry group at the IWR.",
    "",
  ],
  [
    "Prof. Anette Frank",
    "Natural Language\nProcessing Group",
    "https://www.cl.uni-heidelberg.de/nlpgroup/person/frank",
    "Anette Frank obtained her PhD from the University of Stuttgart. After 4 years as a scientific researcher at the Xerox Research Centre Europe in Grenoble and 6 years as a senior researcher at the German Research Centre for Artificial Intelligence in Saarbrücken, she holds the Chair of Computational Linguistics at Heidelberg University. ",
    "",
  ],
  [
    "Prof. Frauke Gräter",
    "Molecular Biomechanics",
    "https://www.h-its.org/de/forschung/mbm/",
    "Frauke  Gräter  is  head  of  the  research  group  “Molecular  Biomechanics” at the Heidelberg Institute or Theoretical Studies (HITS) since 2009, professor at IWR since 2013, and HITS Scientific Director 2021–2022. Before moving to Heidelberg, she was a Feodor Lynen  postdoc  fellow  at  Columbia  University  and  a  junior  group  leader at the Partner Institute for Computational Biology, Shanghai",
    "",
  ],
  [
    "Dr. Frederik Graw",
    "Modelling Infection & Immunity",
    "https://www.bioquant.uni-heidelberg.de/research/junior-research-groups/",
    "Frederik Graw studied mathematics at the universities of Siegen and Freiburg, and obtained his PhD in Theoretical Immunology from the ETH Zurich in 2010. After a PostDoc at the Los Alamos National Laboratory he became a BIOMS group leader at IWR/Heidelberg University in 2012. Since 2019, he is a Chica and Heinz Schaller fellow at the BioQuant/IWR.",
    "",
  ],
  [
    "Dr. Ganna Gryn'ova",
    "Computational Carbon Chemistry",
    "https://www.h-its.org/research/ccc/",
    "Anya Gryn’ova received her PhD in computational chemistry from Australian National University in 2014. Next, she was a Marie Skłodowska-Curie Actions postdoctoral fellow at EPF Lausanne. In 2019, Dr. Gryn’ova started her junior research group “Computational Carbon Chemistry” at the Heidelberg Institute for Theoretical Studies and IWR.",
    "",
  ],
  [
    "Prof. Eva Gutheil",
    "Multiphase Flows\nand Combustion",
    "https://wwwaggutheil.iwr.uni-heidelberg.de/researchAreas.htm",
    "Eva Gutheil received her PhD in Chemical Engineering (TU Darmstadt) and her second PhD in Thermal Energy Sciences (Stuttgart University). After three post-doctoral years at UC San Diego and UC Irvine, about two years at DLR (German Aerospace Center) Stuttgart and four years at Stuttgart University, she became full professor at Heidelberg University in 1998.",
    "",
  ],
  [
    "Prof. Roland Herzog",
    "Scientific Computing\nand Optimization",
    "https://scoop.iwr.uni-heidelberg.de/",
    "Roland Herzog obtained his PhD from the University of Bayreuth. After five years at the University of Graz and the Johann Radon Institute for Computational and Applied Mathematics in Linz, he was appointed professor for numerics of PDEs at Chemnitz University of Technology. Since 2021, he holds the Chair for Scientific Computing and Optimization at the IWR.",
    "",
  ],
  [
    "Prof. Jürgen Hesser",
    "Data Analysis and Modeling\nin Medicine",
    "http://medphyssrv1.medma.uni-heidelberg.de/cms/",
    "Jürgen Hesser was Professor in Medical Technology at the University of Mannheim before he became Professor in Experimental Radiation Oncology at the Medical Faculty Mannheim, Heidelberg University. Since August 2019, he heads the department for Data Analysis and Modeling in Medicine at the Mannheim Institute for Intelligent Systems in Medicine.",
    "",
  ],
  [
    "Prof. Vincent Heuveline",
    "Engineering Mathematics and\nComputing Lab (EMCL)",
    "https://emcl.iwr.uni-heidelberg.de/",
    "Vincent Heuveline is full professor for Scientific Computing and leads the Engineering Mathematics and Computing Lab (EMCL) at IWR. He is Director of the Computing Centre and Chief Information Officer (CIO) of Heidelberg University. Furthermore, he leads the Data Mining and Uncertainty Quantification group at the Heidelberg Institute for Theoretical Studies (HITS gGmbH).",
    "",
  ],
  [
    "PD Dr. Ahmad Hujeirat",
    "Theoretical and Computational\nAstrophysics",
    "https://typo.iwr.uni-heidelberg.de/groups/compastro/home/",
    "Ahmad Hujeirat obtained his M.Sc. from the Technion, PhD in applied mathematics from Heidelberg University, habilitation in physics from Basel University and habilitation in Astronomy from Heidelberg University. After his stays at the MPIA, Basel University and the Weizmann Institute/Israel, he joined the IWR in 2011 to lead the independent CAAD-research group.",
    "",
  ],
  [
    "Prof. Bernhard Höfle",
    "3DGeo – 3D Geospatial\nData Processing",
    "https://www.geog.uni-heidelberg.de/3dgeo/index.html",
    "Bernhard Höfle is a Geographer combining Geoinformatics and Physical Geography. He obtained his Doctor of Natural Science (2007) from University of Innsbruck. He joined Heidelberg University as Group Leader and Junior Professor (2011–2017). Since 2017 he is Full Professor of GIScience and 3D Spatial Data Processing and Dean of Studies (Geography).",
    "",
  ],
  [
    "Prof. Jan Johannes",
    "Statistics of Inverse Problems",
    "https://www.janjohannes.de/en/2016/iDK/",
    "Jan Johannes obtained his PhD from Humboldt-Universität zu Berlin. After six years as Postdoctoral fellow in Toulouse (France) and Heidelberg, six years as Professor for Mathematical Statistics at Université catholique de Louvain (Belgium) and ENSAI in Rennes (France) he became Professor for Mathematical Statistics at Heidelberg University.",
    "",
  ],
  [
    "Prof. Bernd Jähne",
    "Air-Sea Interactions",
    "https://hci.iwr.uni-heidelberg.de/dip",
    "PhD 1980 and habilitation 1985 in physics at Heidelberg University, habilitation in computer science 1992 University of Hamburg-Harburg, 1988–2000 Research Professor at Scripps Institution of Oceanography, UCSD, 1994–2018 Chair for Image Processing at IWR and IUP. 2008–2017 coordinating director of the HCI, senior professor since Oct. 2018.",
    "",
  ],
  [
    "Prof. Guido Kanschat",
    "Mathematical Methods\nof Simulation",
    "http://www.mathsim.eu/",
    "Guido Kanschat received his PhD from Heidelberg University. After an appointment as visiting assistant professor in Minnesota, he became assistant, associate, and full professor at Texas A&M University. He holds the chair for Mathematical Methods of Simulation at the IWR since 2012 and serves as the Founding Dean of the Faculty of Engineering Sciences.",
    "",
  ],
  [
    "Prof. Ralf Klessen",
    "Theoretical Star\nFormation Studies",
    "https://www.ita.uni-heidelberg.de/research/klessen/index.shtml?lang=en",
    "Ralf Klessen did his PhD in Heidelberg, worked as postdoc in Leiden and Santa Cruz, and as Emmy Noether fellow in Potsdam. Since 2006 he is professor for theoretical astrophysics at Heidelberg University. He obtained an ERC Advanced Grant in 2013 and an ERC Synergy Grant in 2019. Until summer 2021 he also was one of three speakers of the STRUCTURES Excellence Cluster",
    "",
  ],
  [
    "Prof. Hans Knüpfer",
    "Applied Analysis\n(CV/PDE)",
    "https://typo.iwr.uni-heidelberg.de/",
    "Hans Knüpfer obtained his PhD from the University of Bonn under the supervision of Felix Otto. After three years as Courant Instructor at New York University, two years at the Hausdorff Institute in Bonn, he holds the Chair for Calculus of Variations and Partial Differential Equations at the Institute of Applied Mathematics since 2013.",
    "",
  ],
  [
    "Prof. Ekaterina Kostina",
    "Numerical Optimization",
    "http://wwwagkostina.iwr.uni-heidelberg.de/kostina.html",
    "Ekaterina Kostina is a Professor in Numerical Analysis. After obtaining a PhD in Mathematics from the Institute of Mathematics, Minsk, she worked there as a senior scientist. In 1997, she moved to Germany, where she was an assistant professor at the IWR. Between 2006 and 2015 she held a Professorship in Numerical Optimization at Marburg University.",
    "",
  ],
  [
    "Prof. Kurt Kremer",
    "Polymer Theory",
    "https://www.mpip-mainz.mpg.de/de/kremer",
    "1983 Kurt Kremer received his PhD at Cologne University. After PostDoc at Exxon Research and Engineering, USA, C1 Assistant at the Institute of Physics, Mainz, and senior staff scientists at the IFF at the Jülich Research Center. He became Director at the MPI for Polymer Research in 1995, and 2011 Honorary Professor at Heidelberg University.",
    "",
  ],
  [
    "Dr. Susanne Krömker",
    "Visualization and\nNumerical Geometry",
    "https://vngg.iwr.uni-heidelberg.de/?page=about",
    "Susanne Krömker received received her PhD in mathematics from Heidelberg University in 1997. Subsequently, she was a research associate (C1) and afterwards became head of Visualization and Numerical Geometry Group (vNGG) at IWR. In the meantime she was head of computer graphics at HGS Mathematical and Computational Methods for the Sciences. ",
    "",
  ],
  [
    "Prof. Ursula Kummer",
    "Modeling of\nBiological Processes",
    "https://typo.iwr.uni-heidelberg.de/",
    "Ursula Kummer studied biochemistry, chemistry and physics at the Universities of Tübingen, Germany and Oregon, Eugene, USA, respectively. She became a group leader at EML Research gGmbH in Heidelberg in 2000. In 2007 she joined Heidelberg University as full professor. Currently, she is managing director of BIOQUANT.",
    "",
  ],
  [
    "Prof. Anna Marciniak-Czochra",
    "Applied Analysis and\nModelling in Biosciences",
    "http://wwwagmarciniak.iwr.uni-heidelberg.de/",
    "Anna Marciniak-Czochra studied Mathematics at Warsaw Univ. and obtained her PhD from Heidelberg Univ. In 2007 she received ERC starting grant, in 2008 was granted Emmy Noether group, and in 2011 a Dr. Habil. from Wroclaw Univ. She is a Professor of Applied Math. at Heidelberg University and a head of research group at IAM, IWR and BIOQUANT Center.",
    "",
  ],
  [
    "Prof. Björn Ommer",
    "Computer Vision",
    "https://hci.iwr.uni-heidelberg.de/compvis",
    "Björn Ommer has been a professor for Scientific Computing at the IWR and leading the Computer Vision Group since 2009. He received his PhD from ETH Zurich and served as a postdoctoral scholar at UC Berkeley. He has served as one of the directors of the IWR and of the HCI. In 2021 he accepted a chair at the LMU Munich where he is now heading the Machine Vision & Learning Group.",
    "",
  ],
  [
    "Prof. Barbara Paech",
    "Software Engineering",
    "https://se.ifi.uni-heidelberg.de/home.html",
    "Barbara Paech holds a Habilitation in Computer Science from the TU München. Between 1999 and 2003 she was department head at the Fh IESE. Since 2003 she is professor at the University of Heidelberg. She is member of the DFG review board Software Engineering and founding member of the International Requirements Engineering Board.",
    "",
  ],
  [
    "Jun. Prof. Maria Beatrice Pozzetti",
    "Geometric Group Theory",
    "https://www.mathi.uni-heidelberg.de/~pozzetti/",
    "Beatrice Pozzetti obtained her PhD from ETH Zürich. After a semester at MSRI in Berkeley, and two years as postdoc at Warwick University, she joined the Mathematical Institute as Juniorprofessor. She is now tenure track Junior Professor in STRUCTURES, and Emmy Noether group leader at the Mathematical Institute. She joined IWR as associated member in November 2021.",
    "",
  ],
  [
    "Prof. Ralf Rannacher",
    "Numerical Methods",
    "https://typo.iwr.uni-heidelberg.de/",
    "Rolf Rannacher obtained his PhD 1974 at the Univ. of Frankfurt/Main and his Habilitation 1978 at the Univ. of Bonn. After a 1-year stay at the Univ. of Michigan, he was Prof. at the Univ. of Erlangen and Saarbrücken. Since 1988 he is Prof. for Numerical Mathematics at Heidelberg University and after his retirement 2018 Senior Member of IWR. ",
    "",
  ],
  [
    "Prof. Stefan Riezler",
    "Statistical Natural Language\nProcessing Group",
    "https://www.cl.uni-heidelberg.de/statnlpgroup/",
    "Stefan Riezler obtained his PhD from the University of Tübingen. After post-doctoral work at Brown University, he spent a decade in industry research labs in Silicon Valley (Xerox PARC, Google Research). Prof. Riezler is full professor at the Computational Linguistics department at Heidelberg University since 2010.",
    "",
  ],
  [
    "Prof. Joacim Rocklöv",
    "Artificial Intelligence in the\nResearch of Infectious Diseases\nImpacted by Climate Change",
    "https://www.umu.se/en/staff/joacim-rocklov/?flik=omnamnanden",
    "Joacim Rocklöv is a globally recognized researcher within the field of climate change and infectious diseases. He obtained his PhD from Umeå University in Sweden. In the year 2021 he was awarded an Alexander von Humboldt Professorship with the IWR and the Heidelberg Institute of Global Health. He now holds a chair for AI in infectious diseases impacted by climate change at IWR.",
    "",
  ],
  [
    "Prof. Kurt Roth",
    "Terrestrial Systems & Chaotic,\nComplex, and Evolving\nEnvironmental Systems",
    "http://ts.iup.uni-heidelberg.de/",
    "Kurt Roth obtained his doctoral degree from ETH Zürich, spent two years as postdoc at UC Riverside and six years as professor of soil physics at Universität Hohenheim before he joined Universität Heidelberg as professor of experimental physics (environmental physics) in 1998. As of April 2021 he is retired.",
    "",
  ],
  [
    "Prof. Carsten Rother",
    "Computer Vision\nand Learning Lab",
    "https://hci.iwr.uni-heidelberg.de/vislearn/contact/",
    "Carsten Rother obtained his PhD in 2003 from the Royal Institute of Technology in Stockholm. He was then with Microsoft Research Cambridge/UK for 10 years, and after that he was Professor at TU Dresden. In 2017 he was appointed as Professor at University Heidelberg.",
    "",
  ],
  [
    "Prof. Filip Sadlo",
    "Visual Computing",
    "https://vcg.iwr.uni-heidelberg.de/",
    "Filip Sadlo received his Master’s and PhD degrees in computer science from ETH Zurich. In 2014, after six years at the Visualization Research Center of the University of Stuttgart, he moved to Heidelberg to chair the Visual Computing Group at the IWR.",
    "",
  ],
  [
    "Prof. Robert Scheichl",
    "Numerical Analysis and\nUncertainty Quantification",
    "https://katana.iwr.uni-heidelberg.de/",
    "Robert Scheichl obtained his PhD from the University of Bath, UK. After a year as Marie-Curie Fellow at Institut Francais du Petrole in Paris he returned to Bath spending 17 years as Lecturer, Senior Lecturer and Professor there. In 2018, he moved to Heidelberg where he holds the Chair of Numerical Analysis at the Institute for Applied Mathematics.",
    "",
  ],
  [
    "Prof. Christoph Schnörr",
    "Image and Pattern Analysis",
    "https://ipa.math.uni-heidelberg.de/dokuwiki/doku.php",
    "Christoph Schnörr received his doctoral degree from the Technical University of Karlsruhe. After appointments in Hamburg and Mannheim, he joined the Heidelberg University in 2008. He is member of the Institute of Applied Mathematics, co-director of the HCI and member of the Steering Committee of the Cluster of Excellence STRUCTURES.",
    "",
  ],
  [
    "Prof. Ulrich Schwarz",
    "Physics of Complex Biosystems",
    "https://www.thphys.uni-heidelberg.de/~biophys/index.php?lang=e",
    "After a PhD at the Max Planck Institute of Colloids and Interfaces at Potsdam and a postdoctoral stay at the Weizmann Institute at Israel, Ulrich Schwarz headed an Emmy Noether research group, first at Potsdam and later at Heidelberg. 2008 he was appointed professor for theoretical biophysics at Karlsruhe. 2009 he was appointed professor for theoretical physics at Heidelberg.",
    "",
  ],
  [
    "Prof. Oriol Vendrell",
    "Theoretical Chemistry",
    "https://www.pci.uni-heidelberg.de/cms/oriol.html",
    "Oriol obtained his Ph.D. from the UAB, Barcelona. He spent five years as a postdoctoral researcher at Heidelberg, both as a Humboldt and as a Marie-Curie fellow. After six years as a group leader at DESY, Hamburg, and two years as an assoc. Prof. of physics at Aarhus University, he holds the Chair of Theoretical Chemistry at the PCI since 2018.",
    "",
  ],
  [
    "Prof. Rebecca Wade",
    "Molecular and Cellular\nModeling Group",
    "https://www.h-its.org/research/mcm/",
    "Rebecca Wade obtained her doctorate from Oxford University. Following postdocs at the universities of Houston and Illinois, she was a group leader at EMBL in Heidelberg until she moved to Heidelberg Institute for Theoretical Studies (HITS) in 2001. She has been Professor for Computational Structural Biology at Heidelberg University since 2012.",
    "",
  ],
  [
    "Prof. Anna Wienhard",
    "Differential Geometry",
    "https://www.mathi.uni-heidelberg.de/~geodyn/",
    "Anna received her PhD from the University of Bonn and held positions at IAS, Chicago and Princeton before becoming Chair for Differential Geometry at Heidelberg. Anna holds an ERC Advanced Grant, is an AMS Fellow, and member of the Heidelberg Academy of Science and the BBAW. She is co-speaker of the Heidelberg Cluster of Excellence “STRUCTURES”. ",
    "",
  ],
  [
    "Jun. Prof. Jakob Zech",
    "Machine Learning",
    "https://jakobzech.com/",
    "Jakob Zech is Juniorprofessor at the IWR Heidelberg since April 2020. He received a BSc in mathematics from the University of Technology in Vienna in 2012, and a MSc and PhD in mathematics from ETH Zürich in 2014 and 2018 respectively. Before joining the IWR, he was a Postdoctoral Fellow at MIT in the Aerospace Computational Design Laboratory.",
    "",
  ],
  [
    "Prof. Alexander Zipf",
    "GIScience Research Group",
    "https://www.geog.uni-heidelberg.de/gis/index_en.html",
    "Alexander Zipf is chair of GIScience since 2010. He is founding member of the Heidelberg Center for the Environment (HCE) and since 2019 managing director of the Heidelberg Institute for Geoinformation Technology (HeiGIT gGmbH). Before he was professor at Bonn University and in Mainz. He received his PhD from Heidelberg University. ",
    "",
  ],
];
const group_colour = "#ffffff";
const show_groups = false;

function shortenName(full_name, newline) {
  const words = full_name.split(" ");
  const short_name = [words[0]];
  for (const word of words.slice(1, -1)) {
    if (word.slice(-1) === ".") {
      // title: keep full word
      short_name.push(word);
    } else {
      // name: keep only first initial & add .
      short_name.push(word[0] + ".");
    }
  }
  // optionally add a newline before surname
  if (newline === true) {
    short_name.push("\n");
  }
  // surname: keep full word
  short_name.push(words.slice(-1));
  return short_name.join(" ");
}

// methods
const method_names = [
  "Mathematical and Numerical Analysis",
  "Numerical Algorithms and Software",
  "Data Analysis and Graphics",
  "Machine Learning and Computer Vision",
  "Arithmetic, Geometry and Topology",
];
const method_anim_ms = 1000;
const method_color = "#e13535";
const method_weights = [
  [1.0, 0.0, 1.0, 0.0, 1.0], //"Prof. Peter Albers",
  [0.0, 0.0, 1.0, 1.0, 0.0], //"Prof. Artur Andrzejak",
  [0.0, 1.0, 0.0, 0.0, 0.0], //"Prof. Peter Bastian",
  [0.0, 1.0, 0.0, 0.0, 0.0], //"Prof. Hans Georg Bock",
  [0.0, 0.0, 0.0, 0.0, 1.0], //"Prof. Gebhard Böckle",
  [0.0, 1.0, 1.0, 0.0, 0.0], //"Prof. André Butz",
  [0.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Peter Comba",
  [0.0, 1.0, 0.0, 0.0, 0.0], //"Prof. Andreas Dreuw",
  [0.0, 1.0, 0.0, 0.0, 0.0], //"Dr. Stefan Fischer",
  [0.0, 0.0, 1.0, 1.0, 0.0], //"Prof. Anette Frank",
  [0.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Frauke Gräter",
  [0.0, 0.0, 1.0, 0.0, 0.0], //"Dr. Frederik Graw",
  [0.0, 0.0, 0.0, 0.0, 0.0], //"Dr. Ganna Gryn'ova",
  [1.0, 1.0, 0.0, 0.0, 0.0], //"Prof. Eva Gutheil",
  [1.0, 1.0, 0.0, 0.0, 0.0], //"Prof. Roland Herzog",
  [0.0, 0.0, 1.0, 0.0, 0.0], //"Prof. Jürgen Hesser",
  [0.0, 1.0, 1.0, 0.0, 0.0], //"Prof. Vincent Heuveline",
  [1.0, 1.0, 0.0, 0.0, 0.0], //"PD Dr. Ahmad Hujeirat",
  [0.0, 0.0, 1.0, 0.0, 0.0], //"Prof. Bernhard Höfle",
  [1.0, 0.0, 1.0, 0.0, 0.0], //"Prof. Jan Johannes",
  [0.0, 0.0, 1.0, 1.0, 0.0], //"Prof. Bernd Jähne",
  [1.0, 1.0, 0.0, 0.0, 0.0], //"Prof. Guido Kanschat",
  [1.0, 1.0, 0.0, 0.0, 0.0], //"Prof. Ralf Klessen",
  [1.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Hans Knüpfer",
  [0.0, 1.0, 0.0, 0.0, 0.0], //"Prof. Ekaterina Kostina",
  [0.0, 1.0, 0.0, 0.0, 0.0], //"Prof. Kurt Kremer",
  [0.0, 0.0, 1.0, 0.0, 1.0], //"Dr. Susanne Krömker",
  [0.0, 1.0, 0.0, 0.0, 0.0], //"Prof. Ursula Kummer",
  [1.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Anna Marciniak-Czochra",
  [0.0, 0.0, 0.0, 1.0, 0.0], //"Prof. Björn Ommer",
  [0.0, 1.0, 0.0, 0.0, 0.0], //"Prof. Barbara Paech",
  [0.0, 0.0, 0.0, 0.0, 1.0], //"Jun Prof. Maria Beatrice Pozzetti",
  [1.0, 1.0, 0.0, 0.0, 0.0], //"Prof. Rolf Rannacher",
  [0.0, 0.0, 0.0, 1.0, 0.0], //"Prof. Stefan Riezler",
  [0.0, 0.0, 0.0, 1.0, 0.0], //"Prof. Joacim Rocklöv",
  [0.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Kurt Roth",
  [0.0, 0.0, 0.0, 1.0, 0.0], //"Prof. Carsten Rother",
  [0.0, 0.5, 1.0, 0.0, 1.0], //"Prof. Filip Sadlo",
  [1.0, 1.0, 0.0, 0.0, 0.0], //"Prof. Robert Scheichl",
  [1.0, 0.0, 0.0, 1.0, 0.0], //"Prof. Christoph Schnörr",
  [1.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Ulrich Schwarz",
  [0.0, 1.0, 0.0, 0.0, 0.0], //"Prof. Oriol Vendrell",
  [0.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Rebecca Wade",
  [0.0, 0.0, 0.0, 0.0, 1.0], //"Prof. Anna Wienhard",
  [1.0, 0.0, 0.0, 1.0, 0.0], //"Jun Prof. Jakob Zech",
  [0.0, 0.0, 1.0, 0.0, 0.0], //"Prof. Alexander Zipf",
];

// applications
const application_names = [
  "Molecular Material Science",
  "Medicine and Bioscience",
  "Humanities",
  "Astrophysics",
  "Environmental Sciences",
  "Engineering",
];
const application_color = "#499bce";
const application_weights = [
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Peter Albers",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Artur Andrzejak",
  [0.0, 0.0, 0.0, 0.0, 1.0, 0.0], //"Prof. Peter Bastian",
  [0.0, 1.0, 0.0, 0.0, 0.0, 1.0], //"Prof. Hans Georg Bock",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Gebhard Böckle",
  [0.0, 0.0, 0.0, 0.0, 1.0, 0.0], //"Prof. André Butz",
  [1.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Peter Comba",
  [1.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Andreas Dreuw",
  [1.0, 1.0, 0.0, 0.0, 0.0, 0.0], //"Dr. Stefan Fischer",
  [0.0, 0.0, 1.0, 0.0, 0.0, 0.0], //"Prof. Anette Frank",
  [1.0, 1.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Frauke Gräter",
  [0.0, 1.0, 0.0, 0.0, 0.0, 0.0], //"Dr. Frederik Graw",
  [1.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Dr. Ganna Gryn'ova",
  [0.0, 0.0, 0.0, 0.0, 1.0, 0.0], //"Prof. Eva Gutheil",
  [0.0, 0.0, 0.0, 0.0, 0.0, 1.0], //"Prof. Roland Herzog",
  [0.0, 1.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Jürgen Hesser",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Vincent Heuveline",
  [0.0, 0.0, 0.0, 1.0, 0.0, 0.0], //"PD Dr. Ahmad Hujeirat",
  [0.0, 0.0, 0.0, 0.0, 1.0, 0.0], //"Prof. Bernhard Höfle",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Jan Johannes",
  [0.0, 0.0, 0.0, 0.0, 1.0, 0.0], //"Prof. Bernd Jähne",
  [0.0, 0.0, 0.0, 1.0, 0.0, 0.0], //"Prof. Guido Kanschat",
  [0.0, 0.0, 0.0, 1.0, 0.0, 0.0], //"Prof. Ralf Klessen",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Hans Knüpfer",
  [0.0, 1.0, 0.0, 0.0, 0.0, 1.0], //"Prof. Ekaterina Kostina",
  [1.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Kurt Kremer",
  [0.0, 0.0, 1.0, 0.0, 0.0, 0.0], //"Dr. Susanne Krömker",
  [0.0, 1.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Ursula Kummer",
  [0.0, 1.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Anna Marciniak-Czochra",
  [0.0, 1.0, 1.0, 0.0, 0.0, 0.0], //"Prof. Björn Ommer",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Barbara Paech",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Jun Prof. Maria Beatrice Pozzetti",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Rolf Rannacher",
  [0.0, 0.0, 1.0, 0.0, 0.0, 0.0], //"Prof. Stefan Riezler",
  [0.0, 1.0, 0.0, 0.0, 1.0, 0.0], //"Prof. Joacim Rocklöv",
  [0.0, 0.0, 0.0, 0.0, 1.0, 0.0], //"Prof. Kurt Roth",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Carsten Rother",
  [0.25, 0.5, 0.0, 0.5, 0.25, 0.5], //"Prof. Filip Sadlo",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Robert Scheichl",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Christoph Schnörr",
  [0.0, 1.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Ulrich Schwarz",
  [1.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Oriol Vendrell",
  [0.0, 1.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Rebecca Wade",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Prof. Anna Wienhard",
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //"Jun Prof. Jakob Zech",
  [0.0, 0.0, 0.0, 0.0, 1.0, 0.0], //"Prof. Alexander Zipf",
];

// https://stackoverflow.com/a/36164530/6465472
function transpose(m) {
  return m[0].map((x, i) => m.map((x) => x[i]));
}

const method_groups = transpose(method_weights);
const application_groups = transpose(application_weights);

// get indices of sorted array of arrays, sorted by given sub-array index
function sorted_indices(array, index) {
  const len = array.length;
  const indices = new Array(len);
  for (let i = 0; i < len; ++i) {
    indices[i] = i;
  }
  indices.sort(function (a, b) {
    return array[a][index] < array[b][index]
      ? -1
      : array[a][index] > array[b][index]
      ? 1
      : 0;
  });
  return indices;
}

const sorted_group_indices = sorted_indices(group_names, 1);
let sort_by_group = false;

// svg circle arc math based on https://stackoverflow.com/a/18473154/6465472
function xy(radius, deg) {
  let rad = ((deg - 90) * Math.PI) / 180.0;
  return {
    x: 200 + radius * Math.cos(rad),
    y: 200 + radius * Math.sin(rad),
  };
}

// svg path for text inside a segment (single arc)
function makeTextArc(radius, startAngle, endAngle) {
  const anticlockwise = startAngle > 70 && endAngle < 290;
  if (!anticlockwise) {
    radius = radius - 1;
  }
  const p0 = xy(radius, startAngle);
  const p1 = xy(radius, endAngle);
  if (anticlockwise) {
    return ["M", p1.x, p1.y, "A", radius, radius, 0, 0, 0, p0.x, p0.y].join(
      " "
    );
  }
  return ["M", p0.x, p0.y, "A", radius, radius, 0, 0, 1, p1.x, p1.y].join(" ");
}

function makeArrowArc(radius, startAngle, endAngle) {
  const p0 = xy(radius, startAngle);
  const p1 = xy(radius, endAngle);
  const clockwise = endAngle < startAngle ? 0 : 1;
  return [
    "M",
    p0.x,
    p0.y,
    "A",
    radius,
    radius,
    0,
    0,
    clockwise,
    p1.x,
    p1.y,
  ].join(" ");
}

// svg path for a segment (two arcs connected by straight lines)
function makeSegment(radius, startAngle, endAngle, width) {
  const rm = radius - width;
  const rp = radius + width;
  const p0 = xy(rm, startAngle);
  const p1 = xy(rm, endAngle);
  const p2 = xy(rp, endAngle);
  const p3 = xy(rp, startAngle);
  return [
    "M",
    p0.x,
    p0.y,
    "A",
    rm,
    rm,
    0,
    0,
    1,
    p1.x,
    p1.y,
    "L",
    p2.x,
    p2.y,
    "A",
    rp,
    rp,
    0,
    0,
    0,
    p3.x,
    p3.y,
    "z",
  ].join(" ");
}

/*global SVG*/

let updateSegments = function () {
  SVG.find(".iwr-vis-group-card").css({ opacity: 0, visibility: "hidden" });
  SVG.find(".iwr-vis-group-item").show();
  const segments = SVG.find(".iwr-vis-segment-item");
  for (let segment of segments) {
    if (segment.hasClass("selected")) {
      segment.css({ opacity: 1, filter: "grayscale(0)" });
      segment.findOne(".iwr-vis-segment-item-text").fill("#ffffff");
      segment.findOne(".iwr-vis-segment-item-arc").attr("stroke-width", 0.5);
    } else if (segment.hasClass("hovered")) {
      segment.css({ opacity: 1, filter: "grayscale(0)" });
      segment.findOne(".iwr-vis-segment-item-arc").attr("stroke-width", 0);
      segment.findOne(".iwr-vis-segment-item-text").fill("#000000");
    } else {
      segment.css({
        filter: "grayscale(80%)",
        opacity: "20%",
      });
      segment.findOne(".iwr-vis-segment-item-arc").attr("stroke-width", 0);
      segment.findOne(".iwr-vis-segment-item-text").fill("#000000");
    }
  }
};

function nextGroupBoxIndex(p, ncols, nrows = 0) {
  let x_max = ncols - 1;
  let x_min = 0;
  if (ncols === 4) {
    // first 2, last 3 have 2 columns
    if (p.y <= 1 || p.y >= nrows - 4) {
      x_max = 2;
      x_min = 1;
    }
    if (p.y === 1) {
      x_min = 0;
    }
    if (p.y === nrows - 4) {
      x_max = ncols - 1;
    }
  }
  if (p.x < x_max) {
    return { x: p.x + 1, y: p.y };
  }
  return { x: x_min, y: p.y + 1 };
}

function updateGroups(groups, show_all = false, zoom = 1, cx = 200, cy = 200) {
  updateSegments();
  const items = SVG.find(".iwr-vis-group-item");
  if (groups != null) {
    console.assert(items.length === groups.length, items, groups);
  }
  let groupBoxIndex = { x: 0, y: 0 };
  let nGroups = 0;
  if (groups == null || show_all === true) {
    nGroups = items.length;
  } else {
    for (let k = 0; k < items.length; k++) {
      if (groups[k] != 0) {
        ++nGroups;
      }
    }
  }
  if (show_groups === true) {
    items.findOne(".iwr-vis-group-item-groupname").show();
    items.findOne(".iwr-vis-group-item-profname-small").show();
    items.findOne(".iwr-vis-group-item-profname-large").hide();
  }
  let ncols = 2;
  let scaleFactor = 0.43 * zoom;
  if (nGroups > 12) {
    ncols = 3;
  }
  let nrows = Math.floor((nGroups + (ncols - 1)) / ncols);
  if (nGroups > 21) {
    ncols = 4;
    groupBoxIndex.x = 1;
    nrows = Math.floor((nGroups + 10 + (ncols - 1)) / ncols);
    scaleFactor = (4.3 / nrows) * zoom;
    if (show_groups === true) {
      items.findOne(".iwr-vis-group-item-groupname").hide();
      items.findOne(".iwr-vis-group-item-profname-small").hide();
      items.findOne(".iwr-vis-group-item-profname-large").show();
    }
  }
  const width = 200 * scaleFactor;
  const height = 60 * scaleFactor;
  const x0 = cx - (width * ncols) / 2;
  const y0 = cy - (height * nrows) / 2;
  for (let i0 = 0; i0 < items.length; i0++) {
    let i = i0;
    if (sort_by_group) {
      i = sorted_group_indices[i0];
    }
    if (groups != null && show_all === false && groups[i] === 0) {
      items[i].css({ opacity: 0, visibility: "hidden" });
    } else {
      let opac = 1;
      if (groups != null) {
        opac = groups[i] + 0.2;
      }
      const padding = 0.8;
      items[i].animate(method_anim_ms, 0, "now").transform({
        scaleX: (width - padding) / items[i].width(),
        scaleY: (height - padding) / items[i].height(),
        positionX: x0 + width * (groupBoxIndex.x + 0.5),
        positionY: y0 + height * (groupBoxIndex.y + 0.5),
      });
      items[i].css({ opacity: opac, visibility: "visible" });
      groupBoxIndex = nextGroupBoxIndex(groupBoxIndex, ncols, nrows);
    }
  }
}

const resetAll = function () {
  SVG.find(".iwr-vis-segment-item").addClass("hovered").removeClass("selected");
  updateGroups();
};

const selectSegment = function () {
  const segments = SVG.find(".iwr-vis-segment-item");
  const nSelected = segments.hasClass("selected").filter(Boolean).length;
  if (this.hasClass("selected") && nSelected === 1) {
    resetAll();
  } else {
    segments.removeClass("hovered");
    segments.removeClass("selected");
    this.addClass("selected");
    updateGroups(this.data("groups"));
  }
};

const hoverSegment = function () {
  const segments = SVG.find(".iwr-vis-segment-item");
  const nSelected = segments.hasClass("selected").filter(Boolean).length;
  if (nSelected != 1) {
    segments.removeClass("selected").removeClass("hovered");
    this.addClass("hovered");
    updateGroups(this.data("groups"), true);
  }
  if (!this.hasClass("selected")) {
    this.findOne(".iwr-vis-segment-item-text").fill("#ffffff");
    this.findOne(".iwr-vis-segment-item-arc").attr({ "stroke-width": 0.5 });
  }
};

const leaveSegment = function () {
  if (!this.hasClass("selected")) {
    this.findOne(".iwr-vis-segment-item-text").fill("#000000");
    this.findOne(".iwr-vis-segment-item-arc").attr({ "stroke-width": 0 });
  }
  const segments = SVG.find(".iwr-vis-segment-item");
  const nSelected = segments.hasClass("selected").filter(Boolean).length;
  if (nSelected === 1) {
    return;
  }
  segments.addClass("hovered");
  updateGroups();
};

function applyWeightedHighlights(items, weights) {
  console.assert(items.length === weights.length, items, weights);
  items.css({ filter: "grayscale(80%)", opacity: "20%" });
  for (let i = 0; i < weights.length; i++) {
    if (weights[i] > 0) {
      items[i].css({ filter: "grayscale(0)" });
      items[i].css({ opacity: weights[i] });
    }
  }
}

const highlightSegments = function () {
  applyWeightedHighlights(
    SVG.find(".iwr-vis-method-item"),
    this.data("method_weights")
  );
  applyWeightedHighlights(
    SVG.find(".iwr-vis-application-item"),
    this.data("application_weights")
  );
};

function addSegments(
  svg,
  label,
  names,
  groups,
  color,
  radius,
  width,
  segmentClass
) {
  const delta = 360 / (names.length + 1);
  for (let i = 0; i < names.length; i++) {
    let group = svg
      .group()
      .addClass("iwr-vis-segment-item")
      .addClass(segmentClass)
      .addClass("highlighted");
    group.click(selectSegment);
    group.on("mouseenter", hoverSegment);
    group.on("mouseleave", leaveSegment);
    group.data("text", names[i]);
    group.data("groups", groups[i]);
    group.css({
      "transition-property": "opacity",
      "transition-duration": "0.6s",
    });
    group
      .path(makeSegment(radius, (i + 0.5) * delta, (i + 1.5) * delta, width))
      .addClass("iwr-vis-segment-item-arc")
      .fill(color)
      .stroke("#ffffff")
      .attr("stroke-width", 0)
      .css({ filter: "drop-shadow(0px 0px 1px)" });
    let strPath = group
      .path(makeTextArc(radius, (i + 0.5) * delta, (i + 1.5) * delta))
      .fill("none")
      .stroke("none");
    strPath
      .text(names[i])
      .addClass("iwr-vis-segment-item-text")
      .attr("startOffset", "50%")
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .attr("font-size", "0.55em");
  }
  // label
  let groupLabel = svg.group();
  groupLabel
    .path(makeSegment(radius, -delta / 2.05, delta / 2.05, width))
    .fill("#ffffff");
  let labelPath = groupLabel
    .path(makeTextArc(radius, -delta / 2, delta / 2))
    .fill("none")
    .stroke("none");
  labelPath
    .text(label)
    .attr("startOffset", "50%")
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "middle")
    .attr("font-size", "0.66em")
    .attr("fill", color)
    .attr("font-weight", "bold");
  let arrow = groupLabel.marker(4, 4, function (add) {
    add.polyline([0, 0, 4, 2, 0, 4]).fill(color).stroke("none");
  });
  const txtAngle = 4 + label.length / 2;
  const arrowPadding = 3;
  groupLabel
    .path(
      makeArrowArc(radius, arrowPadding + txtAngle, delta / 2 - arrowPadding)
    )
    .fill("none")
    .stroke(color)
    .attr({ "stroke-width": 2 })
    .marker("end", arrow);
  groupLabel
    .path(
      makeArrowArc(radius, -arrowPadding - txtAngle, -delta / 2 + arrowPadding)
    )
    .fill("none")
    .stroke(color)
    .attr({ "stroke-width": 2 })
    .marker("end", arrow);
}

function countLines(str) {
  return (str.match(/\n/g) || "").length + 1;
}

function addGroups(svg, names, method_weights, application_weights, colour) {
  const boxHeight = 60;
  const boxWidth = 200;
  const padding = 2;
  for (let i = 0; i < names.length; i++) {
    let groupContainer = svg.group();
    let group = groupContainer.group().addClass("iwr-vis-group-item");
    group.on("mouseenter", highlightSegments);
    group.on("mouseclick", highlightSegments);
    group.on("mouseleave", function () {
      if (!this.hasClass("frozenSegments")) {
        updateSegments();
      }
      return;
    });
    group.data("text", names[i][1]);
    group.data("method_weights", method_weights[i]);
    group.data("application_weights", application_weights[i]);
    group.css({
      transition: "opacity 0.6s, visibility 0.6s",
      filter: "drop-shadow(0px 0px 1px)",
    });
    group.click(function () {
      this.addClass("frozenSegments");
      SVG.find(".iwr-vis-group-item").hide();
      this.parent()
        .findOne(".iwr-vis-group-card")
        .front()
        .css({ opacity: 1, visibility: "visible" });
    });
    let link = group.group();
    // box
    link
      .rect(boxWidth, boxHeight)
      .fill(colour)
      .stroke("none")
      .addClass("iwr-vis-group-item-box");
    if (show_groups === true) {
      // group name
      const numLines = countLines(names[i][1]);
      let txtTop = 2 * padding;
      let txtBottom = 2 * padding;
      if (numLines === 1) {
        txtTop = 15;
        txtBottom = 15;
      } else if (numLines === 2) {
        txtTop = 10;
        txtBottom = 10;
      }
      let groupNamePath = link
        .path(["M", 0, txtTop, "L", boxWidth, txtTop].join(" "))
        .fill("none")
        .stroke("none");
      groupNamePath
        .text(names[i][1])
        .addClass("iwr-vis-group-item-groupname")
        .leading(1.1)
        .attr("startOffset", "50%")
        .attr("dominant-baseline", "hanging")
        .attr("text-anchor", "middle")
        .fill("#0000ff")
        .attr("font-weight", "bold")
        .attr("font-size", "0.75em")
        .hide();
      // small professor name
      let profNameSmallPath = link
        .path(
          [
            "M",
            0,
            boxHeight - txtBottom,
            "L",
            boxWidth,
            boxHeight - txtBottom,
          ].join(" ")
        )
        .fill("none")
        .stroke("none");
      profNameSmallPath
        .text(shortenName(names[i][0], false))
        .addClass("iwr-vis-group-item-profname-small")
        .attr("startOffset", "50%")
        .attr("dominant-baseline", "auto")
        .attr("text-anchor", "middle")
        .attr("font-weight", "bold")
        .attr("font-size", "0.75em")
        .hide();
    }
    // large professor name
    let profNameLargePath = link
      .path(
        ["M", 0, boxHeight / 2 - 6, "L", boxWidth, boxHeight / 2 - 6].join(" ")
      )
      .fill("none")
      .stroke("none");
    profNameLargePath
      .text(shortenName(names[i][0], true))
      .addClass("iwr-vis-group-item-profname-large")
      .attr("startOffset", "50%")
      .attr("dominant-baseline", "auto")
      .attr("text-anchor", "middle")
      .attr("font-size", "1.25em");
    group.size(65, 20);
    group.move(200 - 65 / 2, 200 - 20 / 2);
    addGroupCard(groupContainer, names[i], colour);
  }
}

function addGroupCard(svg, name, colour) {
  let group_card = svg.group().addClass("iwr-vis-group-card");
  group_card.circle(316).cx(200).cy(200).fill("#ffffff").stroke("none");
  group_card
    .rect(210, 210)
    .cx(200)
    .cy(200)
    .fill(colour)
    .stroke("none")
    .css({ filter: "drop-shadow(0px 0px 1px)" });
  group_card.click(function () {
    this.parent().findOne(".iwr-vis-group-item").removeClass("frozenSegments");
    this.css({ opacity: 0, visibility: "hidden" });
    SVG.find(".iwr-vis-group-item").show();
  });
  let groupNamePath = group_card
    .path(["M", 100, 105, "L", 300, 105].join(" "))
    .fill("none")
    .stroke("none");
  groupNamePath
    .text(name[1])
    .leading(1.1)
    .attr("startOffset", "50%")
    .attr("dominant-baseline", "hanging")
    .attr("text-anchor", "middle")
    .fill("#0000ff")
    .attr("font-weight", "bold")
    .attr("font-size", "0.75em")
    .linkTo(name[2]);
  group_card.css({ opacity: 0, visibility: "hidden" });
  if (name[1] === "Visual Computing") {
    group_card
      .image("https://vcg.iwr.uni-heidelberg.de/static/images/sadlo.jpg")
      .size(80, 80)
      .move(160, 120);
  }
  let profNamePath = group_card
    .path(["M", 100, 220, "L", 300, 220].join(" "))
    .fill("none")
    .stroke("none");
  profNamePath
    .text(name[0])
    .attr("startOffset", "50%")
    .attr("dominant-baseline", "auto")
    .attr("text-anchor", "middle")
    .attr("font-weight", "bold")
    .attr("font-size", "0.75em");
  let blurb = group_card.foreignObject(180, 120).attr({ x: 110, y: 230 });
  blurb.add(
    SVG(
      '<div xmlns="http://www.w3.org/1999/xhtml" class="iwr-vis-group-card-html"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis mollis mi ut ultricies. Nullam magna ipsum, porta vel dui convallis, rutrum imperdiet eros. Aliquam erat volutpat.</div>',
      true
    )
  );
}

const zoomGroups = function (e) {
  // only zoom in/out if all groups are displayed
  const segments = SVG.find(".iwr-vis-segment-item");
  const nHovered = segments.hasClass("hovered").filter(Boolean).length;
  if (nHovered != segments.length) {
    return;
  }
  const p = this.point(e.clientX, e.clientY);
  const z = 2;
  if (e.deltaY < 0) {
    updateGroups(
      null,
      true,
      z,
      200 + (1 - z) * (p.x - 200),
      200 + (1 - z) * (p.y - 200)
    );
  } else {
    updateGroups(null, true, 1, 200, 200);
  }
};

const sortGroupsByProf = function () {
  const group = SVG.find(".iwr-vis-settings-menu-sort-by-group");
  const prof = SVG.find(".iwr-vis-settings-menu-sort-by-prof");
  if (this.findOne(".iwr-vis-settings-menu-sort-by-prof") != null) {
    prof.fill("#777777");
    group.fill("#ffffff");
    sort_by_group = false;
  } else {
    group.fill("#777777");
    prof.fill("#ffffff");
    sort_by_group = true;
  }
  resetAll();
};

function addSettings(svg) {
  const line_colour = "#777777";
  const bg_colour = "#ffffff";
  const width = 100;
  const height = 60;
  const padding = 4;
  const radius = 2;
  let settings = svg.group().addClass("iwr-vis-settings-menu");
  settings.on("mouseenter", function () {
    this.findOne(".iwr-vis-settings-menu-large").show();
  });
  settings.on("mouseleave", function () {
    this.findOne(".iwr-vis-settings-menu-large").hide();
  });
  // button
  let settings_button = settings
    .group()
    .addClass("iwr-vis-settings-menu-button");
  settings_button
    .rect(16, 16)
    .radius(radius)
    .stroke(line_colour)
    .fill(bg_colour);
  settings_button.line(4, 12, 12, 12);
  settings_button.line(4, 8, 12, 8);
  settings_button.line(4, 4, 12, 4);
  settings_button.stroke(line_colour).fill("none");
  settings_button.move(400 - 16 - padding, padding);
  // menu
  let settings_menu = settings.group().addClass("iwr-vis-settings-menu-large");
  settings_menu
    .rect(width, height)
    .radius(radius)
    .stroke(line_colour)
    .fill(bg_colour);
  settings_menu.hide();
  // group sorting options
  settings_menu
    .path(["M", 6, 6, "L", 100, 6].join(" "))
    .fill("none")
    .stroke("none")
    .text("Sort by")
    .attr("dominant-baseline", "hanging")
    .attr("font-size", "0.5em")
    .fill(line_colour);
  let sort_by_group = settings_menu.group();
  sort_by_group
    .rect(8, 8)
    .radius(1)
    .stroke(line_colour)
    .fill(bg_colour)
    .move(12, 24)
    .addClass("iwr-vis-settings-menu-sort-by-group");
  sort_by_group
    .path(["M", 24, 24, "L", 100, 24].join(" "))
    .fill("none")
    .stroke("none")
    .text("group name")
    .attr("font-size", "0.5em")
    .attr("dominant-baseline", "hanging")
    .fill(line_colour);
  sort_by_group.click(sortGroupsByProf);
  let sort_by_prof = settings_menu.group();
  sort_by_prof
    .rect(8, 8)
    .radius(1)
    .stroke(line_colour)
    .fill(line_colour)
    .move(12, 24 + 12)
    .addClass("iwr-vis-settings-menu-sort-by-prof");
  sort_by_prof
    .path(["M", 24, 24 + 12, "L", 100, 24 + 12].join(" "))
    .fill("none")
    .stroke("none")
    .text("professor name")
    .attr("font-size", "0.5em")
    .attr("dominant-baseline", "hanging")
    .fill(line_colour);
  sort_by_prof.click(sortGroupsByProf);
  settings_menu.transform({
    translateX: 400 - width - padding,
    translateY: padding,
  });
}

window.onload = function () {
  let svg = SVG("#iwr-vis-menu-svg");
  // background
  let bg_group = svg.group().addClass("iwr-vis-bg");
  bg_group.click(resetAll);
  bg_group.rect(400, 400).cx(200).cy(200).fill("#ffffff").stroke("#ffffff");

  let inner_circle = svg
    .circle(316)
    .cx(200)
    .cy(200)
    .fill("none")
    .stroke("none");
  svg.on("wheel", zoomGroups);

  // groups
  let groups = svg.group();
  groups.clipWith(inner_circle);
  addGroups(
    groups,
    group_names,
    method_weights,
    application_weights,
    group_colour
  );
  // methods
  addSegments(
    svg,
    "METHODS",
    method_names,
    method_groups,
    method_color,
    168,
    10,
    "iwr-vis-method-item"
  );
  // applications
  addSegments(
    svg,
    "APPLICATIONS",
    application_names,
    application_groups,
    application_color,
    188,
    10,
    "iwr-vis-application-item"
  );
  resetAll();
  // settings menu
  addSettings(svg);
};
