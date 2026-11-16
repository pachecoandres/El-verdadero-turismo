export type RegionFilter = 'Todos' | 'Cartagena' | 'Santa Marta' | 'La Guajira';

export interface Destination {
  id: string;
  name: string;
  location: string;
  region: Exclude<RegionFilter, 'Todos'>;
  ecosystem: string;
  shortDescription: string;
  environmentalImportance: string;
  image: string;
  imageAlt: string;
  modalDetails: {
    overview: string;
    pressures: string[];
    visitorCare: string[];
  };
}

export interface Experience {
  id: string;
  title: string;
  location: string;
  category: string;
  summary: string;
  documentedContribution: string;
  image: string;
  imageAlt: string;
  keyFacts: string[];
}

export interface TravelTip {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName:
    | 'trash'
    | 'users'
    | 'compass'
    | 'shell'
    | 'calendar'
    | 'mapPin'
    | 'heartHandshake';
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ReferenceItem {
  id: string;
  category: string;
  source: string;
  detail: string;
}

export const HERO_IMAGE = '/src/assets/images/hero_caribe_colombiano_1794867622424.jpg';

export const IMPACT_PROBLEMS = [
  {
    number: '01',
    title: 'Sobrecarga de visitantes en espacios naturales',
    description:
      'Cuando un destino recibe más personas de las que su territorio puede soportar al mismo tiempo, se compactan los senderos, aumenta la presión sobre servicios básicos y se altera la tranquilidad de la fauna silvestre.',
  },
  {
    number: '02',
    title: 'Contaminación y deterioro de manglares y arrecifes',
    description:
      'Los residuos sólidos, plásticos de un solo uso, combustibles de embarcaciones y el contacto directo o anclaje sobre fondos marinos debilitan ecosistemas costeros esenciales para el Caribe.',
  },
  {
    number: '03',
    title: 'Afectación de fuentes de agua, suelos y biodiversidad',
    description:
      'El consumo excesivo de agua dulce en temporadas altas, los vertimientos sin manejo adecuado y la extracción de flora o fauna alteran el equilibrio hídrico y ponen en riesgo especies nativas.',
  },
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'la-boquilla',
    name: 'La Boquilla',
    location: 'Cartagena, Bolívar',
    region: 'Cartagena',
    ecosystem: 'Bosque de manglar y laguna costera',
    shortDescription:
      'Corregimiento costero al norte de Cartagena donde pescadores y organizaciones comunitarias ofrecen recorridos en canoa entre túneles naturales de mangle.',
    environmentalImportance:
      'Sus manglares actúan como barrera natural contra la erosión costera, filtran sedimentos y sirven de criadero para peces, crustáceos y aves migratorias.',
    image: '/src/assets/images/dest_la_boquilla_1794867624130.jpg',
    imageAlt: 'Canoa artesanal de madera navegando entre los manglares verdes de La Boquilla en Cartagena',
    modalDetails: {
      overview:
        'La Boquilla conecta la tradición pesquera afrocaribeña con el ecoturismo de base comunitaria. Los recorridos silenciosos a remo permiten observar el ecosistema sin alterar los canales de agua ni el hábitat de las aves.',
      pressures: [
        'Acumulación de residuos plásticos arrastrados hacia las raíces del mangle.',
        'Presión por expansión urbana en el borde costero y lagunar.',
      ],
      visitorCare: [
        'Contratar recorridos directamente con asociaciones comunitarias locales.',
        'Preferir embarcaciones impulsadas a remo frente a motores ruidosos en zonas estrechas.',
        'No arrojar basura ni restos de comida al agua durante el trayecto.',
      ],
    },
  },
  {
    id: 'cienaga-virgen',
    name: 'Ciénaga de la Virgen',
    location: 'Cartagena, Bolívar',
    region: 'Cartagena',
    ecosystem: 'Humedal estuarino y manglar rojo',
    shortDescription:
      'Extensa laguna costera que bordea el norte de Cartagena y sostiene una red vital de canales, manglares y avifauna caribeña.',
    environmentalImportance:
      'Regula inundaciones urbanas, captura carbono en sus suelos húmedos y mantiene el intercambio de agua dulce y salada que da vida a la pesca artesanal.',
    image: '/src/assets/images/dest_cienaga_virgen_1794867623770.jpg',
    imageAlt: 'Humedal de la Ciénaga de la Virgen en Cartagena con raíces de manglar y garzas al amanecer',
    modalDetails: {
      overview:
        'La Ciénaga de la Virgen es uno de los cuerpos de agua más importantes de Cartagena. Su equilibrio depende tanto del cuidado de los visitantes como de la reducción de vertimientos y desechos urbanos.',
      pressures: [
        'Contaminación por residuos sólidos y aguas residuales en sectores cercanos a la ciudad.',
        'Pérdida de cobertura de manglar por rellenos y ocupación irregular.',
      ],
      visitorCare: [
        'Apoyar iniciativas locales dedicadas a la restauración y monitoreo del manglar.',
        'Evitar el uso de plásticos desechables al visitar los embarcadero y senderos.',
        'Mantener silencio y distancia respetuosa al observar garzas y aves costeras.',
      ],
    },
  },
  {
    id: 'corales-rosario',
    name: 'Corales del Rosario',
    location: 'Cartagena, Bolívar',
    region: 'Cartagena',
    ecosystem: 'Arrecifes de coral y praderas marinas',
    shortDescription:
      'Archipiélago marino protegido de aguas cristalinas frente a Cartagena, hogar de una de las formaciones coralinas más valiosas del Caribe colombiano.',
    environmentalImportance:
      'Los arrecifes protegen la línea de costa del oleaje fuerte y albergan una alta diversidad de peces, moluscos e invertebrados marinos.',
    image: '/src/assets/images/dest_corales_rosario_1794867623597.jpg',
    imageAlt: 'Vista aérea de las aguas turquesas y formaciones de coral en las Islas del Rosario cerca de Cartagena',
    modalDetails: {
      overview:
        'El Parque Nacional Natural Corales del Rosario y de San Bernardo protege ecosistemas submarinos extremadamente sensibles a los cambios de temperatura, sedimentación y contacto humano.',
      pressures: [
        'Tráfico intenso de lanchas, ruido submarino y anclaje sobre zonas coralinas.',
        'Daño físico por pisoteo de corales, extracción de estrellas de mar o uso de bloqueadores químicos.',
      ],
      visitorCare: [
        'Nunca tocar, pisar ni extraer corales, conchas o especies marinas.',
        'Elegir operadores autorizados que respeten las boyas de amarre y zonas de reserva.',
        'Usar protectores solares biodegradables o ropa con filtro UV para entrar al mar.',
      ],
    },
  },
  {
    id: 'parque-tayrona',
    name: 'Parque Tayrona',
    location: 'Santa Marta, Magdalena',
    region: 'Santa Marta',
    ecosystem: 'Bosque seco, bosque húmedo tropical y bahías coralinas',
    shortDescription:
      'Área protegida donde las estribaciones de la Sierra Nevada descienden hasta bahías de arena dorada y formaciones rocosas frente al mar Caribe.',
    environmentalImportance:
      'Conserva ecosistemas terrestres y marinos interconectados, cuencas hidrográficas vitales y sitios sagrados para los pueblos indígenas de la Sierra Nevada.',
    image: '/src/assets/images/dest_parque_tayrona_1794867624959.jpg',
    imageAlt: 'Bahía de aguas turquesas con grandes rocas de granito y palmas en el Parque Tayrona en Santa Marta',
    modalDetails: {
      overview:
        'Con 637.000 visitantes registrados en 2023 según Parques Nacionales Naturales de Colombia, el Tayrona enfrenta el reto constante de equilibrar el disfrute turístico con la capacidad de recuperación de su naturaleza y su significado cultural.',
      pressures: [
        'Alta concentración de visitantes en playas icónicas durante temporadas festivas.',
        'Demanda sobre fuentes hídricas locales, senderos y manejo de residuos.',
      ],
      visitorCare: [
        'Consultar y respetar los cierres temporales de la estrategia Respira Tayrona.',
        'Regresar con toda la basura generada y caminar únicamente por senderos autorizados.',
        'Respetar los límites diarios de ingreso y los espacios sagrados indígenas.',
      ],
    },
  },
  {
    id: 'guachaca',
    name: 'Guachaca',
    location: 'Santa Marta, Magdalena',
    region: 'Santa Marta',
    ecosystem: 'Bosque húmedo de piedemonte y cuenca fluvial',
    shortDescription:
      'Territorio rural entre el mar y la Sierra Nevada de Santa Marta, reconocido por sus ríos cristalinos, biodiversidad de aves y proyectos juveniles locales.',
    environmentalImportance:
      'Sus bosques de ribera regulan los caudales que bajan de la Sierra y sirven de corredor biológico para decenas de especies de aves residentes y migratorias.',
    image: '/src/assets/images/dest_guachaca_aves_1794867625842.jpg',
    imageAlt: 'Río de montaña rodeado de selva verde tropical y aves coloridas en Guachaca, Santa Marta',
    modalDetails: {
      overview:
        'En Guachaca, el turismo de naturaleza ofrece una alternativa frente a modelos masivos de sol y playa, destacando el avistamiento de aves y las caminatas ecológicas guiadas por habitantes del territorio.',
      pressures: [
        'Crecimiento turístico sin planificación en las riberas de ríos y quebradas.',
        'Riesgo de contaminación de aguas dulces por jabones, envases o residuos.',
      ],
      visitorCare: [
        'Realizar caminatas y observación de aves con guías comunitarios como los jóvenes de Avicomsi.',
        'Evitar el uso de parlantes o drones que perturben la fauna silvestre.',
        'No aplicar cremas o repelentes antes de sumergirse en ríos naturales.',
      ],
    },
  },
  {
    id: 'palomino',
    name: 'Palomino',
    location: 'Dibulla, La Guajira',
    region: 'La Guajira',
    ecosystem: 'Desembocadura fluvial, playa costera y piedemonte',
    shortDescription:
      'Corregimiento costero donde el río Palomino desemboca en el mar Caribe, con vista hacia los picos de la Sierra Nevada en días despejados.',
    environmentalImportance:
      'La confluencia de agua dulce y marina sostiene dinámicas costeras frágiles y conecta el territorio caribeño con el sistema hídrico de la Sierra Nevada.',
    image: '/src/assets/images/dest_palomino_guajira_1794867625942.jpg',
    imageAlt: 'Playa de Palomino en La Guajira donde el río se encuentra con el mar Caribe y la Sierra Nevada al fondo',
    modalDetails: {
      overview:
        'Palomino ha experimentado un rápido auge turístico entre viajeros jóvenes nacionales e internacionales, lo que ha motivado alianzas locales como Feeling Palomino para promover prácticas presentadas como sostenibles.',
      pressures: [
        'Aumento acelerado de visitantes y demanda de agua potable y energía.',
        'Erosión costera y manejo de residuos en temporadas de alta afluencia.',
      ],
      visitorCare: [
        'Consumir de forma responsable el agua y preferir alojamientos comprometidos con el entorno.',
        'Apoyar emprendimientos locales y respetar los acuerdos de convivencia de la comunidad.',
        'Llevar termo reutilizable y evitar dejar envases en la playa o ribera del río.',
      ],
    },
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'avicomsi',
    title: 'AVICOMSI',
    location: 'Guachaca, Santa Marta',
    category: 'Aviturismo comunitario',
    summary:
      'Iniciativa de aviturismo comunitario, observación de aves y caminatas ecológicas liderada por 17 jóvenes de la comunidad de Guachaca.',
    documentedContribution:
      'Aporte documentado: Integra a jóvenes locales en la guianza interpretativa y la educación ambiental, convirtiendo el conocimiento del territorio y de sus aves en una alternativa económica local de bajo impacto.',
    image: '/src/assets/images/dest_guachaca_aves_1794867625842.jpg',
    imageAlt: 'Sendero de observación de aves en el bosque tropical de Guachaca',
    keyFacts: [
      'Liderada por 17 jóvenes de la comunidad local.',
      'Enfocada en observación de aves y caminatas ecológicas.',
      'Promueve grupos pequeños y respeto por los hábitos de la fauna.',
    ],
  },
  {
    id: 'la-boquilla-experiencias',
    title: 'LA BOQUILLA',
    location: 'Cartagena, Bolívar',
    category: 'Ecoturismo en manglares',
    summary:
      'Recorridos en canoa por los manglares de la Ciénaga de la Virgen, liderados por organizaciones comunitarias que también participan en actividades de restauración.',
    documentedContribution:
      'Aporte documentado: Vincula directamente el ingreso turístico con la organización comunitaria de pescadores y ecoguías, quienes combinan la interpretación ambiental con acciones de recuperación del manglar.',
    image: '/src/assets/images/dest_la_boquilla_1794867624130.jpg',
    imageAlt: 'Recorrido comunitario en canoa por los manglares de La Boquilla',
    keyFacts: [
      'Operación dirigida por organizaciones comunitarias locales.',
      'Navegación tradicional en canoa de bajo impacto acústico.',
      'Articulación con jornadas comunitarias de restauración de mangle.',
    ],
  },
  {
    id: 'respira-tayrona',
    title: 'RESPIRA TAYRONA',
    location: 'Parque Tayrona, Santa Marta',
    category: 'Gestión ambiental y cultural',
    summary:
      'Cierres temporales del Parque Nacional Natural Tayrona acordados con los cuatro pueblos indígenas de la Sierra Nevada para el descanso de los ecosistemas y la protección del sistema hídrico.',
    documentedContribution:
      'Aporte documentado: Permite pausas programadas frente a la presión turística (que alcanzó 637.000 visitantes en 2023), favoreciendo la recuperación natural de playas, fauna y fuentes hídricas junto al reconocimiento espiritual del territorio.',
    image: '/src/assets/images/dest_parque_tayrona_1794867624959.jpg',
    imageAlt: 'Bahía natural del Parque Tayrona en descanso ambiental',
    keyFacts: [
      'Acordada entre Parques Nacionales y pueblos indígenas de la Sierra.',
      'Establece periodos de cierre temporal para el descanso ecosistémico.',
      'Protege el sistema hídrico, la biodiversidad y las prácticas culturales.',
    ],
  },
  {
    id: 'feeling-palomino',
    title: 'FEELING PALOMINO',
    location: 'Palomino, La Guajira',
    category: 'Articulación empresarial local',
    summary:
      'Alianza de empresas locales en Palomino que desarrollan y articulan una oferta turística presentada bajo un enfoque sostenible.',
    documentedContribution:
      'Aporte documentado: Muestra el esfuerzo de actores locales por coordinar estándares y narrativas de turismo responsable en un destino de rápido crecimiento en La Guajira, manteniendo una mirada crítica sobre los retos reales de implementación.',
    image: '/src/assets/images/dest_palomino_guajira_1794867625942.jpg',
    imageAlt: 'Costa de Palomino en La Guajira donde opera la alianza local',
    keyFacts: [
      'Red colaborativa entre prestadores de servicios turísticos locales.',
      'Oferta turística presentada como sostenible en el Caribe guajiro.',
      'Invita a los viajeros a informarse sobre prácticas concretas de cuidado.',
    ],
  },
];

