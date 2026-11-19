window.HYPATIA_MODULE = {
  id: "prepaws",
  storagePrefix: "prepaws.",
  timedMock: true,
  simulacroMinutes: 130,
  simulacroTimeLabel: "130 min",
  examTotal: 65,
  targetScore: 47,
  subjects: [
    "Design Secure Architectures",
    "Design Resilient Architectures",
    "Design High-Performing Architectures",
    "Design Cost-Optimized Architectures",
    "Design Operationally Excellent Architectures",
    "general"
  ],
  distribution: {
    "Design Secure Architectures": 19,
    "Design Resilient Architectures": 17,
    "Design High-Performing Architectures": 16,
    "Design Cost-Optimized Architectures": 13
  },
  labels: {
    general: "General"
  },
  temaTypes: {
    "aws-architect": { type: "Arquitectura", class: "type-analisis" },
    s3: { type: "Almacenamiento", class: "type-aplicacion" },
    ec2: { type: "Computo", class: "type-aplicacion" },
    rds: { type: "Bases de datos", class: "type-aplicacion" },
    iam: { type: "Seguridad e identidad", class: "type-analisis" },
    lambda: { type: "Computo sin servidores", class: "type-aplicacion" },
    config: { type: "Gobernanza", class: "type-concepto" },
    dynamodb: { type: "Bases de datos NoSQL", class: "type-aplicacion" },
    sqs: { type: "Mensajeria", class: "type-concepto" },
    cloudfront: { type: "Distribucion de contenido", class: "type-aplicacion" },
    ebs: { type: "Almacenamiento en bloques", class: "type-aplicacion" },
    "auto-scaling": { type: "Escalabilidad", class: "type-analisis" },
    aurora: { type: "Bases de datos administradas", class: "type-aplicacion" },
    cloudtrail: { type: "Auditoria y registros", class: "type-concepto" },
    "route-53": { type: "DNS y enrutamiento", class: "type-analisis" },
    kms: { type: "Cifrado", class: "type-analisis" },
    cloudwatch: { type: "Monitoreo", class: "type-concepto" },
    "direct-connect": { type: "Redes", class: "type-analisis" },
    waf: { type: "Seguridad", class: "type-analisis" },
    "nat-gateway": { type: "Redes", class: "type-aplicacion" },
    eks: { type: "Contenedores", class: "type-aplicacion" },
    sns: { type: "Mensajeria", class: "type-concepto" },
    ecs: { type: "Contenedores", class: "type-aplicacion" },
    organizations: { type: "Gestion de cuentas", class: "type-concepto" },
    redshift: { type: "Almacenes de datos", class: "type-aplicacion" },
    "vpc-endpoint": { type: "Redes", class: "type-analisis" },
    kinesis: { type: "Procesamiento de flujos", class: "type-aplicacion" },
    athena: { type: "Analisis de datos", class: "type-aplicacion" },
    "api-gateway": { type: "API", class: "type-aplicacion" }
  },
  objectives: {
    "aws-architect": "Disena arquitecturas de varias capas que puedan crecer y recuperarse de fallos en AWS.",
    s3: "Elige clases de almacenamiento y configura el ciclo de vida, los permisos, el versionado y la replicacion en S3.",
    ec2: "Selecciona tipos de instancia, grupos de ubicacion, opciones de compra e imagenes AMI en EC2.",
    rds: "Elige el motor de RDS y compara Multi-AZ, replicas de lectura, copias de seguridad y restauracion.",
    iam: "Aplica el minimo privilegio con roles, politicas, federacion de identidades y credenciales temporales de STS.",
    lambda: "Elige el tipo de invocacion, la concurrencia y el origen de eventos para una funcion Lambda.",
    config: "Usa reglas de AWS Config para evaluar el cumplimiento y rastrear cambios en los recursos.",
    dynamodb: "Elige claves, indices GSI o LSI, flujos de cambios y modos de capacidad en DynamoDB.",
    sqs: "Compara las colas estandar y FIFO. Configura el tiempo de invisibilidad y las colas de mensajes fallidos.",
    cloudfront: "Configura distribuciones de CloudFront con origenes, politicas de cache y direcciones URL firmadas.",
    ebs: "Compara los volumenes gp3, io2, st1 y sc1. Elige como usar instantaneas y cifrado.",
    "auto-scaling": "Configura el escalado de grupos de EC2 con periodos de espera, acciones de ciclo de vida y seguimiento de una metrica objetivo.",
    aurora: "Distingue los usos de Aurora Global Database, Aurora Serverless y los puntos de enlace del cluster.",
    cloudtrail: "Configura registros multirregion de CloudTrail, su entrega a S3 y la validacion de su integridad.",
    "route-53": "Elige una politica de enrutamiento de Route 53 por latencia, conmutacion por error, peso o geolocalizacion.",
    kms: "Compara tipos de clave y usa cifrado por envoltura, politicas de claves y rotacion en KMS.",
    cloudwatch: "Usa metricas, alarmas y paneles en CloudWatch. Consulta registros con Logs Insights y procesa eventos con EventBridge.",
    "direct-connect": "Selecciona conexiones e interfaces virtuales de Direct Connect para una red hibrida.",
    waf: "Configura reglas, limites de solicitudes y grupos de reglas administradas de AWS WAF para un ALB o CloudFront.",
    "nat-gateway": "Compara NAT Gateway e instancias NAT para dar salida a internet a subredes privadas con alta disponibilidad entre zonas.",
    eks: "Compara los grupos de nodos y los perfiles de Fargate para ejecutar contenedores en EKS.",
    sns: "Usa temas de SNS, filtros de suscripcion y atributos de mensaje para distribuir un evento a varios destinos.",
    ecs: "Compara EC2 y Fargate para ejecutar tareas de ECS y ajusta la capacidad de los servicios.",
    organizations: "Organiza cuentas en unidades organizativas y aplica politicas de control de servicios y facturacion consolidada.",
    redshift: "Elige tipos de cluster, estilos de distribucion y claves de ordenacion. Identifica cuando usar Redshift Spectrum.",
    "vpc-endpoint": "Compara puntos de enlace de interfaz y de puerta de enlace e identifica cuando usar PrivateLink.",
    kinesis: "Dimensiona las particiones de Kinesis Data Streams y compara consumidores y entrega de datos con Firehose.",
    athena: "Optimiza consultas en Athena con particiones y metadatos del catalogo de Glue.",
    "api-gateway": "Elige entre API REST, HTTP y WebSocket y configura limites de solicitudes y cache."
  },
  idPrefixes: {
    "Design Secure Architectures": "sec",
    "Design Resilient Architectures": "res",
    "Design High-Performing Architectures": "hp",
    "Design Cost-Optimized Architectures": "co",
    "Design Operationally Excellent Architectures": "ops",
    general: "gen"
  }
};

// El banco importado incluye la respuesta al final de algunas opciones.
for (const question of window.QUESTIONS || []) {
  question.opciones = question.opciones.map(option => option.split("<details>", 1)[0].trimEnd());
}