export const TRAVEL_TIPS: TravelTip[] = [
  {
    id: 'residuos',
    number: '01',
    title: 'No dejar residuos en playas, ríos o senderos',
    description:
      'Todo lo que entra en tu morral debe regresar contigo. Lleva bolsa reutilizable para tus empaques y evita plásticos de un solo uso.',
    iconName: 'trash',
  },
  {
    id: 'limites',
    number: '02',
    title: 'Respetar los límites de visitantes',
    description:
      'La capacidad de carga protege el ecosistema. Reserva con anticipación y evita ingresar a zonas saturadas o por accesos no autorizados.',
    iconName: 'users',
  },
  {
    id: 'operadores',
    number: '03',
    title: 'Elegir operadores turísticos locales y responsables',
    description:
      'Prioriza asociaciones comunitarias, posadas familiares y agencias formales que reinvierten en el territorio y cumplen normas ambientales.',
    iconName: 'compass',
  },
  {
    id: 'no-extraer',
    number: '04',
    title: 'No extraer animales, plantas, corales ni otros elementos',
    description:
      'Conchas, estrellas de mar, semillas o fragmentos de coral cumplen funciones ecológicas esenciales en su entorno. Obsérvalos sin llevártelos.',
    iconName: 'shell',
  },
  {
    id: 'cierres',
    number: '05',
    title: 'Respetar los cierres temporales de áreas protegidas',
    description:
      'Antes de armar plan desde Barranquilla, verifica el calendario oficial de Parques Nacionales y respeta las fechas de descanso como Respira Tayrona.',
    iconName: 'calendar',
  },
  {
    id: 'guias',
    number: '06',
    title: 'Seguir las indicaciones de los guías',
    description:
      'Los guías locales conocen las corrientes marinas, senderos seguros y zonas sensibles de anidación o paso de fauna.',
    iconName: 'mapPin',
  },
  {
    id: 'culturas',
    number: '07',
    title: 'Respetar las comunidades y culturas locales',
    description:
      'Pide permiso antes de tomar fotografías, valora el trabajo artesanal sin regatear de forma injusta y cuida los espacios sagrados.',
    iconName: 'heartHandshake',
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: '¿Qué caracteriza al turismo sostenible según el PNUMA y la OMT?',
    options: [
      'Aumentar al máximo la llegada de turistas extranjeros durante todo el año.',
      'Tener en cuenta las repercusiones actuales y futuras, económicas, sociales y medioambientales para visitantes, entorno y comunidades anfitrionas.',
      'Reemplazar por completo los viajes por recorridos virtuales para no pisar áreas naturales.',
      'Construir grandes complejos hoteleros cerrados sin contacto con las poblaciones locales.',
    ],
    correctIndex: 1,
    explanation:
      'Según el PNUMA y la OMT, el turismo sostenible equilibra las dimensiones ambiental, económica y sociocultural pensando tanto en el presente como en las generaciones futuras.',
  },
  {
    id: 2,
    question: '¿Qué es Respira Tayrona?',
    options: [
      'Un festival anual de música electrónica en las playas de Santa Marta.',
      'Una marca comercial de hoteles todo incluido dentro del parque.',
      'Cierres temporales del Parque Tayrona acordados con los pueblos indígenas para el descanso de los ecosistemas y la protección del sistema hídrico.',
      'Una ruta marítima rápida en lancha que conecta Barranquilla con el Cabo San Juan.',
    ],
    correctIndex: 2,
    explanation:
      'Respira Tayrona es una estrategia de cierres temporales concertada con los pueblos indígenas de la Sierra Nevada para permitir el descanso ecológico, espiritual e hídrico del parque.',
  },
  {
    id: 3,
    question: '¿Por qué un área protegida establece un límite de visitantes?',
    options: [
      'Para evitar que el flujo de personas supere la capacidad de recuperación del ecosistema y deteriore suelos, agua y fauna.',
      'Para que únicamente puedan ingresar turistas con vehículos particulares.',
      'Porque las áreas protegidas solo abren en temporada de lluvias.',
      'Para incrementar artificialmente los precios de las entradas.',
    ],
    correctIndex: 0,
    explanation:
      'La capacidad de carga fija un tope máximo de visitantes simultáneos para prevenir la sobrecarga, la erosión de senderos, la acumulación de basura y la perturbación de la biodiversidad.',
  },
  {
    id: 4,
    question: '¿Por qué informar sobre un problema ambiental no siempre cambia el comportamiento?',
    options: [
      'Porque a los jóvenes no les interesa disfrutar de la naturaleza ni viajar.',
      'Porque el cambio de hábitos también depende de normas sociales, contexto, infraestructura disponible y decisiones prácticas al momento de viajar.',
      'Porque las playas del Caribe colombiano se limpian solas con la marea nocturna.',
      'Porque solo las leyes internacionales pueden modificar las decisiones cotidianas.',
    ],
    correctIndex: 1,
    explanation:
      'La investigación ambiental muestra que conocer un problema es solo el primer paso: factores como la comodidad, el entorno social, la oferta de operadores responsables y hábitos conscientes determinan cómo actuamos.',
  },
  {
    id: 5,
    question: '¿Qué caracteriza a la iniciativa Avicomsi?',
    options: [
      'Es una empresa dedicada al alquiler de motos acuáticas en Cartagena.',
      'Es una iniciativa de aviturismo comunitario, observación de aves y caminatas ecológicas liderada por 17 jóvenes de Guachaca.',
      'Es una red de restaurantes nocturnos frente al mar en Palomino.',
      'Es un programa estatal para construir muelles industriales en la Sierra Nevada.',
    ],
    correctIndex: 1,
    explanation:
      'Avicomsi nació en Guachaca (Santa Marta) impulsada por 17 jóvenes de la comunidad que promueven la observación de aves y el senderismo ecológico como turismo de conservación.',
  },
  {
    id: 6,
    question: '¿Cuál es la relación entre la comunidad de La Boquilla y los manglares?',
    options: [
      'La comunidad evita acercarse a los manglares porque no tienen ningún uso local.',
      'Organizaciones comunitarias realizan recorridos en canoa por los manglares y participan activamente en actividades de restauración del ecosistema.',
      'Talan los manglares cada verano para ampliar parqueaderos turísticos.',
      'Utilizan únicamente botes de alta velocidad para cruzar la Ciénaga de la Virgen.',
    ],
    correctIndex: 1,
    explanation:
      'En La Boquilla, organizaciones comunitarias de pescadores y ecoguías protegen el manglar mediante recorridos en canoa a remo y labores directas de restauración ecológica.',
  },
];

export const REFERENCES: ReferenceItem[] = [
  {
    id: 'pnuma-omt',
    category: 'Marco internacional',
    source: 'PNUMA y Organización Mundial del Turismo (OMT)',
    detail:
      'Por un turismo más sostenible: Guía para responsables políticos (definición oficial y principios del turismo sostenible).',
  },
  {
    id: 'pnnc',
    category: 'Autoridad ambiental',
    source: 'Parques Nacionales Naturales de Colombia',
    detail:
      'Registros de visitantes en áreas protegidas del Caribe colombiano (637.000 visitantes en el Parque Nacional Natural Tayrona durante 2023), capacidad de carga y acuerdos de cierres temporales Respira Tayrona.',
  },
  {
    id: 'el-espectador',
    category: 'Prensa nacional',
    source: 'El Espectador',
    detail:
      'Reportajes y cobertura sobre presión turística en el Parque Tayrona, balances anuales de visitación y jornadas de descanso ambiental concertadas con pueblos indígenas de la Sierra Nevada.',
  },
  {
    id: 'el-universal',
    category: 'Prensa regional',
    source: 'El Universal (Cartagena)',
    detail:
      'Seguimiento periodístico al ecoturismo comunitario en La Boquilla, la situación ambiental de la Ciénaga de la Virgen y la conservación de los Corales del Rosario.',
  },
  {
    id: 'literatura-academica',
    category: 'Investigación académica y territorial',
    source: 'Estudios sobre comportamiento proambiental e iniciativas locales',
    detail:
      'Literatura sobre la brecha entre información ambiental y cambio de comportamiento en viajeros, junto con documentación de las iniciativas Avicomsi (Guachaca), La Boquilla (Cartagena), Respira Tayrona (Santa Marta) y Feeling Palomino (La Guajira).',
  },
];
