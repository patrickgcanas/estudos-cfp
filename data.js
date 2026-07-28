// Gerado por build_pwa.py | Atualizado: 19/05/2026

const D = {
  1: {
    titulo: "Sistema Financeiro Nacional",
    exp: `<div class="content-body">
<h2>O que é o Sistema Financeiro Nacional?</h2>
<p>O Sistema Financeiro Nacional (SFN) é o conjunto de instituições, instrumentos e mercados financeiros que possibilitam o fluxo de recursos entre <strong>poupadores</strong> (agentes superavitários) e <strong>tomadores</strong> (agentes deficitários) na economia brasileira.</p>
<h2>Estrutura: 3 Níveis Hierárquicos</h2>
<table class="data-table">
<thead><tr><th>Nível</th><th>Função</th><th>Entidades</th></tr></thead>
<tbody>
<tr><td><strong>Órgãos Normativos</strong></td><td>Definem regras e diretrizes gerais — não executam operações</td><td>CMN, CNSP, CNPC</td></tr>
<tr><td><strong>Entidades Supervisoras</strong></td><td>Fiscalizam, regulam e autorizam funcionamento</td><td>BACEN, CVM, SUSEP, PREVIC</td></tr>
<tr><td><strong>Operadores</strong></td><td>Realizam as operações financeiras propriamente ditas</td><td>Bancos, corretoras, seguradoras, fundos de pensão</td></tr>
</tbody>
</table>
<h2>Órgãos Normativos</h2>
<h3>CMN — Conselho Monetário Nacional</h3>
<p>É o <strong>órgão máximo normativo</strong> do SFN. <em>Não executa operações — apenas define diretrizes.</em> Composição:</p>
<ul>
<li><strong>Ministro da Fazenda</strong> (presidente do CMN)</li>
<li>Ministro do Planejamento e Orçamento</li>
<li>Presidente do Banco Central do Brasil</li>
</ul>
<h3>CNSP — Conselho Nacional de Seguros Privados</h3>
<p>Órgão normativo para <strong>seguros, resseguros, previdência privada aberta</strong> (PGBL/VGBL) e capitalização.</p>
<h3>CNPC — Conselho Nacional de Previdência Complementar</h3>
<p>Órgão normativo que regula a <strong>previdência complementar fechada</strong> — os fundos de pensão (EFPC).</p>
<h2>Entidades Supervisoras</h2>
<h3>BACEN — Banco Central do Brasil</h3>
<p>Autarquia federal. <em>Executa</em> as políticas definidas pelo CMN. Principais funções:</p>
<ul>
<li>Emitir papel-moeda e regular a oferta de moeda</li>
<li>Regular e fiscalizar as <strong>instituições financeiras bancárias</strong></li>
<li>Administrar as reservas internacionais do Brasil</li>
<li>Operar o Sistema de Pagamentos Brasileiro (SPB)</li>
<li>Controlar o crédito e as taxas de juros (SELIC, compulsório)</li>
</ul>
<h3>CVM — Comissão de Valores Mobiliários</h3>
<p>Regula e fiscaliza o <strong>mercado de valores mobiliários</strong>: ações, fundos, debêntures, mercado de capitais (B3).</p>
<h3>SUSEP</h3>
<p>Controla seguros, resseguros, <strong>previdência privada aberta</strong> (PGBL e VGBL) e capitalização.</p>
<h3>PREVIC</h3>
<p>Fiscaliza as <strong>EFPC</strong> — fundos de pensão. <em>Não regula PGBL/VGBL</em> — esses são SUSEP.</p>
<h2>Tipos de Instituições Financeiras</h2>
<table class="data-table">
<thead><tr><th>Tipo</th><th>Característica-chave</th><th>Exemplos</th></tr></thead>
<tbody>
<tr><td><strong>Bancárias</strong></td><td>Captam depósitos à vista; criam moeda escritural</td><td>Banco comercial, banco múltiplo com carteira comercial, CEF</td></tr>
<tr><td><strong>Não Bancárias</strong></td><td>Não captam depósitos à vista; não criam moeda</td><td>Banco de investimento, financeiras, corretoras, distribuidoras</td></tr>
</tbody>
</table>
<h3>Banco Múltiplo</h3>
<p>É classificado como <em>bancário</em> somente se tiver <strong>carteira comercial</strong>. Sem ela, é não-bancário.</p>
<h2>Sistema de Pagamentos Brasileiro (SPB)</h2>
<ul>
<li><strong>SELIC</strong>: liquidação em tempo real de títulos públicos federais</li>
<li><strong>STR</strong>: transferências interbancárias de grande valor (tempo real, BACEN)</li>
<li><strong>PIX</strong>: transferências instantâneas 24h/7dias</li>
<li><strong>CETIP/B3</strong>: registro e liquidação de títulos privados</li>
</ul>
</div>`,
    mapa: {
      root: "Sistema Financeiro Nacional",
      branches: [
        { label: "Normativos", color: "#d4a843", icon: "⚖️", children: [
          { label: "CMN", detail: "Máximo · Ministro Fazenda preside" },
          { label: "CNSP", detail: "Seguros e prev. aberta" },
          { label: "CNPC", detail: "Previdência fechada (EFPC)" }
        ]},
        { label: "Supervisores", color: "#5b8fee", icon: "🔍", children: [
          { label: "BACEN", detail: "Bancos e política monetária" },
          { label: "CVM", detail: "Mercado de capitais" },
          { label: "SUSEP", detail: "Seguros · PGBL · VGBL" },
          { label: "PREVIC", detail: "Fundos de pensão (EFPC)" }
        ]},
        { label: "Instituições", color: "#4dbdaf", icon: "🏦", children: [
          { label: "Bancárias", detail: "Captam depósito à vista" },
          { label: "Não Bancárias", detail: "Sem depósito à vista" },
          { label: "Banco Múltiplo", detail: "Carteira comercial = bancário" },
          { label: "Banco de Investimento", detail: "Underwriting · M&A" }
        ]},
        { label: "SPB", color: "#2ecc71", icon: "💸", children: [
          { label: "SELIC", detail: "Títulos públicos · tempo real" },
          { label: "STR", detail: "Grandes transferências · BACEN" },
          { label: "PIX", detail: "Instantâneo 24h/7 dias" },
          { label: "CETIP/B3", detail: "Títulos privados" }
        ]}
      ]
    },
    tags: ["SFN", "CMN", "BACEN", "CVM", "SUSEP", "PREVIC", "regulação", "banco comercial", "banco de investimento", "SPB", "PIX", "SELIC", "previdência", "PGBL", "VGBL", "fundo de pensão", "depósito à vista"],
    fc: [
      { q: "Qual a composição do CMN e quem é seu presidente?", a: "3 membros: Ministro da Fazenda (presidente do CMN), Ministro do Planejamento e Orçamento, e Presidente do BACEN. É o órgão máximo normativo do SFN." },
      { q: "Qual a diferença entre órgão normativo e entidade supervisora?", a: "Normativos (CMN, CNSP, CNPC) apenas definem regras — não executam operações. Supervisoras (BACEN, CVM, SUSEP, PREVIC) fiscalizam e regulam o mercado no dia a dia." },
      { q: "O que regula a CVM versus o que regula o BACEN?", a: "CVM: mercado de valores mobiliários (ações, fundos, debêntures, mercado de capitais). BACEN: instituições financeiras bancárias, política monetária e câmbio." },
      { q: "PGBL e VGBL são regulados por qual entidade?", a: "SUSEP. Previdência ABERTA (PGBL/VGBL) = SUSEP. Previdência FECHADA (fundos de pensão/EFPC) = PREVIC." },
      { q: "O que torna uma instituição 'bancária' no SFN?", a: "A capacidade de captar depósitos à vista, criando moeda escritural. Exemplos: banco comercial, banco múltiplo com carteira comercial, Caixa Econômica Federal." },
      { q: "Qual a diferença entre banco comercial e banco de investimento?", a: "Banco comercial: capta depósitos à vista, crédito de curto prazo. Banco de investimento: sem depósito à vista, crédito médio/longo prazo, underwriting e M&A corporativo." },
      { q: "O que é o STR e para que serve?", a: "Sistema de Transferência de Reservas — liquida em tempo real transferências interbancárias de grande valor. Operado pelo BACEN, garante a finalidade das operações entre bancos no SPB." }
    ],
    q: [
      { t: "O Conselho Monetário Nacional (CMN) é presidido por:", o: ["A) Presidente do BACEN", "B) Ministro da Fazenda", "C) Presidente da República", "D) Presidente da CVM"], c: 1, f: "O Ministro da Fazenda preside o CMN. O BACEN integra o CMN como membro, mas não o preside. Erro clássico na prova." },
      { t: "Uma sociedade corretora de títulos e valores mobiliários (CTVM) é fiscalizada principalmente por:", o: ["A) BACEN", "B) SUSEP", "C) CVM", "D) PREVIC"], c: 2, f: "A CVM regula e fiscaliza o mercado de valores mobiliários, incluindo corretoras (CTVM) e distribuidoras (DTVM)." },
      { t: "Uma seguradora que oferece planos PGBL e VGBL é supervisionada pela:", o: ["A) PREVIC", "B) CVM", "C) CNPC", "D) SUSEP"], c: 3, f: "PGBL e VGBL são produtos de previdência privada ABERTA, regulados pela SUSEP. A PREVIC cuida apenas da previdência FECHADA (fundos de pensão/EFPC)." },
      { t: "Qual das seguintes instituições NÃO é classificada como instituição financeira bancária?", o: ["A) Banco Comercial", "B) Caixa Econômica Federal", "C) Banco Múltiplo com carteira comercial", "D) Banco de Investimento"], c: 3, f: "O Banco de Investimento NÃO pode captar depósitos à vista, portanto não é bancário. Os demais captam depósitos à vista e criam moeda escritural." },
      { t: "O CNPC — Conselho Nacional de Previdência Complementar — é o órgão normativo responsável por regular:", o: ["A) Seguros privados e resseguros no Brasil", "B) A previdência complementar fechada — fundos de pensão (EFPC)", "C) O mercado de valores mobiliários e ações", "D) A previdência privada aberta — PGBL e VGBL"], c: 1, f: "CNPC regula a previdência FECHADA (EFPC — fundos de pensão de empresas como Previ, Petros, Funcef). CNSP regula seguros e previdência ABERTA. CVM regula valores mobiliários. SUSEP fiscaliza PGBL/VGBL. Os nomes similares (CNPC/CNSP) são pegadinha clássica." },
      { t: "Qual operação está dentro das atribuições típicas de um Banco de Investimento?", o: ["A) Captar depósitos à vista de pessoas físicas e jurídicas", "B) Coordenar a emissão pública de debêntures de uma empresa (underwriting)", "C) Emitir cartões de crédito para clientes do varejo", "D) Administrar conta salário e conta corrente de funcionários"], c: 1, f: "Banco de investimento realiza underwriting (coordenação de emissão de valores mobiliários), M&A e crédito de médio/longo prazo corporativo. NÃO pode captar depósitos à vista — isso é exclusivo de bancos comerciais e múltiplos com carteira comercial." },
      { t: "O STR — Sistema de Transferência de Reservas — tem como característica principal:", o: ["A) Ser operado pela B3 para liquidar ações negociadas em bolsa", "B) Realizar pagamentos instantâneos de qualquer valor, 24 horas por dia", "C) Liquidar em tempo real transferências interbancárias de grande valor, operado pelo BACEN", "D) Registrar e liquidar títulos privados emitidos por bancos (CDB, LCI, LCA)"], c: 2, f: "O STR liquida em tempo real as transferências interbancárias de grande valor e é operado pelo BACEN. O PIX é para pagamentos cotidianos (qualquer valor, 24h). SELIC liquida títulos públicos. CETIP/B3 registra e liquida títulos privados." },
      { t: "A Previ (fundo de pensão dos funcionários do Banco do Brasil) é regulada por qual entidade supervisora?", o: ["A) SUSEP", "B) CVM", "C) BACEN", "D) PREVIC"], c: 3, f: "A Previ é uma EFPC (Entidade Fechada de Previdência Complementar) — previdência FECHADA. A PREVIC fiscaliza todas as EFPC. A SUSEP cuida da previdência ABERTA (PGBL/VGBL). Erro clássico na prova: PGBL/VGBL são produtos de bancos, mas são regulados pela SUSEP, não pelo BACEN." },
      { t: "Sobre o CMN, está correto afirmar que:", o: ["A) Executa operações no Open Market para controlar a liquidez da economia", "B) É composto por 9 membros, incluindo presidentes do BACEN e da CVM", "C) Não realiza operações financeiras — apenas define diretrizes e normas gerais do SFN", "D) Define a SELIC-Meta a cada 45 dias nas reuniões do COPOM"], c: 2, f: "O CMN é órgão NORMATIVO — define regras, NÃO executa operações (quem executa é o BACEN). Composição: apenas 3 membros (Ministro da Fazenda, Ministro do Planejamento, Presidente do BACEN). O COPOM é um órgão interno do BACEN, não do CMN." }
    ],
    al: [
      { t: "danger", tag: "Pegadinha: Presidente do CMN", txt: "O presidente do CMN é o <strong>Ministro da Fazenda</strong>, NÃO o presidente do BACEN. O BACEN integra o CMN como membro, mas não o preside. Erro clássico na prova!" },
      { t: "danger", tag: "SUSEP vs PREVIC — erro frequente", txt: "<strong>SUSEP</strong>: previdência aberta (PGBL/VGBL vendidos em bancos). <strong>PREVIC</strong>: previdência fechada (fundos de pensão de empresas). Confundir os dois é uma das armadilhas mais comuns da prova CFP." },
      { t: "danger", tag: "Banco Múltiplo — quando é bancário?", txt: "O banco múltiplo só é classificado como <strong>bancário</strong> se tiver carteira <strong>comercial</strong>. Ter apenas carteira de investimento não basta." },
      { t: "tip", tag: "Mnemônico: Supervisoras do SFN", txt: "Lembre-se de <strong>B.C.S.P</strong>: <strong>B</strong>ACEN (bancos), <strong>C</strong>VM (capitais), <strong>S</strong>USEP (seguros e prev. aberta), <strong>P</strong>REVIC (pensão fechada)." },
      { t: "warn", tag: "CMN não executa operações", txt: "O CMN é órgão <strong>normativo</strong> — define diretrizes. Quem <strong>executa</strong> é o BACEN. 'Quem executa a política monetária?' → BACEN, não CMN." },
      { t: "info", tag: "Hierarquia completa do SFN", txt: "<strong>CMN</strong> → BACEN / CVM → bancos e corretoras<br><strong>CNSP</strong> → SUSEP → seguradoras e planos abertos<br><strong>CNPC</strong> → PREVIC → fundos de pensão (EFPC)" }
    ],
    conexoes: `<div class="content-body">
<h3>Como o SFN se Conecta à Política Macroeconômica</h3>
<p>O <strong>BACEN</strong> (entidade supervisora do SFN) é quem <em>executa</em> os instrumentos de política monetária — Open Market, Compulsório e Redesconto. O <strong>CMN</strong> define a meta de inflação que o <strong>COPOM</strong> (órgão interno do BACEN) tenta atingir ajustando a SELIC. Entender o SFN é o pré-requisito para entender política monetária.</p>
<h3>SELIC tem três significados — não confunda</h3>
<table class="data-table">
<thead><tr><th>SELIC</th><th>O que é</th></tr></thead>
<tbody>
<tr><td><strong>SELIC (sistema)</strong></td><td>Parte do SPB — liquida títulos públicos federais em tempo real entre bancos</td></tr>
<tr><td><strong>SELIC-Over</strong></td><td>Taxa de juros apurada nesse sistema: média das operações diárias com TPF</td></tr>
<tr><td><strong>SELIC-Meta</strong></td><td>Meta definida pelo COPOM a cada 45 dias — pode ser diferente da SELIC-Over momentaneamente</td></tr>
</tbody>
</table>
<h3>Sinônimos e Equivalências</h3>
<table class="data-table">
<thead><tr><th>Termo técnico</th><th>Sinônimo / Como entender na prática</th></tr></thead>
<tbody>
<tr><td><strong>Depósito à vista</strong></td><td>Conta corrente — saque imediato, sem aviso prévio</td></tr>
<tr><td><strong>Moeda escritural</strong></td><td>Dinheiro "criado" por bancos ao emprestar: não é papel impresso pelo BACEN, é um lançamento contábil</td></tr>
<tr><td><strong>EFPC</strong></td><td>Fundo de pensão de empresa: Previ (BB), Petros (Petrobras), Funcef (CEF)</td></tr>
<tr><td><strong>Underwriting</strong></td><td>Banco de investimento coordena lançamento de ações (IPO) ou debêntures</td></tr>
<tr><td><strong>Valores mobiliários</strong></td><td>Ações, debêntures, cotas de fundos — tudo que a CVM regula; títulos públicos não são valores mobiliários (são do BACEN)</td></tr>
</tbody>
</table>
<h3>Exemplos do Dia a Dia</h3>
<ul>
<li><strong>Conta corrente no Itaú:</strong> banco múltiplo com carteira comercial → instituição <em>bancária</em> → regulado pelo <em>BACEN</em></li>
<li><strong>Compra de ações da Petrobras na B3:</strong> operação regulada pela <em>CVM</em></li>
<li><strong>PGBL ou VGBL no banco:</strong> previdência privada aberta → regulado pela <em>SUSEP</em></li>
<li><strong>Fundo de pensão da empresa (ex: Previ do BB):</strong> EFPC → previdência fechada → regulado pela <em>PREVIC</em></li>
<li><strong>TED acima de R$1.000:</strong> passa pelo <em>STR</em> (parte do SPB, operado pelo BACEN) → liquidado em tempo real</li>
</ul>
<h3>Analogia para Fixar</h3>
<p>O SFN funciona como um <strong>condomínio</strong>: o <em>CMN é a assembleia</em> (define as regras gerais, não executa nada). <em>BACEN, CVM, SUSEP e PREVIC são os síndicos especializados</em> de cada área (bancos, capitais, seguros, fundos de pensão). <em>Bancos, corretoras e seguradoras são os moradores</em> que devem seguir as regras.</p>
</div>`
  },

  2: {
    titulo: "Fundamentos de Economia",
    exp: `<div class="content-body">
<h2>Principais Indicadores Econômicos</h2>
<p>Os indicadores mais cobrados na prova CFP são: PIB, PNB, SELIC-Meta, SELIC-Over, Taxa DI, TR, TLP, PTAX e os índices de inflação (IPCA e IGP-M).</p>

<h2>PIB — Produto Interno Bruto</h2>
<p>Mede <strong>tudo que é produzido dentro de um país</strong> em dado período, independente da nacionalidade do produtor. Pode ser medido por três óticas que chegam ao mesmo resultado:</p>
<table class="data-table">
<thead><tr><th>Ótica</th><th>Fórmula</th><th>Destaque</th></tr></thead>
<tbody>
<tr><td><strong>Consumo (Dispêndio)</strong></td><td>PIB = C + I + G + X − M</td><td>Mais utilizada</td></tr>
<tr><td><strong>Produção (Oferta)</strong></td><td>PIB = Indústria + Agropecuária + Serviços</td><td>Processo reverso do consumo</td></tr>
<tr><td><strong>Renda</strong></td><td>PIB = Salários + Juros + Aluguéis + Dividendos</td><td>Menos utilizada</td></tr>
</tbody>
</table>
<p>O PIB pode ser <strong>Nominal</strong> (a preços correntes do ano) ou <strong>Real</strong> (descontando a inflação). O PIB considera apenas <em>valores finais</em> da cadeia produtiva — bens intermediários não entram para evitar dupla contagem.</p>
<p><strong>Valor Adicionado:</strong> contribuição individual de cada produtor ao PIB = valor cobrado − bens/serviços intermediários consumidos.</p>

<h2>PNB — Produto Nacional Bruto</h2>
<p>Difere do PIB por incluir o que brasileiros produzem no exterior e excluir o que estrangeiros produzem no Brasil.</p>
<p><strong>PNB = PIB − RLEE</strong> (Renda Líquida Enviada ao Exterior = envios − recebimentos)</p>
<ul>
<li>Mais remessas ao exterior → menor PNB</li>
<li>Mais recebimentos do exterior → maior PNB</li>
</ul>

<h2>Taxas de Juros</h2>

<h3>SELIC-Meta</h3>
<p>Taxa de juros definida pelo <strong>COPOM</strong>. É a <em>meta</em> que o governo deseja para a taxa de juros da economia. Praticada pelo Governo (dívida pública). Alterada a cada 45 dias (AGO) ou em reuniões extraordinárias (AGE).</p>

<h3>SELIC-Over</h3>
<p>Taxa <strong>efetivamente praticada</strong> — média diária das operações lastreadas em Títulos Públicos Federais (TPF) entre instituições financeiras. É a <em>Taxa Livre de Risco (TLR)</em> do Brasil. Tende a convergir para a SELIC-Meta. Base: 252 dias úteis.</p>

<h3>Taxa DI (CDI)</h3>
<p>Taxa média ponderada dos Depósitos Interbancários (CDI), prazo de 1 dia, lastreados em <strong>títulos privados</strong>. Muito usada como benchmark de rentabilidade (CDB, LCI, LCA, fundos). Fallback: se operações &lt; 100 ou volume &lt; R$ 30 bi → equipara-se à SELIC-Over.</p>

<h3>DI vs SELIC</h3>
<p>A diferença está no lastro: <strong>SELIC-Over</strong> → lastreada em títulos públicos. <strong>Taxa DI</strong> → lastreada em títulos privados (CDI). Na prática, ambas tendem a ser muito próximas.</p>

<h3>TR — Taxa Referencial</h3>
<p>Derivada da TBF (Taxa Básica Financeira, calculada com base nas LTNs), com fator multiplicativo de 0,93. Usada na correção de <strong>Poupança, SFH (habitação), FGTS e TDA</strong>. Fórmula: TR = [(1 + TBF) / R] − 1.</p>

<h3>TLP — Taxa de Longo Prazo</h3>
<p>Principal custo financeiro dos financiamentos do <strong>BNDES</strong>. Composição: <em>TLP = TLP-Pré (juros reais prefixados) × IPCA</em>. A TLP-Pré é divulgada pelo BACEN no início de cada mês.</p>

<h2>Taxa de Câmbio</h2>
<p>Preço de uma moeda estrangeira medido em reais. No Brasil, referência é o dólar americano.</p>
<table class="data-table">
<thead><tr><th>Tipo</th><th>Descrição</th></tr></thead>
<tbody>
<tr><td><strong>PTAX</strong></td><td>Taxa oficial do BACEN — média simples de 4 consultas diárias a dealers, excluindo as 2 maiores e 2 menores de cada ponta (compra e venda)</td></tr>
<tr><td><strong>Comercial</strong></td><td>Grandes movimentações empresariais: importação, exportação, transferências</td></tr>
<tr><td><strong>Turismo</strong></td><td>Pessoa física, inclui IOF, moeda física possui custo logístico</td></tr>
<tr><td><strong>Spot (Câmbio Pronto)</strong></td><td>À vista, liquidação em até D+2</td></tr>
<tr><td><strong>Forward (Câmbio Futuro)</strong></td><td>Preço fechado hoje, liquidação acima de D+2</td></tr>
</tbody>
</table>
<p><strong>Dólar caro (desvalorização do real):</strong> favorece o <em>exportador</em>, aumenta a Balança Comercial, aumenta o PIB.</p>
<p><strong>Dólar barato (valorização do real):</strong> favorece o <em>importador</em>, reduz a Balança Comercial, reduz o PIB.</p>

<h3>Cupom Cambial</h3>
<p>Taxa de juros em dólar que remunera investimentos em moeda estrangeira feitos no Brasil. Fórmula 1:</p>
<p><em>Cupom Cambial = [(1+TLR)^(DU/252) / (Dólar Futuro / Dólar Spot) − 1] × 360/dias corridos</em></p>
<p>Importante: TLR Brasil usa <strong>juros compostos e 252 dias úteis</strong>; Cupom Cambial usa <strong>juros simples e 360 dias corridos</strong>.</p>

<h2>Inflação</h2>
<p>Alta persistente e generalizada de preços → <strong>perda do poder de compra</strong>.</p>
<table class="data-table">
<thead><tr><th>Tipo</th><th>Causa</th></tr></thead>
<tbody>
<tr><td><strong>Inflação de Demanda</strong></td><td>Mais procura que oferta; cresce com o PIB e com emissão excessiva de moeda</td></tr>
<tr><td><strong>Inflação de Custos</strong></td><td>Aumento de custos de produção (autônoma: commodities/oligopólio; induzida: mercado de trabalho aquecido)</td></tr>
<tr><td><strong>Hiperinflação</strong></td><td>Acima de 50% ao ano; Brasil viveu nos anos 80-90</td></tr>
<tr><td><strong>Deflação</strong></td><td>Queda de preços → consumidor posterga compras → empresas demitem → recessão</td></tr>
<tr><td><strong>Estagflação</strong></td><td>PIB estagnado + preços subindo simultaneamente</td></tr>
</tbody>
</table>

<table class="data-table">
<thead><tr><th>Índice</th><th>Calculado por</th><th>Mede</th><th>Uso principal</th></tr></thead>
<tbody>
<tr><td><strong>IPCA</strong></td><td>IBGE</td><td>Varejo — famílias de 1 a 40 SM, áreas urbanas</td><td>Meta de inflação (CMN/COPOM), NTN-B, NTN-B Principal</td></tr>
<tr><td><strong>IGP-M</strong></td><td>FGV</td><td>60% IPA (atacado) + 30% IPC + 10% INCC</td><td>Correção de contratos de aluguel e dívidas empresariais</td></tr>
</tbody>
</table>
<p>O IGP-M sofre variações mais fortes quando há oscilação cambial, pois o câmbio impacta mais o atacado (IPA) do que o varejo (IPCA).</p>

<h3>COPOM — Comitê de Política Monetária</h3>
<p>Órgão do BACEN que define a SELIC-Meta. Composição: <strong>Presidente do BACEN + 8 diretores (9 membros)</strong>. Reúne-se a cada 45 dias (2 dias de reunião). Objetivo: manter o IPCA dentro da meta definida pelo CMN. Divulga trimestralmente o Relatório de Inflação.</p>

<h2>Políticas Macroeconômicas</h2>
<p>Ferramentas do governo para atingir o PIB desejado:</p>
<table class="data-table">
<thead><tr><th>Política</th><th>Efeito</th><th>Liquidez</th><th>Inflação</th><th>PIB</th></tr></thead>
<tbody>
<tr><td><strong>Expansionista</strong></td><td>Injeta dinheiro na economia</td><td>↑</td><td>↑</td><td>↑</td></tr>
<tr><td><strong>Contracionista</strong></td><td>Retira dinheiro da economia</td><td>↓</td><td>↓</td><td>↓</td></tr>
</tbody>
</table>

<h3>Política Monetária (BACEN)</h3>
<table class="data-table">
<thead><tr><th>Instrumento</th><th>Expansionista</th><th>Contracionista</th></tr></thead>
<tbody>
<tr><td><strong>Open Market</strong> (mais ágil)</td><td>COMPRAR títulos públicos</td><td>VENDER títulos públicos</td></tr>
<tr><td><strong>Compulsório</strong></td><td>REDUZIR percentual</td><td>AUMENTAR percentual</td></tr>
<tr><td><strong>Redesconto</strong></td><td>REDUZIR taxa cobrada dos bancos</td><td>AUMENTAR taxa cobrada dos bancos</td></tr>
</tbody>
</table>

<h3>Política Fiscal (Governo)</h3>
<ul>
<li><strong>Superávit/Déficit Primário:</strong> Receitas (impostos) − Despesas NÃO financeiras → mede a eficiência do governo atual</li>
<li><strong>Superávit/Déficit Nominal:</strong> Resultado Primário − Juros da dívida pública → mede o país como um todo (governos atual + anteriores)</li>
</ul>
<table class="data-table">
<thead><tr><th>Política</th><th>Ações</th></tr></thead>
<tbody>
<tr><td><strong>Expansionista</strong></td><td>Aumentar gastos públicos; reduzir tributos; aumentar transferências (Bolsa Família)</td></tr>
<tr><td><strong>Contracionista</strong></td><td>Reduzir gastos; elevar carga tributária; extinguir transferências</td></tr>
</tbody>
</table>

<h3>Política Cambial (BACEN)</h3>
<table class="data-table">
<thead><tr><th>Regime</th><th>Reservas Internacionais</th><th>Intervenção BACEN</th></tr></thead>
<tbody>
<tr><td><strong>Câmbio Fixo</strong></td><td>Varia (BACEN compra/vende para manter o câmbio fixo)</td><td>Sempre</td></tr>
<tr><td><strong>Câmbio Flutuante</strong></td><td>Não varia</td><td>Nunca</td></tr>
<tr><td><strong>Flutuação Suja (Administrado)</strong></td><td>Varia quando BACEN intervém</td><td>Quando julga necessário (Brasil atual)</td></tr>
</tbody>
</table>
<p><strong>Swap Cambial:</strong> BACEN "vende" dólares → trava alta do dólar (contracionista cambial)</p>
<p><strong>Swap Cambial Reverso:</strong> BACEN "compra" dólares → trava queda do dólar (expansionista cambial)</p>

<h3>Balanço de Pagamentos (BP)</h3>
<ul>
<li><strong>Conta Corrente:</strong> Balança Comercial + Balança de Serviços + Renda Primária (salários e dividendos) + Renda Secundária (transferências unilaterais)</li>
<li><strong>Conta de Capitais:</strong> transferências de capital, ativos intangíveis (patentes, direitos autorais, franquias)</li>
<li><strong>Conta Financeira:</strong> investimentos diretos, de carteira, derivativos, outros investimentos e reservas internacionais</li>
</ul>

<h2>Ciclos Econômicos</h2>
<p>Flutuações da atividade econômica no longo prazo, alternando crescimento e contração.</p>
<table class="data-table">
<thead><tr><th>Fase</th><th>PIB</th><th>Desemprego</th><th>Inflação</th><th>Característica</th></tr></thead>
<tbody>
<tr><td><strong>Declínio (Recessão)</strong></td><td>Negativo por 2+ trimestres consecutivos</td><td>↑</td><td>↓ (com lag)</td><td>Redução da produção e atividade empresarial</td></tr>
<tr><td><strong>Depressão (Fundo)</strong></td><td>Queda acentuada ≥ 10%</td><td>Muito alto</td><td>Baixa</td><td>Pedidos de recuperação judicial, baixo investimento, longa duração</td></tr>
<tr><td><strong>Recuperação (Expansão)</strong></td><td>↑ crescendo</td><td>↓</td><td>Baixa ainda</td><td>Produção aumenta, desemprego cai, inflação ainda baixa</td></tr>
<tr><td><strong>Boom (Pico)</strong></td><td>Máximo, plena capacidade</td><td>Mínimo</td><td>Tende a subir</td><td>Pleno emprego, todos os recursos engajados</td></tr>
</tbody>
</table>
</div>`,
    mapa: {
      root: "Fundamentos de Economia",
      branches: [
        { label: "Indicadores", color: "#d4a843", icon: "📊", children: [
          { label: "PIB", detail: "3 óticas: Consumo (C+I+G+X-M), Produção, Renda" },
          { label: "PNB", detail: "PIB − RLEE (envios − recebimentos exterior)" },
          { label: "SELIC-Meta", detail: "Meta do COPOM, praticada pelo governo" },
          { label: "SELIC-Over", detail: "Taxa efetiva de mercado, Taxa Livre de Risco" },
          { label: "Taxa DI", detail: "Benchmark: CDB, LCI, LCA, fundos" }
        ]},
        { label: "Inflação & Câmbio", color: "#5b8fee", icon: "💹", children: [
          { label: "IPCA", detail: "IBGE · varejo · meta CMN · NTN-B" },
          { label: "IGP-M", detail: "FGV · 60% IPA (atacado) · aluguel" },
          { label: "PTAX", detail: "Média simples de 4 consultas diárias" },
          { label: "COPOM", detail: "9 membros · a cada 45 dias · define SELIC" }
        ]},
        { label: "Políticas Macro", color: "#4dbdaf", icon: "⚙️", children: [
          { label: "Monetária", detail: "Open Market (mais ágil) · Compulsório · Redesconto" },
          { label: "Fiscal", detail: "Gastos e tributos do governo" },
          { label: "Cambial", detail: "Câmbio Fixo / Flutuante / Suja · Swap" },
          { label: "Expansionista vs Contracionista", detail: "Injetar vs retirar dinheiro da economia" }
        ]},
        { label: "Ciclos Econômicos", color: "#e74c3c", icon: "🔄", children: [
          { label: "Declínio", detail: "PIB negativo por 2+ trimestres" },
          { label: "Depressão", detail: "Fundo do ciclo, queda ≥10%" },
          { label: "Recuperação", detail: "Produção cresce, desemprego cai" },
          { label: "Boom", detail: "Plena capacidade, inflação sobe" }
        ]}
      ]
    },
    tags: ["PIB", "PNB", "SELIC", "COPOM", "CDI", "DI", "TR", "TLP", "PTAX", "IPCA", "IGP-M", "inflação", "câmbio", "política monetária", "política fiscal", "política cambial", "Open Market", "compulsório", "redesconto", "ciclo econômico", "recessão", "depressão", "BNDES", "swap cambial", "balanço de pagamentos", "superávit", "déficit", "Balança Comercial"],
    fc: [
      { q: "Qual a fórmula do PIB pela Ótica do Consumo (Dispêndio)?", a: "PIB = C (Consumo das famílias) + I (Investimentos das empresas) + G (Gastos do Governo) + X (Exportação) − M (Importação). A Balança Comercial é X − M, também chamada de exportação líquida." },
      { q: "Qual a diferença entre SELIC-Meta e SELIC-Over?", a: "SELIC-Meta: definida pelo COPOM, é a META desejada para a taxa de juros. SELIC-Over: taxa EFETIVA, apurada diariamente pela média das operações com títulos públicos entre bancos. A Over converge para a Meta." },
      { q: "O que é o COPOM e qual sua composição?", a: "Comitê de Política Monetária do BACEN. Composição: Presidente do BACEN + 8 diretores = 9 membros. Reúne-se a cada 45 dias para definir a SELIC-Meta com base na meta de inflação (IPCA) do CMN." },
      { q: "Qual a diferença entre IPCA e IGP-M?", a: "IPCA: índice oficial, calculado pelo IBGE, mede inflação no VAREJO, famílias de 1-40 SM. IGP-M: calculado pela FGV, mede principalmente o ATACADO (60% IPA + 30% IPC + 10% INCC). Por isso o IGP-M oscila mais com o câmbio." },
      { q: "Quais são os 3 instrumentos da Política Monetária e qual é o mais ágil?", a: "1) Open Market: compra/venda de títulos públicos pelo BACEN — É O MAIS ÁGIL; 2) Depósito Compulsório: percentual dos depósitos retidos no BACEN; 3) Redesconto: taxa cobrada pelo BACEN por empréstimos a bancos." },
      { q: "Qual a diferença entre Superávit Primário e Déficit Nominal?", a: "Primário: Receitas − Despesas NÃO financeiras (mede a eficiência do governo atual). Nominal: Resultado Primário − Juros da dívida pública (mede o país como um todo, incluindo governos anteriores)." },
      { q: "Quais são as 4 fases do ciclo econômico e como identificar recessão?", a: "1) Declínio/Recessão: PIB negativo por 2+ trimestres consecutivos; 2) Depressão: ponto mais baixo, queda acentuada (≥10%); 3) Recuperação: produção cresce; 4) Boom/Pico: plena capacidade, desemprego mínimo, inflação tende a subir." },
      { q: "Como funciona o Swap Cambial vs Swap Cambial Reverso?", a: "Swap Cambial: BACEN 'vende' dólares (contracionista cambial) → trava a ALTA do dólar. Swap Cambial Reverso: BACEN 'compra' dólares (expansionista cambial) → trava a QUEDA do dólar (valorização do real)." }
    ],
    q: [
      {
        t: "Segundo a Ótica do Consumo (Dispêndio), o PIB é calculado como:",
        o: ["A) Salários + Juros + Aluguéis + Dividendos", "B) Indústria + Agropecuária + Serviços", "C) Consumo + Investimentos + Gastos do Governo + Exportação − Importação", "D) PIB − Renda Líquida Enviada ao Exterior"],
        c: 2,
        f: "Pela Ótica do Consumo: PIB = C + I + G + X − M. A alternativa A corresponde à Ótica da Renda; a B à Ótica da Produção; e a D é a fórmula do PNB."
      },
      {
        t: "O COPOM é responsável por definir a SELIC-Meta. Qual é a sua composição?",
        o: ["A) Ministro da Fazenda + 8 diretores do BACEN (9 membros)", "B) Presidente do BACEN + 8 diretores (9 membros)", "C) Presidente do BACEN + 5 diretores (6 membros)", "D) Presidente do CMN + Presidente do BACEN + 7 diretores"],
        c: 1,
        f: "O COPOM é composto pelo Presidente do BACEN + 8 diretores = 9 membros. Reúne-se a cada 45 dias. O CMN não participa do COPOM — o CMN define a META de inflação, e o COPOM define a taxa de juros para atingi-la."
      },
      {
        t: "O IGP-M é calculado pela FGV. Qual sua composição e seu maior componente?",
        o: ["A) 60% IPC + 30% IPA + 10% INCC", "B) 60% IPCA + 30% IPA + 10% INCC", "C) 60% IPA (Atacado) + 30% IPC + 10% INCC", "D) 60% INCC + 30% IPA + 10% IPC"],
        c: 2,
        f: "IGP-M = 60% IPA (Índice de Preços por Atacado) + 30% IPC + 10% INCC. Por ter 60% no atacado (IPA), o IGP-M é muito mais sensível a variações cambiais do que o IPCA, que mede o varejo."
      },
      {
        t: "Quando o Banco Central VENDE títulos públicos no Open Market, o efeito na economia é:",
        o: ["A) Expansionista — aumenta a liquidez e estimula o crescimento", "B) Contracionista — retira dinheiro de circulação, reduz liquidez e inflação", "C) Neutro — não afeta a oferta de moeda", "D) Expansionista cambial — desvaloriza o real"],
        c: 1,
        f: "Quando o BACEN VENDE títulos, o investidor entrega dinheiro ao governo e recebe os papéis → há MENOS dinheiro circulando → efeito CONTRACIONISTA. O oposto (compra de títulos) é expansionista."
      },
      {
        t: "Um país apresenta queda do PIB por dois trimestres consecutivos. Essa situação é caracterizada como:",
        o: ["A) Depressão econômica", "B) Estagflação", "C) Recessão (Declínio)", "D) Hiperinflação"],
        c: 2,
        f: "Recessão (Declínio) = PIB negativo por 2 ou mais trimestres consecutivos. Depressão é mais grave (queda acentuada ≥10%, longa duração). Estagflação = PIB estagnado + inflação alta. Hiperinflação = inflação >50%/ano."
      },
      {
        t: "A TR (Taxa Referencial) é utilizada na correção de qual conjunto de produtos financeiros?",
        o: ["A) CDB e LCI emitidos por bancos comerciais", "B) Caderneta de poupança, FGTS e financiamentos pelo SFH", "C) NTN-B e debêntures indexadas ao IPCA", "D) Câmbio comercial e operações de câmbio forward"],
        c: 1,
        f: "A TR corrige a caderneta de poupança, o FGTS e os financiamentos habitacionais pelo SFH. NÃO é usada em CDB (que rende % do CDI/SELIC) nem em NTN-B (que usa IPCA). A TR é derivada da TBF (calculada com LTNs) com fator multiplicativo de 0,93."
      },
      {
        t: "A TLP (Taxa de Longo Prazo) é a principal taxa de referência dos financiamentos do:",
        o: ["A) Banco do Brasil — crédito rural e agronegócio", "B) BNDES — financiamentos de longo prazo para investimento produtivo", "C) Caixa Econômica Federal — habitação popular pelo MCMV", "D) BACEN — empréstimos de redesconto aos bancos comerciais"],
        c: 1,
        f: "A TLP é o custo financeiro dos financiamentos do BNDES (Banco Nacional de Desenvolvimento Econômico e Social). Composição: TLP-Pré (juros reais prefixados, divulgados mensalmente pelo BACEN) + variação do IPCA. Substituiu a TJLP em 2018 para reduzir o subsídio implícito nos financiamentos."
      },
      {
        t: "O Brasil envia ao exterior mais remessas de lucros e juros do que recebe. Com isso, a relação entre PIB e PNB brasileiro é:",
        o: ["A) PNB > PIB, pois exportações superam importações", "B) PNB = PIB, pois as remessas são compensadas pelos recebimentos", "C) PNB < PIB, pois o RLEE positivo é subtraído do PIB na fórmula do PNB", "D) PNB < PIB apenas em anos de crise cambial"],
        c: 2,
        f: "PNB = PIB − RLEE (Renda Líquida Enviada ao Exterior). Se o Brasil envia mais ao exterior do que recebe (RLEE positivo), então PNB < PIB. Isso ocorre porque multinacionais instaladas no Brasil remetem lucros, além do pagamento de juros da dívida externa."
      },
      {
        t: "A PTAX é a taxa de câmbio oficial do Brasil, divulgada pelo BACEN. Qual é sua metodologia de cálculo?",
        o: ["A) Média aritmética de todas as operações cambiais registradas no SISBACEN no dia", "B) Média simples de 4 boletins diários de consulta a dealers, excluindo valores extremos de compra e venda", "C) Último preço de fechamento do dólar negociado na B3", "D) Taxa definida pelo CMN com base no nível das reservas internacionais"],
        c: 1,
        f: "A PTAX é calculada como média simples de 4 consultas diárias a dealers do mercado de câmbio, excluindo os 2 maiores e 2 menores de cada ponta (compra e venda). É a taxa de referência oficial para contratos, derivativos cambiais e pagamento de dívidas em moeda estrangeira."
      },
      {
        t: "Um governo registra superávit primário de R$80 bilhões, mas déficit nominal de R$50 bilhões. Quanto esse governo pagou em juros da dívida pública?",
        o: ["A) R$30 bilhões", "B) R$50 bilhões", "C) R$80 bilhões", "D) R$130 bilhões"],
        c: 3,
        f: "Resultado Nominal = Resultado Primário − Juros da dívida. Déficit Nominal = −50 bi; Superávit Primário = +80 bi. Então: −50 = +80 − Juros → Juros = 80 + 50 = R$130 bilhões. O governo foi eficiente operacionalmente (+80 bi), mas pagou R$130 bi em juros (herança de dívidas anteriores), gerando déficit nominal de R$50 bi."
      },
      {
        t: "A deflação persistente é considerada economicamente prejudicial principalmente porque:",
        o: ["A) Aumenta o poder de compra e pode gerar excesso de demanda acima do PIB potencial", "B) Leva consumidores a postergar compras esperando preços ainda menores, gerando retração e desemprego em espiral", "C) Eleva os juros reais, tornando o crédito mais barato e estimulando o endividamento das famílias", "D) Desvaloriza as reservas internacionais e enfraquece o câmbio"],
        c: 1,
        f: "Na deflação, preços caem persistentemente → consumidor adia compras esperando preços menores → empresas vendem menos → reduzem produção → demitem → consumo cai ainda mais. Ciclo vicioso. É diferente de uma queda pontual de preço. O Japão viveu décadas nessa armadilha deflacionária. Cuidado: a alternativa A confunde deflação com aquecimento econômico."
      },
      {
        t: "O Brasil adota qual regime cambial atualmente?",
        o: ["A) Câmbio fixo — o real é atrelado ao dólar por paridade definida pelo CMN", "B) Câmbio flutuante puro — o BACEN nunca intervém no mercado de câmbio", "C) Flutuação suja (câmbio administrado) — o BACEN pode intervir quando julgar necessário", "D) Câmbio fixo em banda — o real oscila dentro de limites definidos pelo BACEN"],
        c: 2,
        f: "O Brasil adota flutuação suja (câmbio administrado): câmbio livre pelo mercado, mas o BACEN intervém (via swap cambial, swap reverso ou compra/venda de reservas) quando os movimentos são excessivos. O câmbio fixo foi abandonado em janeiro de 1999, com a crise do real e adoção do tripé macroeconômico (câmbio flutuante + metas de inflação + responsabilidade fiscal)."
      }
    ],
    al: [
      { t: "danger", tag: "PIB vs PNB — não confunda!", txt: "<strong>PIB</strong> = tudo produzido DENTRO do país (independente da nacionalidade). <strong>PNB = PIB − RLEE</strong>: inclui o que brasileiros produzem fora, exclui o que estrangeiros produzem aqui. Erro clássico na prova!" },
      { t: "danger", tag: "SELIC-Meta ≠ SELIC-Over", txt: "<strong>Meta</strong>: definida pelo COPOM, é a taxa DESEJADA pelo governo. <strong>Over</strong>: taxa EFETIVA apurada diariamente no mercado. A Over tende a convergir para a Meta — mas são conceitos distintos e ambos são cobrados!" },
      { t: "warn", tag: "IPCA vs IGP-M — quem oscila mais com câmbio?", txt: "<strong>IGP-M</strong> oscila muito mais com o câmbio porque tem 60% no IPA (atacado), que é mais impactado por preços de commodities e importações. O <strong>IPCA</strong> mede o varejo, menos sensível ao câmbio." },
      { t: "tip", tag: "Mnemônico Pol. Monetária Expansionista", txt: "Para injetar dinheiro na economia, o BACEN usa o <strong>'CRR-R'</strong>: <strong>C</strong>ompra títulos (Open Market), <strong>R</strong>eduz juros (Redesconto), <strong>R</strong>eduz compulsório. Tudo isso aumenta a liquidez, o PIB e a inflação." },
      { t: "danger", tag: "Swap Cambial vs Reverso — é o inverso do nome!", txt: "<strong>Swap Cambial</strong>: BACEN 'vende' dólares → barra a ALTA do dólar (contracionista cambial). <strong>Swap Reverso</strong>: BACEN 'compra' dólares → barra a QUEDA do dólar. O 'Reverso' é o inverso em relação ao Swap normal." },
      { t: "warn", tag: "Recessão ≠ Depressão (critério técnico)", txt: "<strong>Recessão</strong>: PIB negativo por 2+ trimestres consecutivos. <strong>Depressão</strong>: queda muito acentuada do PIB (≥10%) por longo período, com alto desemprego e falências em massa. Brasil nos anos 80-90 viveu hiperinflação, não depressão técnica." }
    ],
    conexoes: `<div class="content-body">
<h3>A Cadeia de Causalidade do Mercado Financeiro Brasileiro</h3>
<p>Entenda essa cadeia e você vai acertar muitas questões da prova CFP:</p>
<p><em>CMN define meta de IPCA → COPOM/BACEN sobe ou reduz SELIC-Meta → SELIC-Over (mercado) converge para a Meta → Taxa DI acompanha a SELIC-Over → CDB, LCI, LCA e fundos DI rendem % do CDI</em></p>
<p>Cada elo dessa corrente é cobrado separadamente na prova. Conhecê-los em conjunto dá uma vantagem enorme.</p>
<h3>Sinônimos e Equivalências</h3>
<table class="data-table">
<thead><tr><th>Termo técnico</th><th>Sinônimos / Equivalências na prática</th></tr></thead>
<tbody>
<tr><td><strong>Taxa DI</strong></td><td>CDI, DI-Over — mesma coisa: taxa dos depósitos interbancários de 1 dia útil entre bancos</td></tr>
<tr><td><strong>NTN-B</strong></td><td>Tesouro IPCA+ (nomenclatura do Tesouro Direto) — paga IPCA + juros prefixados</td></tr>
<tr><td><strong>NTN-F</strong></td><td>Tesouro Prefixado com Juros Semestrais (paga cupom a cada 6 meses)</td></tr>
<tr><td><strong>LTN</strong></td><td>Tesouro Prefixado (sem cupom semestral — zero-coupon)</td></tr>
<tr><td><strong>Taxa Livre de Risco (TLR)</strong></td><td>SELIC-Over no Brasil (equivale ao T-Bill americano nos EUA)</td></tr>
<tr><td><strong>Recessão técnica</strong></td><td>Critério formal: PIB real negativo por 2 trimestres consecutivos</td></tr>
<tr><td><strong>Exportação líquida</strong></td><td>Balança Comercial = X − M (componente do PIB pela ótica do dispêndio)</td></tr>
<tr><td><strong>TJLP</strong></td><td>Antecessora da TLP no BNDES — substituída em 2018; pode aparecer em questões históricas</td></tr>
</tbody>
</table>
<h3>Exemplos do Dia a Dia</h3>
<ul>
<li><strong>CDB que rende 110% do CDI:</strong> CDI = Taxa DI (lastreada em títulos privados, muito próxima da SELIC-Over). O banco que emite o CDB é regulado pelo BACEN</li>
<li><strong>Financiamento pelo SFH (habitação):</strong> taxa = TR + spread → TR recalculada com base nas LTNs × 0,93. FGTS também é corrigido pela TR</li>
<li><strong>COPOM sobe a SELIC:</strong> crédito fica mais caro → consumo e investimento caem → inflação desacelera (com defasagem de 6-12 meses) → chamada de política monetária contracionista</li>
<li><strong>Dólar sobe muito:</strong> BACEN faz Swap Cambial (vende dólar no futuro via derivativo) → segura a alta sem gastar as reservas de imediato</li>
<li><strong>Governo arrecada mais que gasta (excluindo juros):</strong> superávit primário. Se os juros da dívida pública forem maiores que o superávit → ainda terá déficit nominal</li>
</ul>
<h3>Analogias para Fixar</h3>
<p><strong>SELIC-Meta é o termostato da economia:</strong> inflação subindo = COPOM aumenta a SELIC (resfria: crédito caro, menos consumo). Economia em recessão = COPOM reduz a SELIC (aquece: crédito barato, mais consumo e investimento).</p>
<p><strong>IGP-M é o termômetro da porteira:</strong> mede o que sai das fazendas e fábricas (60% IPA = atacado) antes de chegar ao consumidor. Por isso oscila mais com câmbio e commodities. <strong>IPCA é o termômetro do supermercado:</strong> mede o que a família de renda média compra no varejo — é o índice que o CMN usa para fixar a meta de inflação.</p>
</div>`
  }
,

  3: {
    titulo: "Fundamentos de Finanças",
    exp: `<div class="content-body">
<h2>Matemática Financeira — Conceito</h2>
<p>A matemática financeira calcula o <strong>valor do dinheiro no tempo</strong> — quanto um valor hoje valerá no futuro, ou quanto um valor futuro vale hoje. Fórmula fundamental:</p>
<p><em>Valor Futuro (Montante) = Valor Presente (Principal) + Juros</em></p>
<h3>Variáveis Fundamentais (HP 12C)</h3>
<table class="data-table">
<thead><tr><th>Variável</th><th>Nome</th><th>Tecla HP</th><th>Conceito</th></tr></thead>
<tbody>
<tr><td><strong>C / PV</strong></td><td>Capital / Valor Presente</td><td>[PV]</td><td>Valor do dinheiro hoje — investimento, dívida ou empréstimo</td></tr>
<tr><td><strong>J</strong></td><td>Juros</td><td>—</td><td>Remuneração do capital; custo do dinheiro no tempo</td></tr>
<tr><td><strong>i</strong></td><td>Taxa de Juros</td><td>[i]</td><td>Percentual sobre os fluxos; SEMPRE associada a um prazo</td></tr>
<tr><td><strong>n</strong></td><td>Prazo</td><td>[n]</td><td>Período do problema; deve estar na MESMA unidade que a taxa</td></tr>
<tr><td><strong>M / FV</strong></td><td>Montante / Valor Futuro</td><td>[FV]</td><td>Capital inicial mais juros acumulados</td></tr>
<tr><td><strong>PMT</strong></td><td>Pagamento / Parcela</td><td>[PMT]</td><td>Fluxo periódico; i e n devem sempre estar na base do PMT</td></tr>
</tbody>
</table>
<p><strong>Regra de ouro:</strong> taxa (i) e prazo (n) devem SEMPRE estar na mesma unidade (mês com mês, ano com ano). Erro frequentíssimo na prova!</p>

<h2>Regimes de Capitalização: Juros Simples</h2>
<p>Os juros incidem <strong>somente sobre o capital inicial</strong> — crescimento <em>linear</em>. Fórmulas:</p>
<ul>
<li><strong>J = C × i × n</strong></li>
<li><strong>FV = C × (1 + i × n)</strong></li>
</ul>
<p>Em juros simples usa-se <em>taxa proporcional</em>: dividida diretamente pelo fator de tempo (regra de três). Exemplo: 30% a.a. ÷ 12 = 2,5% a.m.</p>

<h2>Regimes de Capitalização: Juros Compostos</h2>
<p>Os juros incidem sobre o <strong>capital acrescido dos juros anteriores</strong> — "juros sobre juros" — crescimento <em>exponencial</em>. Fórmula:</p>
<p><em>FV = PV × (1 + i)^n</em></p>
<p>Em juros compostos usa-se <em>taxa equivalente</em> — conversão exponencial. Exemplo: 12% a.a. não é 1% a.m. (é 0,9489% a.m.).</p>
<table class="data-table">
<thead><tr><th>Regime</th><th>Fórmula</th><th>Tipo de Taxa</th><th>Crescimento</th></tr></thead>
<tbody>
<tr><td><strong>Juros Simples</strong></td><td>FV = C × (1 + i × n)</td><td>Proporcional (÷ tempo)</td><td>Linear (reta)</td></tr>
<tr><td><strong>Juros Compostos</strong></td><td>FV = PV × (1 + i)^n</td><td>Equivalente (exponencial)</td><td>Exponencial (curva)</td></tr>
</tbody>
</table>
<h3>Taxa Equivalente — Regra do QUERO/TENHO</h3>
<p><em>iQ = [(1 + iT)^(q/t) − 1] × 100</em> — onde q = prazo que quero; t = prazo que tenho.</p>
<p>Exemplo: taxa mensal equivalente a 12% a.a. = [(1,12)^(1/12) − 1] × 100 = 0,9489% a.m.</p>

<h2>Taxa de Juros Nominal e Taxa Real</h2>
<p>A <strong>taxa nominal</strong> é a divulgada pelas instituições (ex: fundo rendeu 15% a.a.). A <strong>taxa real</strong> é o ganho efetivo após descontar a inflação — quanto realmente aumentou o poder de compra.</p>
<h3>Fórmula de Fischer</h3>
<table class="data-table">
<thead><tr><th>Objetivo</th><th>Fórmula</th></tr></thead>
<tbody>
<tr><td><strong>Calcular a Taxa Real</strong></td><td>Taxa Real = [(1 + Nominal) / (1 + Inflação) − 1] × 100</td></tr>
<tr><td><strong>Calcular a Taxa Nominal</strong></td><td>Taxa Nominal = [(1 + Real) × (1 + Inflação) − 1] × 100</td></tr>
</tbody>
</table>
<p>Exemplo: fundo rende 15%, inflação 10% → Taxa Real = (1,15/1,10) − 1 = <strong>4,55%</strong> (nunca 5%!).</p>
<p><strong>Atenção NTN-B:</strong> remunera "4,55% + IPCA" — esse "+" é MULTIPLICAÇÃO de fatores, não soma. 4,55% real + 10% IPCA = 15% nominal (não 14,55%).</p>

<h2>Estrutura a Termo da Taxa de Juros (ETTJ)</h2>
<p>Também chamada de <strong>curva de juros</strong> — representa a expectativa de retornos nas aplicações de renda fixa levando em conta a <strong>relação entre tempo e taxa</strong>. A ideia central é que cada período possui sua própria taxa, e os retornos não são uniformes ao longo do tempo (mesmo que a gente acredite nisso).</p>

<h3>Taxa Spot vs Taxa a Termo</h3>
<table class="data-table">
<thead><tr><th>Conceito</th><th>Definição</th><th>Exemplo prático</th></tr></thead>
<tbody>
<tr><td><strong>Taxa Spot (Z)</strong></td><td>Taxa que <strong>INICIA HOJE</strong> — cobre do presente até um ponto futuro</td><td>Spot do ano 1 = 2%: aplicação de 1 ano que começa agora</td></tr>
<tr><td><strong>Taxa a Termo (f)</strong></td><td>Taxa de período <strong>futuro que NÃO inicia hoje</strong> — cobre de um ponto futuro a outro</td><td>Taxa a termo do ano 2 = 3%: juros esperados entre o 1º e o 2º ano</td></tr>
</tbody>
</table>
<p><strong>Exemplo intuitivo:</strong> Spot 2021 = 2%, taxa a termo 2022 = 3%. Aplicando R$100 hoje: ao final do ano 1 → R$102,00; ao final do ano 2 → R$102 × 1,03 = <strong>R$105,06</strong> (retorno total de 5,06% no período, ou <strong>2,4988% a.a.</strong> — a taxa spot de 2 anos).</p>
<p>Mesmo com a taxa spot de 2 anos sendo 2,4988% a.a., isso <em>não significa</em> que rendeu essa taxa em cada ano: o ano 1 rendeu 2% e o ano 2 rendeu 3%. É uma composição.</p>

<h3>Formatos da Curva de Juros</h3>
<table class="data-table">
<thead><tr><th>Formato</th><th>Comportamento</th><th>Sinal de Mercado</th></tr></thead>
<tbody>
<tr><td><strong>Normal (Ascendente)</strong></td><td>Quanto maior o prazo, maior a taxa — situação usual</td><td>Prêmio de prazo: investidor exige mais por esperar mais tempo</td></tr>
<tr><td><strong>Invertida (Descendente)</strong></td><td>Taxas longas menores que as curtas</td><td>Política monetária expansionista — mercado espera queda de juros no futuro</td></tr>
<tr><td><strong>Arqueada</strong></td><td>Sobe no curto prazo, forma pico e cai no longo</td><td>Expectativa de alta temporária de juros seguida de queda estrutural</td></tr>
</tbody>
</table>

<h3>Fórmula da ETTJ</h3>
<p>Como a ETTJ usa juros compostos, os fatores de retorno se <strong>multiplicam</strong> — não se somam:</p>
<p style="font-size:1.15em;font-weight:bold;text-align:center;padding:8px;background:#f0f4ff;border-radius:6px;">(1 + Z<sub>n</sub>)<sup>n</sup> = (1 + Z<sub>1</sub>) × (1 + f<sub>2</sub>) × ⋯ × (1 + f<sub>n</sub>)</p>
<table class="data-table">
<thead><tr><th>Variável</th><th>Significado</th></tr></thead>
<tbody>
<tr><td><strong>Z<sub>n</sub></strong></td><td>Taxa spot anualizada do período total (o que geralmente queremos)</td></tr>
<tr><td><strong>Z<sub>1</sub></strong></td><td>Taxa spot do 1º ano (começa hoje)</td></tr>
<tr><td><strong>f<sub>2</sub>...f<sub>n</sub></strong></td><td>Taxas a termo de cada período intermediário (não iniciam hoje)</td></tr>
</tbody>
</table>
<p><strong>Chave para a prova:</strong> a HP 12C transforma essa fórmula em <em>somas e subtrações</em> — não precisa decorar a fórmula completa, basta entender o raciocínio em 2 passos.</p>

<h3>Como Calcular a Taxa a Termo — A Lógica</h3>
<p>Dois princípios fundamentais governam todos os cálculos da ETTJ. Grave esses dois e qualquer questão da prova se resolve:</p>
<table class="data-table">
<thead><tr><th>Princípio</th><th>Em palavras</th><th>Em juros compostos</th></tr></thead>
<tbody>
<tr><td><strong>1. Somatório</strong></td><td>A taxa total de um período é o <strong>somatório</strong> das taxas intermediárias</td><td>"Somar" taxas = <strong>multiplicar fatores</strong>: (1+total) = (1+f₁)×(1+f₂)×...×(1+fₙ)</td></tr>
<tr><td><strong>2. Subtração = Divisão</strong></td><td>Um "pedaço" da taxa total é a taxa total <strong>subtraída</strong> das taxas que não queremos</td><td>"Subtrair" em compostos = <strong>dividir fatores</strong>: (1+f_incógnita) = Fator Total ÷ Fator Conhecido</td></tr>
</tbody>
</table>
<p><strong>Por que "subtração = divisão"?</strong> Em juros simples, você soma e subtrai normalmente. Em juros compostos, os fatores se multiplicam — então "retirar" um pedaço do produto significa dividi-lo. É a operação inversa da multiplicação.</p>
<p><strong>Aplicação prática:</strong> Imagine que você sabe o retorno total de 3 anos (todos os fatores multiplicados) e conhece os fatores dos anos 2 e 3. Para achar o fator do ano 1, basta <em>dividir</em> o total pelos anos que você já tem. Na HP 12C isso se traduz em: calcule o fator dos anos conhecidos → use como PV; coloque o total como FV → [i] encontra a taxa incógnita.</p>

<h3>Exemplo 1 Detalhado: Encontrar a Taxa Spot de 3 Anos</h3>
<p><strong>Dados:</strong> Taxa spot 1A = 2% &nbsp;|&nbsp; Taxa a termo do ano 2 = 3% &nbsp;|&nbsp; Taxa a termo do ano 3 = 4%<br>
<strong>Pergunta:</strong> Qual a taxa spot 0-3, ou seja, a taxa única anualizada equivalente a todo esse período?</p>

<h4>Passo 0 — Entenda a linha do tempo antes de calcular</h4>
<p>Cada taxa cobre um "pedaço" sequencial da linha do tempo. Elas não se somam — se encadeiam:</p>
<table class="data-table">
<thead><tr><th>Trecho</th><th>Taxa</th><th>Tipo</th><th>O que acontece com R$100</th></tr></thead>
<tbody>
<tr><td>Hoje → Ano 1</td><td>2%</td><td>Taxa <strong>Spot</strong> (começa hoje)</td><td>R$100 × 1,02 = <strong>R$102,00</strong></td></tr>
<tr><td>Ano 1 → Ano 2</td><td>3%</td><td>Taxa <strong>a Termo 1A</strong> (começa no ano 1)</td><td>R$102,00 × 1,03 = <strong>R$105,06</strong></td></tr>
<tr><td>Ano 2 → Ano 3</td><td>4%</td><td>Taxa <strong>a Termo 2A</strong> (começa no ano 2)</td><td>R$105,06 × 1,04 = <strong>R$109,26</strong></td></tr>
</tbody>
</table>
<p>Resultado final: R$109,26 sobre os R$100 investidos = <strong>9,26% de retorno total no período de 3 anos</strong>. Esse é o número que a HP 12C vai encontrar no Passo 1.</p>

<h4>Passo 1 — HP 12C como "acumulador de fatores" (encontrar o retorno total)</h4>
<p>A tecla <strong>[%][+]</strong> na HP 12C faz exatamente o encadeamento acima: pega o valor no visor, calcula X% dele e adiciona ao próprio valor — replicando a multiplicação por (1 + taxa) de cada período.</p>
<table class="data-table">
<thead><tr><th>Tecla(s)</th><th>O que a calculadora faz</th><th>Visor</th></tr></thead>
<tbody>
<tr><td><strong>100 [ENTER]</strong></td><td>Coloca 100 como capital de referência</td><td>100,00</td></tr>
<tr><td><strong>2 [%] [+]</strong></td><td>Calcula 2% de 100 (= 2) e soma: 100 + 2</td><td>102,00 → aplica taxa spot ano 1</td></tr>
<tr><td><strong>3 [%] [+]</strong></td><td>Calcula 3% de 102 (= 3,06) e soma: 102 + 3,06</td><td>105,06 → aplica taxa a termo ano 2</td></tr>
<tr><td><strong>4 [%] [+]</strong></td><td>Calcula 4% de 105,06 (= 4,20) e soma: 105,06 + 4,20</td><td>109,26 → aplica taxa a termo ano 3</td></tr>
<tr><td><strong>100 [−]</strong></td><td>Subtrai o capital inicial para obter só o retorno líquido</td><td><strong>9,26</strong> → retorno total % do período</td></tr>
</tbody>
</table>
<p>O 9,26% que aparece <strong>não é uma taxa anual</strong> — é o retorno bruto acumulado nos 3 anos inteiros. Agora precisamos transformar isso em taxa por ano.</p>

<h4>Passo 2 — Anualizar: transformar retorno total em taxa spot anualizada</h4>
<p>Temos: retorno total = 9,26% em 3 anos. Queremos: qual taxa, aplicada por 3 anos em juros compostos, gera esse mesmo retorno? Matematicamente é a raiz cúbica do fator total:</p>
<p style="text-align:center;font-weight:bold;">(1 + Z₃)³ = 1,0926 &nbsp;→&nbsp; Z₃ = ³√1,0926 − 1 = 2,997% a.a.</p>
<p>A HP 12C faz essa raiz para você com a sequência abaixo — ela resolve: "dado que em <em>n</em> períodos acumulei <em>i</em>% total, qual a taxa equivalente por período?"</p>
<table class="data-table">
<thead><tr><th>Tecla(s)</th><th>O que está informando à HP 12C</th></tr></thead>
<tbody>
<tr><td><strong>9,26 [i]</strong></td><td>Retorno total do período = 9,26% (a "taxa total" em <em>n</em> períodos)</td></tr>
<tr><td><strong>3 [n]</strong></td><td>Duração = 3 períodos (anos)</td></tr>
<tr><td><strong>1 [R/S]</strong></td><td>Manda calcular a taxa equivalente por período (extrai a raiz n-ésima)</td></tr>
</tbody>
</table>
<p><strong>Resultado: 2,997% a.a.</strong> — essa é a taxa spot de 3 anos. Se você aplicar R$100 a 2,997% ao ano por 3 anos em juros compostos, chegará exatamente em R$109,26. É a taxa <em>média geométrica</em> das três taxas — não a média aritmética (que daria 3% e estaria errada).</p>

<h4>Por que 2,997% ≠ (2% + 3% + 4%) ÷ 3 = 3%?</h4>
<p>Porque em juros compostos os fatores se <strong>multiplicam</strong>, não se somam. A média aritmética ignora o efeito dos juros sobre juros acumulados entre os períodos. A taxa spot de 3 anos é sempre a <em>média geométrica</em> dos fatores — e o valor é ligeiramente diferente da aritmética. Na prova, nunca use média aritmética de taxas em questões de ETTJ.</p>

<h3>HP 12C — Exemplo 2: Encontrar a Taxa Spot Curta (Inverso)</h3>
<p><em>Uma LTN de 3 anos rende 9,26% no período. Taxa a termo do ano 2 = 3%, taxa a termo do ano 3 = 4%. Qual a taxa spot de 1 ano?</em></p>
<table class="data-table">
<thead><tr><th>Passo 1 — Calcular o "pedaço" a ser subtraído (anos 2 e 3)</th><th>Passo 2 — Isolar a taxa incógnita (ano 1)</th></tr></thead>
<tbody>
<tr><td>100 [ENTER] → 3 [%] [+] → 4 [%] [+] → 100 [−] = <strong>7,12%</strong><br>Fator acumulado dos anos 2 e 3 = 107,12</td><td>109,26 [FV] → 107,12 [CHS][PV] → 1 [n] → [i]<br><strong>R: 2% a.a.</strong></td></tr>
</tbody>
</table>
<p>Lógica: o retorno total (109,26) é o produto de todos os fatores. Dividindo pelo "pedaço" dos anos 2 e 3 (107,12), sobra exatamente o fator do ano 1 — e a HP 12C extrai essa taxa com [i].</p>

<h2>Desconto Bancário e Comercial (por fora)</h2>
<p>Modalidade mais utilizada pelas instituições. Baseia-se em <strong>juros simples sobre o valor nominal</strong> (valor futuro). Fórmulas:</p>
<ul>
<li><strong>Desconto = Valor Nominal × i × n</strong></li>
<li><strong>Valor Presente = Valor Nominal − Desconto</strong></li>
</ul>
<p>Exemplo: cheque de R$3.000 descontado 6 meses antes a 2% a.m. → Desconto = 3.000 × 0,02 × 6 = R$360 → VP = R$2.640.</p>

<h2>Série de Pagamentos (PMT) e Anuidades</h2>
<p>Sequências de pagamentos periódicos. Em relação ao vencimento:</p>
<table class="data-table">
<thead><tr><th>Tipo</th><th>Quando paga</th><th>HP 12C</th></tr></thead>
<tbody>
<tr><td><strong>Postecipada (END)</strong></td><td>Final de cada período — padrão</td><td>[g][8] — sem "BEG" no visor</td></tr>
<tr><td><strong>Antecipada (BEGIN)</strong></td><td>Início de cada período</td><td>[g][7] — aparece "BEG" no visor</td></tr>
</tbody>
</table>
<h3>Perpetuidade (Série Infinita)</h3>
<p>Renda sem prazo final — "viver dos juros": <em>PV(per) = PMT / i</em></p>
<p>Exemplo: renda perpétua de R$5.000/mês a 0,5% a.m. → PV = 5.000 / 0,005 = R$1.000.000.</p>

<h2>Sistemas de Amortização</h2>
<p>Toda prestação é composta de: <strong>Prestação = Juros + Amortização</strong></p>
<table class="data-table">
<thead><tr><th>Sistema</th><th>Prestação</th><th>Amortização</th><th>Juros Totais</th><th>Exemplo prático</th></tr></thead>
<tbody>
<tr><td><strong>Price (Francês)</strong></td><td>Constante (igual)</td><td>Crescente</td><td>Médios</td><td>CDC, financiamento de veículo</td></tr>
<tr><td><strong>SAC (Constante)</strong></td><td>Decrescente</td><td>Constante (D ÷ n)</td><td>Menores</td><td>SFH habitação (Caixa)</td></tr>
<tr><td><strong>SAA (Americano)</strong></td><td>Só juros periódicos</td><td>Apenas no final</td><td>Maiores</td><td>CDB, bonds (Bullet/Balloon)</td></tr>
</tbody>
</table>
<h3>SAC: fórmula</h3>
<p><em>Amortização (A) = Dívida (D) / Número de Parcelas (n)</em></p>
<p>Saldo devedor após k pagamentos = D − (k × A). Os juros de cada parcela incidem sobre o saldo devedor do período anterior.</p>
<h3>Comparativo a Valor Presente</h3>
<p>O SAC paga menos juros TOTAIS pois amortiza mais rápido. Porém, trazendo os fluxos a valor presente, <strong>Price e SAC são equivalentes</strong>. O SAA é o mais caro em juros totais (saldo devedor não diminui durante o prazo).</p>
</div>`,
    mapa: {
      root: "Fundamentos de Finanças",
      branches: [
        { label: "Juros", color: "#d4a843", icon: "📐", children: [
          { label: "Juros Simples", detail: "FV = C×(1+i×n) | Linear | Taxa proporcional" },
          { label: "Juros Compostos", detail: "FV = PV×(1+i)^n | Exponencial | Taxa equivalente" },
          { label: "Taxa Real (Fischer)", detail: "(1+Nom)/(1+Inflação) − 1 | NTN-B: multiplicação" },
          { label: "Taxa Proporcional", detail: "Juros Simples: ÷ tempo direto (regra de três)" },
          { label: "Taxa Equivalente", detail: "Juros Compostos: iQ = [(1+iT)^(q/t)−1]×100" }
        ]},
        { label: "ETTJ", color: "#5b8fee", icon: "📈", children: [
          { label: "Taxa Spot", detail: "INICIA HOJE — do presente a um ponto futuro" },
          { label: "Taxa a Termo", detail: "NÃO inicia hoje — entre dois pontos futuros" },
          { label: "Curva Normal", detail: "Ascendente: prazo maior = taxa maior — padrão" },
          { label: "Curva Invertida", detail: "Descendente — política monetária expansionista" },
          { label: "Curva Arqueada", detail: "Pico no médio prazo, queda no longo" },
          { label: "Fórmula", detail: "(1+Zn)^n = (1+Z1)×(1+f2)×...×(1+fn)" }
        ]},
        { label: "Séries e PMT", color: "#4dbdaf", icon: "💰", children: [
          { label: "END (Postecipado)", detail: "Paga no final — padrão HP [g][8]" },
          { label: "BEGIN (Antecipado)", detail: "Paga no início — [g][7] BEG no visor" },
          { label: "Perpetuidade", detail: "PV = PMT / i — renda infinita" },
          { label: "Desconto por Fora", detail: "D = VN × i × n | VP = VN − D" }
        ]},
        { label: "Amortização", color: "#e74c3c", icon: "🏦", children: [
          { label: "Price", detail: "PMT constante | amortização crescente" },
          { label: "SAC", detail: "Amortização = D/n | PMT decresce | menos juros" },
          { label: "SAA (Bullet)", detail: "Só juros no período | principal no final | mais caro" }
        ]}
      ]
    },
    tags: ["juros simples", "juros compostos", "VP", "VF", "PV", "FV", "PMT", "taxa proporcional", "taxa equivalente", "Fischer", "taxa real", "taxa nominal", "ETTJ", "curva de juros", "taxa spot", "taxa a termo", "Price", "SAC", "SAA", "amortização", "desconto bancário", "perpetuidade", "HP 12C", "fluxo de caixa", "NTN-B", "anuidade", "Bullet"],
    fc: [
      { q: "Qual a diferença fundamental entre juros simples e juros compostos?", a: "Simples: juros incidem SEMPRE sobre o capital inicial → crescimento LINEAR. FV = C×(1+i×n). Compostos: juros incidem sobre capital + juros anteriores ('juros sobre juros') → crescimento EXPONENCIAL. FV = PV×(1+i)^n. Resultado: a partir do 1º período compostos > simples." },
      { q: "Qual tipo de taxa é usada em juros simples e em juros compostos?", a: "Juros Simples: TAXA PROPORCIONAL — divide diretamente pelo tempo (regra de três). Ex: 30% a.a. ÷ 12 = 2,5% a.m. Juros Compostos: TAXA EQUIVALENTE — conversão exponencial. Ex: 12% a.a. = 0,9489% a.m. (não 1%). Misturar os dois é erro clássico de prova." },
      { q: "Qual a Fórmula de Fischer e para que serve?", a: "Taxa Real = [(1 + Nominal) / (1 + Inflação) − 1] × 100. Isola o ganho real acima da inflação. Exemplo: fundo rende 15%, inflação 10% → Taxa Real = (1,15/1,10) − 1 = 4,55%. NUNCA subtrair diretamente (15%−10%=5% está ERRADO em juros compostos)." },
      { q: "O que é a ETTJ e qual a diferença entre taxa Spot e taxa a Termo?", a: "ETTJ (Estrutura a Termo da Taxa de Juros) = curva de juros, relação entre prazo e retorno esperado em renda fixa. Taxa SPOT: inicia HOJE. Taxa a TERMO: taxa de período futuro, que NÃO inicia hoje (ex: juros esperados do 2º ao 3º ano). A soma composta de spot + termos = spot longa." },
      { q: "Qual a fórmula da ETTJ e como os fatores se combinam?", a: "(1 + Zn)^n = (1 + Z1) × (1 + f2) × ... × (1 + fn). Os fatores se MULTIPLICAM (juros compostos). Zn = taxa spot anualizada do total; Z1 = spot do 1º ano; f2...fn = taxas a termo de cada período. Na HP 12C: use [%][+] para acumular os retornos e depois [i][n][R/S] para anualizar." },
      { q: "HP 12C — como encontrar a taxa spot de 3 anos (spot 1A=2%, termo 2A=3%, termo 3A=4%)?", a: "Passo 1 (retorno total): 100[ENTER]→2[%][+]→3[%][+]→4[%][+]→100[−] = 9,26%. Passo 2 (anualizar): 9,26[i]→3[n]→1[R/S] = 2,997% a.a. Atenção: 9,26% é o retorno TOTAL do período de 3 anos, não a taxa anual." },
      { q: "HP 12C — como encontrar uma taxa spot curta quando se conhece o retorno total e as taxas a termo?", a: "Passo 1 (parte conhecida): calcule o fator acumulado das taxas que você TEM: ex. 100[ENTER]→3[%][+]→4[%][+]→100[−] = 7,12% → fator 107,12. Passo 2 (taxa incógnita): total como FV (109,26) → fator conhecido CHS PV (107,12) → n=1 → [i] = 2% a.a. Lógica: total ÷ parte conhecida = parte incógnita." },
      { q: "Quais os 3 sistemas de amortização e suas características-chave?", a: "Price (Francês): prestação CONSTANTE, amortização crescente. SAC: amortização CONSTANTE (D÷n), prestação decrescente, paga MENOS juros no total. SAA (Americano): paga só juros periodicamente, amortiza TUDO no final (Bullet). O mais caro em juros totais é o SAA. Price e SAC são equivalentes a valor presente." },
      { q: "O que é perpetuidade e qual a fórmula?", a: "Perpetuidade (série infinita) = renda que dura para sempre — equivale a 'viver dos juros'. PV(per) = PMT / i. Exemplo: renda de R$5.000/mês a 0,5% a.m. → PV = 5.000 / 0,005 = R$1.000.000. Esse capital nunca é consumido, apenas os juros são retirados." },
      { q: "Diferença entre pagamento antecipado (BEGIN) e postecipado (END) na HP 12C?", a: "Postecipado (END) = pagamento no FINAL de cada período — padrão da HP 12C (sem BEG no visor). Antecipado (BEGIN) = pagamento no INÍCIO — ativa com [g][7], surge 'BEG' no visor. SEMPRE voltar para END ([g][8]) após resolver uma questão antecipada. PV antecipado é sempre maior que postecipado." },
      { q: "Como funciona o desconto bancário comercial (por fora)?", a: "Desconto = Valor Nominal × i × n (juros simples sobre o VALOR NOMINAL futuro, não sobre o PV). VP = VN − Desconto. É 'por fora' pois o desconto é calculado sobre o valor de resgate. Exemplo: VN R$3.000, 2% a.m., 6 meses → D = R$360 → VP = R$2.640. Taxa efetiva é MAIOR que a taxa nominal de desconto." }
    ],
    q: [
      { t: "Uma aplicação de R$ 10.000 a 2% ao mês por 6 meses em regime de JUROS SIMPLES resulta em montante de:", o: ["A) R$ 11.261,62", "B) R$ 11.200,00", "C) R$ 12.000,00", "D) R$ 11.040,82"], c: 1, f: "Juros Simples: FV = C × (1 + i×n) = 10.000 × (1 + 0,02×6) = 10.000 × 1,12 = R$11.200. A alternativa A (R$11.261,62) é o resultado em JUROS COMPOSTOS. Em simples o crescimento é linear, sempre menor que em compostos para o mesmo prazo." },
      { t: "Em juros SIMPLES, qual é a taxa mensal proporcional a 36% ao ano?", o: ["A) 2,597% ao mês (taxa equivalente)", "B) 3% ao mês (taxa proporcional)", "C) 2,942% ao mês", "D) 2,466% ao mês"], c: 1, f: "Em JUROS SIMPLES usa-se TAXA PROPORCIONAL (regra de três): 36% a.a. ÷ 12 meses = 3% a.m. Em JUROS COMPOSTOS a taxa equivalente seria diferente (cálculo exponencial). A distinção entre proporcional e equivalente é a pegadinha mais frequente de matemática financeira na prova CFP." },
      { t: "Um fundo de investimento rendeu 15% em 12 meses. Sabendo que a inflação do período foi de 10%, a taxa de juros REAL foi de:", o: ["A) 5,00% ao ano (subtração direta: 15% − 10%)", "B) 4,55% ao ano (Fórmula de Fischer)", "C) 4,76% ao ano", "D) 6,50% ao ano"], c: 1, f: "Taxa Real = [(1+0,15)/(1+0,10)] − 1 = [1,15/1,10] − 1 = 1,04545 − 1 = 4,55%. A alternativa A (5%) é o erro clássico da subtração direta — em juros compostos taxas NÃO se subtraem, se DIVIDEM. A fórmula de Fischer é obrigatória sempre que houver inflação envolvida." },
      { t: "Uma NTN-B remunera 4,55% ao ano + IPCA. Sabendo que o IPCA do período foi de 10%, qual foi a rentabilidade nominal total?", o: ["A) 14,55% ao ano (soma direta: 4,55% + 10%)", "B) 15% ao ano (multiplicação via Fischer)", "C) 13,50% ao ano", "D) 16,05% ao ano"], c: 1, f: "Taxa Nominal = [(1 + 0,0455) × (1 + 0,10) − 1] × 100 = [(1,0455 × 1,10) − 1] × 100 = 15%. O '+' da NTN-B NÃO é soma — é MULTIPLICAÇÃO de fatores. 4,55% + 10% = 14,55% está ERRADO. Esse erro aparece em quase toda prova CFP envolvendo títulos indexados." },
      { t: "Comparando os sistemas Price e SAC para o mesmo empréstimo, mesma taxa e mesmo prazo, qual afirmação está CORRETA?", o: ["A) O SAC tem taxa de juros menor que a Price", "B) A Price tem prestações iniciais maiores que o SAC", "C) O SAC paga menos juros totais, pois amortiza o saldo devedor mais rapidamente", "D) Trazidos a valor presente, o SAC é mais vantajoso que a Price para o devedor"], c: 2, f: "O SAC paga MENOS juros totais porque amortiza mais o saldo devedor no início (prestações iniciais maiores). A TAXA de juros é idêntica nos dois sistemas — não confunda. Trazendo os fluxos a valor presente, Price e SAC são EQUIVALENTES. O banco é indiferente entre os dois. O SAA é o mais caro em juros totais." },
      { t: "No Sistema de Amortização Americano (SAA), como se comportam os pagamentos durante a vigência do empréstimo?", o: ["A) Prestações iguais com juros e amortização (como na Price)", "B) Prestações decrescentes com amortização constante (como no SAC)", "C) Pagamentos periódicos apenas de juros; amortização do principal somente no vencimento final", "D) Pagamentos de amortização crescente e juros decrescentes"], c: 2, f: "No SAA (Americano ou Bullet), o devedor paga SOMENTE OS JUROS periodicamente. O principal é amortizado APENAS no final. É o mais caro em juros totais pois o saldo devedor nunca diminui durante o prazo. Equivalente ao CDB: você recebe tudo (principal + juros) no vencimento." },
      { t: "A taxa Spot e a taxa a Termo na ETTJ se diferenciam porque:", o: ["A) A taxa Spot é sempre menor que a taxa a Termo", "B) A taxa Spot inicia hoje; a taxa a Termo se refere a período futuro que não inicia hoje", "C) Taxas Spot são calculadas pelo BACEN; taxas a Termo são projetadas pelo mercado", "D) Taxas Spot são para títulos privados; taxas a Termo para títulos públicos"], c: 1, f: "Taxa SPOT = taxa que começa HOJE (ex: LTN de 1 ano negociada agora). Taxa a TERMO = taxa de período futuro que não inicia hoje (ex: juros esperados entre o 1º e o 2º ano). A ETTJ permite calcular a taxa implícita de qualquer período futuro e analisar expectativas do mercado." },
      { t: "Sabendo que a taxa spot do ano 1 é 2% e a taxa a termo do ano 2 é 3%, qual o retorno total de uma aplicação de R$ 100 por 2 anos?", o: ["A) R$ 105,00 (soma direta: 2% + 3%)", "B) R$ 105,06 (produto dos fatores: 1,02 × 1,03)", "C) R$ 104,55 (Fórmula de Fischer)", "D) R$ 105,09"], c: 1, f: "A ETTJ usa juros COMPOSTOS — os fatores se MULTIPLICAM: 100 × 1,02 × 1,03 = R$105,06 (retorno total de 5,06%). Somar as taxas diretamente (2%+3%=5%) está ERRADO. Na HP 12C: 100[ENTER]→2[%][+]→3[%][+] = 105,06. Esse resultado (105,06) também pode ser expresso como taxa spot de 2 anos = 2,4988% a.a." },
      { t: "Qual a taxa spot de 3 anos, sabendo que: spot 1A = 2%, taxa a termo do 2º ano = 3%, taxa a termo do 3º ano = 4%?", o: ["A) 3,00% a.a. (média aritmética das três taxas)", "B) 9,26% a.a.", "C) 2,997% a.a.", "D) 4,00% a.a."], c: 2, f: "HP 12C Passo 1: 100[ENTER]→2[%][+]→3[%][+]→4[%][+]→100[−] = 9,26% (retorno TOTAL de 3 anos). Passo 2: 9,26[i]→3[n]→1[R/S] = 2,997% a.a. Atenção: 9,26% é o retorno total do período, não a taxa anual. A média aritmética (3%) ignora os juros compostos. A taxa spot de 3 anos é sempre menor que as taxas a termo mais altas." },
      { t: "Uma LTN de 3 anos rende 9,26% no período. A taxa a termo do 2º ano é 3% e do 3º ano é 4%. Qual a taxa spot de 1 ano?", o: ["A) 2,26% a.a.", "B) 2,00% a.a.", "C) 1,73% a.a.", "D) 9,26% ÷ 3 = 3,09% a.a."], c: 1, f: "HP 12C Passo 1 (parte conhecida): 100[ENTER]→3[%][+]→4[%][+]→100[−] = 7,12% → fator 107,12. Passo 2: 109,26[FV]→107,12[CHS][PV]→1[n]→[i] = 2% a.a. Lógica: o retorno total (109,26) é o produto de TODOS os fatores. Dividindo pelo fator dos anos 2 e 3 (107,12), sobra o fator do ano 1, de onde extraímos a taxa." },
      { t: "Um título com valor nominal de R$ 5.000 é descontado 'por fora' 3 meses antes do vencimento a 3% ao mês. Qual o valor recebido pelo portador?", o: ["A) R$ 4.563,97 (desconto por dentro)", "B) R$ 4.576,23", "C) R$ 4.550,00 (desconto por fora)", "D) R$ 4.250,00"], c: 2, f: "Desconto por fora (bancário): D = VN × i × n = 5.000 × 0,03 × 3 = R$450. VP = VN − D = 5.000 − 450 = R$4.550. O desconto 'por fora' usa juros SIMPLES sobre o VALOR NOMINAL (futuro). A alternativa A (R$4.563,97) seria o desconto 'por dentro' usando juros compostos: VP = 5.000/(1,03)^3." },
      { t: "Para calcular uma série de pagamentos ANTECIPADOS na HP 12C, o analista deve:", o: ["A) Digitar [g][8] antes do cálculo e verificar se aparece END no visor", "B) Digitar [g][7] e verificar se aparece 'BEG' no visor antes de calcular", "C) Adicionar 1 ao número de períodos (n + 1)", "D) Usar [f][CLX] e depois inserir os dados normalmente"], c: 1, f: "[g][7] ativa o modo BEGIN (pagamentos antecipados, no INÍCIO do período) — aparece 'BEG' no visor. [g][8] ativa o modo END (postecipado, padrão). Após usar BEGIN, SEMPRE retornar para END com [g][8]. Não confundir: [f][CLX] apenas zera registros, não muda o modo." },
      { t: "Qual o capital necessário para garantir uma renda perpétua de R$ 4.000 por mês, com taxa de investimento de 0,5% ao mês?", o: ["A) R$ 200.000", "B) R$ 480.000", "C) R$ 800.000", "D) R$ 2.000.000"], c: 2, f: "Perpetuidade: PV = PMT / i = 4.000 / 0,005 = R$800.000. Renda perpétua = viver dos juros: o capital nunca é consumido. Com R$800.000 a 0,5% a.m. os juros serão exatamente R$4.000/mês. Importante: na prova podem dar a taxa em ano e o PMT em mês — converta para a mesma base antes." },
      { t: "Numa série de pagamentos com PMT mensal, a taxa anual fornecida deve ser:", o: ["A) Usada diretamente sem conversão, pois a HP 12C converte automaticamente", "B) Dividida por 12 (proporcional) se o regime for juros simples, ou convertida pela equivalência se for juros compostos", "C) Sempre dividida por 12, independente do regime de capitalização", "D) Multiplicada por 12 para chegar à taxa mensal equivalente"], c: 1, f: "Em juros SIMPLES (ex: desconto bancário): divide por 12 — taxa proporcional. Em juros COMPOSTOS (ex: financiamentos na HP 12C): usa fórmula de equivalência [(1+i_anual)^(1/12) − 1]. Atenção: na HP 12C, quando há PMT, a taxa e o prazo SEMPRE devem estar na base do PMT (mensal = mensal)." },
      { t: "No sistema SAC, calcular o saldo devedor após 3 pagamentos de um empréstimo de R$ 12.000 em 6 parcelas é:", o: ["A) R$ 7.000 (depende dos juros pagos)", "B) R$ 6.000 (3 amortizações de R$ 2.000 cada)", "C) R$ 8.000", "D) Impossível sem saber a taxa de juros"], c: 1, f: "No SAC, Amortização = D/n = 12.000/6 = R$2.000 por período. Saldo devedor após 3 pagamentos = 12.000 − (3 × 2.000) = R$6.000. O GRANDE diferencial do SAC: o saldo devedor se calcula SEM precisar da taxa de juros — basta multiplicar a amortização pelo número de períodos pagos. Os juros afetam o valor das prestações, não o saldo." }
    ],
    al: [
      { t: "danger", tag: "Proporcional ≠ Equivalente — nunca confunda!", txt: "Em <strong>Juros Simples</strong>: TAXA PROPORCIONAL — divide por tempo: 30% a.a. = 2,5% a.m. Em <strong>Juros Compostos</strong>: TAXA EQUIVALENTE — fórmula exponencial: 12% a.a. = 0,9489% a.m. (não 1%!). Usar taxa proporcional em questão de juros compostos zera a questão. Identifique SEMPRE o regime antes de qualquer cálculo." },
      { t: "danger", tag: "Taxa Nominal NÃO é soma da Real + Inflação", txt: "A NTN-B remunera 'X% + IPCA' — esse '+' é <strong>MULTIPLICAÇÃO via Fischer</strong>. Fórmula: Taxa Nominal = [(1+Real) × (1+Inflação) − 1]. Exemplo: 4,55% real + IPCA 10% = <strong>15% nominal</strong> (não 14,55%). Subtração direta também está errada para calcular a taxa real — use sempre a divisão de fatores." },
      { t: "danger", tag: "SAC paga menos juros — não é taxa menor!", txt: "O SAC paga menos juros <strong>TOTAIS</strong> porque amortiza o saldo devedor mais rápido (prestações iniciais maiores). A <strong>taxa de juros é idêntica</strong> na SAC e na Price para o mesmo contrato. Trazendo os fluxos a valor presente, as duas tabelas são <strong>equivalentes</strong>. Nunca diga que o SAC tem taxa menor." },
      { t: "warn", tag: "BEGIN e END na HP 12C — SEMPRE volte para END!", txt: "Após calcular série antecipada (<strong>[g][7] = BEGIN</strong>), SEMPRE retorne para END com <strong>[g][8]</strong>. Se esquecer, todos os cálculos seguintes sairão errados. Na prova CFP, séries antecipadas são raras — se o enunciado não disser 'antecipado' ou 'no início', assuma postecipado (END). 'BEG' no visor = BEGIN ativo." },
      { t: "tip", tag: "Fluxo de caixa sempre — e zere a HP antes!", txt: "Antes de qualquer cálculo: (1) <strong>[f][CLX]</strong> para zerar a HP; (2) Monte o fluxo com sinais corretos: <strong>entrada de caixa = positivo; saída de caixa = negativo (CHS)</strong>; (3) Confirme que i, n e PMT estão na MESMA BASE. Para acumulação: PV e PMT têm o mesmo sinal; FV sinal contrário. Para financiamento: PV positivo (entrou na conta), PMT negativo (pagamento)." },
      { t: "info", tag: "SAA = Bullet = CDB = amortização no vencimento", txt: "O Sistema de Amortização Americano (SAA) é o modelo de um CDB ou bond corporativo: você empresta dinheiro (PV saída), o emissor paga juros periodicamente (em alguns casos capitalizados) e devolve o principal no vencimento. Chamado de 'Bullet' ou 'Ballon' — é o mais caro em juros totais pois o saldo devedor permanece intacto até o final." },
      { t: "danger", tag: "ETTJ — Spot não é média das taxas!", txt: "A taxa spot de 2 anos NÃO é a média de (spot 1A + termo 2A). É a <strong>raiz quadrada do produto dos fatores</strong>: √(1,02 × 1,03) − 1 = 2,4988% a.a. Somar e dividir por 2 está errado em juros compostos. Nos cálculos da prova, sempre use a HP 12C com os passos de acumulação e anualização." },
      { t: "tip", tag: "HP 12C ETTJ — 2 passos fixos", txt: "<strong>Para achar spot longa:</strong> acumule os retornos com [%][+], subtraia 100, obtenha % total → anualiza com [i][n][R/S]. <strong>Para achar taxa incógnita:</strong> calcule o 'pedaço que você tem' com o mesmo processo, use como PV (CHS); coloque o total como FV; n = períodos incógnitos; [i] = taxa." }
    ],
    conexoes: `<div class="content-body">
<h3>Como Finanças Conecta-se aos Outros Módulos</h3>
<p>A matemática financeira é a <strong>base de cálculo de toda a certificação CFP</strong>. Os conceitos deste módulo aparecem diretamente em quase todos os outros:</p>
<ul>
<li><strong>NTN-B (Módulos de Renda Fixa):</strong> rendimento = Taxa Real × (1 + IPCA) — Fórmula de Fischer aplicada</li>
<li><strong>SELIC-Over (Módulo 2 — Economia):</strong> base 252 dias úteis, capitalização composta</li>
<li><strong>Cupom Cambial (Módulo 2):</strong> converte juros compostos/252 DU para simples/360 DC</li>
<li><strong>Financiamento imobiliário SFH (Caixa):</strong> PRICE ou SAC com TR — os sistemas deste módulo</li>
<li><strong>Valuation de ações (Módulo de Renda Variável):</strong> fluxo de caixa descontado usa PV/FV em compostos</li>
</ul>
<h3>Sinônimos e Equivalências</h3>
<table class="data-table">
<thead><tr><th>Termo técnico</th><th>Sinônimos / Como entender na prática</th></tr></thead>
<tbody>
<tr><td><strong>PV</strong></td><td>Valor Presente, Capital (C), Principal — o que você tem hoje</td></tr>
<tr><td><strong>FV</strong></td><td>Valor Futuro, Montante (M) — o que você terá no vencimento</td></tr>
<tr><td><strong>PMT</strong></td><td>Pagamento, Parcela, Prestação, Renda periódica, Anuidade</td></tr>
<tr><td><strong>Bullet / Ballon</strong></td><td>SAA — pagamento único no vencimento (CDB, bonds corporativos)</td></tr>
<tr><td><strong>ETTJ</strong></td><td>Curva de juros, yield curve (inglês) — relação prazo vs retorno</td></tr>
<tr><td><strong>Taxa proporcional</strong></td><td>Só em juros simples — divide direto pelo tempo</td></tr>
<tr><td><strong>Taxa equivalente</strong></td><td>Só em juros compostos — conversão exponencial</td></tr>
</tbody>
</table>
<h3>Exemplos do Dia a Dia</h3>
<ul>
<li><strong>Financiamento de carro (Price):</strong> 48 parcelas iguais de R$1.200 — PMT constante, amortização cresce a cada parcela</li>
<li><strong>Financiamento Caixa pelo SFH (SAC):</strong> 1ª parcela R$3.500, última R$1.200 — amortização constante, parcelas decrescem</li>
<li><strong>CDB de 2 anos sem cupom:</strong> aplica hoje, recebe principal + juros no vencimento — SAA (Bullet)</li>
<li><strong>Tesouro IPCA+ (NTN-B):</strong> rende taxa real MAIS IPCA — via Fischer, não soma</li>
<li><strong>Nota promissória descontada no banco:</strong> desconto por fora (comercial), juros simples sobre valor nominal</li>
</ul>
<h3>Analogias para Fixar</h3>
<p><strong>Juros simples = escada</strong>: cada degrau tem sempre o mesmo tamanho (juros sempre sobre o mesmo capital). <strong>Juros compostos = bola de neve</strong>: a bola cresce e fica mais pesada a cada volta — juros sobre capital + juros anteriores.</p>
<p><strong>SAC vs Price = duas formas de pagar o apartamento</strong>: SAC começa caro e vai ficando mais barato (amortiza mais no início, paga menos juros no total). Price tem parcela estável mas paga mais juros. O banco é indiferente: a valor presente são equivalentes. A escolha depende do fluxo de caixa do cliente.</p>
</div>`
  },

  4: {
    titulo: "Planejamento de Aposentadoria I",
    exp: `<div class="content-body">
<h2>3 Fontes de Renda na Aposentadoria</h2>
<table class="data-table">
<thead><tr><th>Fonte</th><th>Gestão</th><th>Obrigatoriedade</th><th>Característica</th></tr></thead>
<tbody>
<tr><td><strong>RGPS</strong></td><td>INSS</td><td>Compulsória (privados)</td><td>Repartição simples, teto de benefício</td></tr>
<tr><td><strong>RPPS</strong></td><td>Ente público</td><td>Compulsória (servidores efetivos)</td><td>Regime próprio, EC 103/2019</td></tr>
<tr><td><strong>Prev. Complementar</strong></td><td>EFPC ou EAPC</td><td>Facultativa</td><td>Fecha o gap entre benefício público e padrão de vida</td></tr>
</tbody>
</table>

<h2>Taxa Real de Juros</h2>
<p>Toda projeção de aposentadoria deve ser feita em termos <strong>reais</strong> para preservar o poder de compra. Taxa real não é a diferença — é uma divisão:</p>
<table class="data-table">
<thead><tr><th>Forma</th><th>Fórmula</th><th>Exemplo: nominal 6%, inflação 4%</th></tr></thead>
<tbody>
<tr><td><strong>Correta (Fischer)</strong></td><td>(1 + nominal) ÷ (1 + inflação) − 1</td><td>(1,06 ÷ 1,04) − 1 = <strong>1,9231%</strong></td></tr>
<tr><td><strong>Errada</strong></td><td>nominal − inflação</td><td>6% − 4% = 2% ❌</td></tr>
</tbody>
</table>
<h3>HP 12C — Taxa Real</h3>
<p>Usando base 100: <strong>FV = 110 → PV = 104 [CHS] → n = 1 → i → 5,7692%</strong> (nominal 10%, inflação 4%)</p>
<p>Lógica: o FV de R$100 à taxa nominal, o PV é R$100 corrigido pela inflação. O <em>i</em> resultante é a taxa real.</p>

<h2>Capital Necessário — As 2 Etapas</h2>
<p>Calcular poupança mensal exige duas etapas em sequência — nunca num só cálculo:</p>
<table class="data-table">
<thead><tr><th>Etapa</th><th>Fase</th><th>O que calcular</th><th>HP 12C</th></tr></thead>
<tbody>
<tr><td><strong>1ª</strong></td><td>Aposentadoria (futuro)</td><td>PV do fluxo de renda desejado</td><td>n, i, PMT → <strong>PV</strong></td></tr>
<tr><td><strong>2ª</strong></td><td>Acumulação (presente)</td><td>PMT para atingir o capital da etapa 1</td><td>n, i, FV (= PV da etapa 1) → <strong>PMT</strong></td></tr>
</tbody>
</table>
<p><strong>Regra de ouro:</strong> o PV calculado na etapa 1 (capital na aposentadoria) vira o FV da etapa 2. Nunca misture as duas etapas no mesmo cálculo.</p>

<h2>3 Estratégias de Renda</h2>
<table class="data-table">
<thead><tr><th>Estratégia</th><th>Como funciona</th><th>FV na HP 12C</th><th>Capital</th></tr></thead>
<tbody>
<tr><td><strong>Esgotamento</strong></td><td>Consome todo o capital — termina em zero</td><td>FV = 0</td><td>Menor</td></tr>
<tr><td><strong>Herança</strong></td><td>Deixa um legado definido ao fim</td><td>FV = valor do legado</td><td>Intermediário</td></tr>
<tr><td><strong>Vitalícia</strong></td><td>Capital nunca se esgota — perpetuidade</td><td>PV = PMT ÷ i (prazo infinito)</td><td>Maior</td></tr>
</tbody>
</table>

<h3>Exemplo Rafael — i = 1% a.m., renda = R$10.000/mês, acumulação = 30 anos</h3>
<table class="data-table">
<thead><tr><th>Estratégia</th><th>Etapa 1: capital na aposentadoria</th><th>Etapa 2: poupança mensal</th></tr></thead>
<tbody>
<tr><td><strong>Esgotamento</strong> (20 anos)</td><td>n=240, i=1%, PMT=10.000, FV=0 → PV = R$908.194</td><td>n=360, i=1%, FV=908.194, PV=0 → PMT = <strong>R$259,86</strong></td></tr>
<tr><td><strong>Herança</strong> (R$500k legado)</td><td>PV = R$908.194 + R$500.000÷1,01²⁴⁰ = R$954.096</td><td>n=360, i=1%, FV=954.096 → PMT = <strong>R$273,00</strong></td></tr>
<tr><td><strong>Vitalícia</strong></td><td>PV = R$10.000 ÷ 0,01 = <strong>R$1.000.000</strong></td><td>n=360, i=1%, FV=1.000.000 → PMT = <strong>R$286,13</strong></td></tr>
</tbody>
</table>

<h2>Previdência Social</h2>
<h3>RGPS — Nova Previdência (EC 103/2019)</h3>
<p>Abrange trabalhadores da iniciativa privada e autônomos. Administrado pelo <strong>INSS</strong>. Financiamento por repartição simples.</p>
<table class="data-table">
<thead><tr><th>Requisito</th><th>Mulheres</th><th>Homens</th></tr></thead>
<tbody>
<tr><td><strong>Idade mínima</strong></td><td>62 anos</td><td>65 anos</td></tr>
<tr><td><strong>Contribuição mínima</strong></td><td>15 anos</td><td>20 anos</td></tr>
<tr><td><strong>Benefício base</strong></td><td colspan="2">60% do salário de benefício</td></tr>
<tr><td><strong>Acréscimo por ano extra</strong></td><td colspan="2">+2% por ano acima do mínimo</td></tr>
<tr><td><strong>Para 100%</strong></td><td>35 anos (60% + 2%×20)</td><td>40 anos (60% + 2%×20)</td></tr>
</tbody>
</table>
<h4>Aposentadoria Especial</h4>
<p>Para atividades expostas a agentes nocivos: <strong>15, 20 ou 25 anos</strong> de contribuição conforme o grau de exposição — sem exigência de idade mínima.</p>
<h4>Outros Benefícios RGPS</h4>
<table class="data-table">
<thead><tr><th>Benefício</th><th>Requisito-chave</th></tr></thead>
<tbody>
<tr><td><strong>Pensão por morte</strong></td><td>18 contribuições (acidente: sem carência)</td></tr>
<tr><td><strong>Auxílio por incapacidade temporária</strong></td><td>15 dias afastado; 12 meses de carência (acidente: sem carência)</td></tr>
<tr><td><strong>Salário-maternidade</strong></td><td>10 meses de carência (empregada: sem carência)</td></tr>
<tr><td><strong>Salário-família</strong></td><td>Baixa renda; filhos até 14 anos</td></tr>
</tbody>
</table>

<h3>RPPS — Regime Próprio de Previdência Social</h3>
<p>Para <strong>servidores públicos efetivos</strong>. Regido pela EC 103/2019: <strong>62F+25 / 65H+25 anos de serviço público</strong>, com 10 anos na carreira e 5 no cargo. Servidores ingressos após 2003 têm teto igual ao RGPS (FUNPRESP).</p>

<h3>BPC-LOAS — Benefício de Prestação Continuada</h3>
<p>Benefício <strong>assistencial</strong> — não é previdenciário, não exige contribuição. 1 salário mínimo para pessoa com 65+ anos OU deficiente, com renda familiar per capita ≤ ¼ do salário mínimo. Financiado pelo FNAS (não pelo RGPS); o INSS apenas administra o pagamento.</p>

<h2>Previdência Complementar</h2>
<h3>EFPC vs EAPC</h3>
<table class="data-table">
<thead><tr><th></th><th>EFPC (fechada)</th><th>EAPC (aberta)</th></tr></thead>
<tbody>
<tr><td><strong>Acesso</strong></td><td>Só funcionários do patrocinador</td><td>Qualquer pessoa</td></tr>
<tr><td><strong>Regulação</strong></td><td>CNPC / PREVIC</td><td>CNSP / SUSEP</td></tr>
<tr><td><strong>Fins lucrativos</strong></td><td>Não</td><td>Sim</td></tr>
<tr><td><strong>Produtos típicos</strong></td><td>BD, CD e CV</td><td>PGBL e VGBL (CV)</td></tr>
</tbody>
</table>

<h3>BD / CD / CV</h3>
<table class="data-table">
<thead><tr><th></th><th>BD</th><th>CD</th><th>CV</th></tr></thead>
<tbody>
<tr><td><strong>O que é fixo</strong></td><td>Benefício futuro</td><td>Contribuição mensal</td><td>Contribuição (acumulação) / benefício (renda)</td></tr>
<tr><td><strong>Risco</strong></td><td>Patrocinador</td><td>Participante</td><td>Participante / seguradora</td></tr>
<tr><td><strong>Tributação</strong></td><td><strong>Sempre progressiva</strong></td><td>Progressiva ou regressiva¹</td><td>Progressiva ou regressiva¹</td></tr>
</tbody>
</table>
<p>¹ Exceto renda vitalícia: sempre progressiva, independente do plano.</p>

<h3>PGBL vs VGBL</h3>
<table class="data-table">
<thead><tr><th></th><th>PGBL</th><th>VGBL</th></tr></thead>
<tbody>
<tr><td><strong>Dedução IR</strong></td><td>Sim — até 12% da renda bruta tributável</td><td>Não</td></tr>
<tr><td><strong>IR no resgate</strong></td><td>Sobre o valor total (aporte + rendimento)</td><td>Apenas sobre o rendimento</td></tr>
<tr><td><strong>Indicado para</strong></td><td>Declara IRPF completo</td><td>Isento, simplificado, ou acima de 12%</td></tr>
<tr><td><strong>Portabilidade cruzada</strong></td><td colspan="2">PGBL→VGBL ou VGBL→PGBL: <strong>proibida</strong></td></tr>
</tbody>
</table>

<h3>Características Técnicas</h3>
<ul>
<li><strong>Carregamento:</strong> incide sobre a <em>contribuição</em> (não sobre o saldo). Pode ser na entrada, saída ou ambos.</li>
<li><strong>TAF (Taxa de Administração Financeira):</strong> incide sobre o saldo do fundo; remunera a gestão dos ativos.</li>
<li><strong>Portabilidade:</strong> transferência sem incidência de IR, somente entre planos do mesmo tipo.</li>
<li><strong>Tábua biométrica:</strong> tabela de mortalidade para precificar rendas vitalícias. Tabela mais conservadora (maior expectativa de vida) = prêmio maior = cobertura mais adequada para o beneficiário.</li>
</ul>
</div>`,
    mapa: {
      root: "Planejamento de Aposentadoria",
      branches: [
        { label: "3 Fontes", color: "#d4a843", icon: "🏛️", children: [
          { label: "RGPS", detail: "INSS · privados · repartição simples" },
          { label: "RPPS", detail: "Servidores públicos efetivos" },
          { label: "Complementar", detail: "EFPC ou EAPC · facultativa" }
        ]},
        { label: "Taxa Real", color: "#5b8fee", icon: "📐", children: [
          { label: "Fórmula", detail: "(1+nom)÷(1+inf)−1 · nunca subtrair" },
          { label: "HP 12C", detail: "FV=110, PV=104[CHS], n=1 → i" },
          { label: "Projeção real", detail: "Preserva poder de compra" }
        ]},
        { label: "2 Etapas", color: "#4dbdaf", icon: "📊", children: [
          { label: "Etapa 1", detail: "PV da renda na aposentadoria" },
          { label: "Etapa 2", detail: "PV etapa 1 = FV da acumulação" }
        ]},
        { label: "3 Estratégias", color: "#e74c3c", icon: "🎯", children: [
          { label: "Esgotamento", detail: "FV=0 · menor capital · R$259,86" },
          { label: "Herança", detail: "FV=legado · intermediário · R$273,00" },
          { label: "Vitalícia", detail: "PMT÷i · maior capital · R$286,13" }
        ]},
        { label: "Prev. Social", color: "#9b59b6", icon: "🏥", children: [
          { label: "EC 103/2019", detail: "62F+15 / 65H+20 · 60%+2%/ano" },
          { label: "Aposentadoria Especial", detail: "15, 20 ou 25 anos de exposição" },
          { label: "BPC-LOAS", detail: "65+ · ≤¼SM · assistencial (≠RGPS)" }
        ]},
        { label: "Prev. Complementar", color: "#2ecc71", icon: "💼", children: [
          { label: "BD", detail: "Benefício fixo · sempre progressivo" },
          { label: "CD", detail: "Contribuição fixa · risco participante" },
          { label: "CV/PGBL/VGBL", detail: "Híbrido · CNSP/SUSEP · EAPC" }
        ]}
      ]
    },
    tags: ["aposentadoria", "taxa real", "taxa nominal", "Fischer", "HP 12C", "2 etapas", "esgotamento", "herança", "vitalícia", "perpetuidade", "RGPS", "RPPS", "INSS", "EC 103/2019", "Nova Previdência", "BPC-LOAS", "EFPC", "EAPC", "PREVIC", "SUSEP", "BD", "CD", "CV", "PGBL", "VGBL", "portabilidade", "carregamento", "TAF", "tábua biométrica", "previdência complementar", "repartição simples", "aposentadoria especial"],
    fc: [
      { q: "Qual a fórmula correta da taxa real de juros?", a: "Taxa Real = (1 + nominal) ÷ (1 + inflação) − 1. Na HP 12C: FV=110, PV=104[CHS], n=1 → i=5,7692%. Nunca subtraia nominal − inflação (superestima a taxa real)." },
      { q: "Como funciona o cálculo em 2 etapas para aposentadoria?", a: "Etapa 1 (aposentadoria): calcule o PV da renda desejada (n=prazo, i, PMT → PV). Etapa 2 (acumulação): esse PV vira o FV → calcule o PMT para atingi-lo. Nunca misture as duas etapas." },
      { q: "Qual a diferença entre as 3 estratégias de renda?", a: "Esgotamento (FV=0): capital termina em zero — menor contribuição. Herança (FV=legado): deixa valor ao final. Vitalícia (PV=PMT÷i): perpetuidade, nunca acaba — maior contribuição." },
      { q: "No exemplo do Rafael (renda R$10.000/mês, i=1%a.m., aposentar daqui 30 anos): qual o PMT para esgotamento (20 anos de renda)?", a: "Etapa 1: n=240, i=1%, PMT=10.000, FV=0 → PV=R$908.194. Etapa 2: n=360, i=1%, FV=908.194, PV=0 → PMT = R$259,86/mês." },
      { q: "Qual o PMT para a estratégia vitalícia no exemplo do Rafael (mesmas premissas)?", a: "Etapa 1 (perpetuidade): PV = PMT÷i = 10.000÷0,01 = R$1.000.000. Etapa 2: n=360, i=1%, FV=1.000.000 → PMT = R$286,13/mês." },
      { q: "Nova Previdência (EC 103/2019): quais os requisitos para aposentadoria e benefício base?", a: "Mulheres: 62 anos + 15 anos de contribuição. Homens: 65 anos + 20 anos de contribuição. Benefício base = 60% + 2% por cada ano acima do mínimo. Para 100%: 35 anos (F) ou 40 anos (H)." },
      { q: "BD, CD e CV — qual SEMPRE usa tributação progressiva?", a: "BD (Benefício Definido) sempre usa tributação progressiva — sem opção. CD e CV podem usar tabela regressiva, exceto renda vitalícia, que sempre é progressiva para todos os planos." },
      { q: "Qual a diferença fiscal entre PGBL e VGBL?", a: "PGBL: deduções no IR até 12% da renda bruta, mas IR no resgate incide sobre o valor total. VGBL: sem dedução, mas IR no resgate incide apenas sobre o rendimento. PGBL = paga IR duas vezes se sacar cedo; VGBL = paga só sobre o lucro." },
      { q: "PGBL pode ser convertido para VGBL por portabilidade?", a: "NÃO. Portabilidade só é permitida entre planos do mesmo tipo: PGBL→PGBL e VGBL→VGBL. Cruzar os tipos mudaria o tratamento fiscal das contribuições já deduzidas — vedado." },
      { q: "O que é BPC-LOAS e por que não é previdência?", a: "Benefício assistencial de 1 salário mínimo para 65+ anos ou deficiente com renda familiar ≤ ¼ do salário mínimo per capita. Não exige contribuição ao INSS — financiado pelo FNAS (assistência social), não pelo RGPS." },
      { q: "Qual a diferença entre EFPC e EAPC?", a: "EFPC: fundo de pensão fechado, acesso restrito ao patrocinador, sem fins lucrativos, CNPC/PREVIC. EAPC: entidade aberta (seguradoras/bancos), qualquer pessoa pode contratar, com fins lucrativos, CNSP/SUSEP." },
      { q: "O que é carregamento e sobre o que incide?", a: "Taxa administrativa incidente sobre a contribuição (não sobre o saldo). Pode ser na entrada, saída ou ambos. Diferente da TAF, que incide sobre o saldo acumulado." },
      { q: "O que significa uma tábua biométrica mais conservadora para o beneficiário?", a: "Projeta maior expectativa de vida → seguradora exige mais reservas → prêmio/contribuição mais alta, mas a cobertura é mais adequada ao real risco de longevidade. Para o beneficiário: mais caro, porém mais proteção." },
      { q: "O que é aposentadoria especial no RGPS?", a: "Aposentadoria para exposição a agentes nocivos (insalubres/perigosos): 15, 20 ou 25 anos de contribuição conforme o grau de exposição — sem exigência de idade mínima." },
      { q: "Como calcular o capital necessário para renda vitalícia (perpetuidade)?", a: "PV = PMT ÷ i. Exemplo: R$10.000/mês com i=1%a.m. → PV = 10.000÷0,01 = R$1.000.000. Este valor vira o FV da fase de acumulação (etapa 2). Não existe n — o prazo é infinito." }
    ],
    q: [
      { t: "A taxa nominal é 12% a.a. e a inflação é 6% a.a. Qual a taxa real de juros?", o: ["A) 6,00% a.a.", "B) 5,66% a.a.", "C) 5,00% a.a.", "D) 7,20% a.a."], c: 1, f: "Taxa real = (1,12 ÷ 1,06) − 1 = 1,0566 − 1 = 5,66%. A subtração simples (12%−6%=6%) superestima a taxa real — é o erro mais frequente neste tema." },
      { t: "Rafael precisa de R$10.000/mês por 20 anos (240 meses) na aposentadoria. Com taxa de 1% a.m. (estratégia esgotamento), qual o capital necessário?", o: ["A) R$ 1.000.000,00", "B) R$ 908.194,15", "C) R$ 954.096,00", "D) R$ 2.400.000,00"], c: 1, f: "Etapa 1: n=240, i=1%, PMT=10.000, FV=0 → PV = R$908.194,15. R$1.000.000 seria a perpetuidade (vitalícia). R$2.400.000 seria apenas 10.000×240 sem desconto algum." },
      { t: "Usando o capital de R$908.194 (esgotamento) e 30 anos de acumulação (i=1%a.m.), qual o PMT mensal de Rafael?", o: ["A) R$ 259,86", "B) R$ 286,13", "C) R$ 273,00", "D) R$ 908,19"], c: 0, f: "Etapa 2: n=360, i=1%, FV=908.194, PV=0 → PMT = R$259,86. A opção B (R$286,13) seria a contribuição para vitalícia (FV=R$1.000.000). A opção C (R$273,00) seria para herança de R$500k." },
      { t: "Se Rafael optasse pela estratégia vitalícia (renda infinita de R$10.000/mês, i=1%a.m.), qual seria sua contribuição mensal em 30 anos?", o: ["A) R$ 259,86", "B) R$ 273,00", "C) R$ 286,13", "D) R$ 1.000,00"], c: 2, f: "Vitalícia: PV = PMT÷i = 10.000÷0,01 = R$1.000.000. Etapa 2: n=360, i=1%, FV=1.000.000 → PMT = R$286,13. A diferença de apenas R$26,27/mês por uma renda vitalícia é a eficiência dos juros compostos ao longo de 30 anos." },
      { t: "Um homem, pela Nova Previdência (EC 103/2019), recebe 100% do salário de benefício quando atinge:", o: ["A) 65 anos e 20 anos de contribuição", "B) 65 anos e 35 anos de contribuição", "C) 65 anos e 40 anos de contribuição", "D) 60 anos e 35 anos de contribuição"], c: 2, f: "Homem: benefício base = 60% com 20 anos mínimos. Cada ano extra acrescenta 2%. Para 100%: precisa de 20 mais 20 anos extras = 40 anos totais (60%+2%×20=100%). Com 65 anos + 40 anos de contribuição." },
      { t: "Um participante de plano BD (EFPC) pode optar pela tabela regressiva de IR no recebimento do benefício?", o: ["A) Sim, se o plano existir há mais de 10 anos", "B) Sim, se o participante contribuir há mais de 10 anos", "C) Não — planos BD sempre usam a tabela progressiva do IRPF", "D) Sim, apenas para renda por prazo certo"], c: 2, f: "BD (Benefício Definido) de EFPC usa SEMPRE tributação progressiva — sem exceção. A tabela regressiva é exclusiva de planos CD e CV. Independente do tempo de contribuição ou tipo de renda escolhida, o BD é sempre progressivo." },
      { t: "Um cliente tem PGBL e quer fazer portabilidade para um VGBL de outra seguradora. Esta operação é:", o: ["A) Permitida, pois ambos são planos abertos (EAPC)", "B) Permitida se o cliente tiver mais de 5 anos no plano", "C) Vedada — portabilidade entre PGBL e VGBL é proibida", "D) Permitida apenas se a destinatária for EFPC"], c: 2, f: "Portabilidade entre PGBL e VGBL é VEDADA. Mudaria o tratamento fiscal das contribuições já deduzidas — quem deduziu no PGBL não pode converter para VGBL (que não tributa contribuições). Portabilidade só entre iguais: PGBL→PGBL e VGBL→VGBL." },
      { t: "O BPC-LOAS é classificado como:", o: ["A) Benefício previdenciário do RGPS, pago pelo INSS", "B) Benefício assistencial, sem exigência de contribuição, financiado pelo FNAS", "C) Benefício do RPPS para servidores de baixa renda", "D) Previdência complementar para trabalhadores informais"], c: 1, f: "BPC-LOAS é ASSISTENCIAL — financiado pelo FNAS (Fundo Nacional de Assistência Social), não pelo RGPS. Não exige contribuição prévia ao INSS. O INSS apenas administra o pagamento. Confundir BPC com benefício previdenciário é armadilha recorrente." }
    ],
    al: [
      { t: "danger", tag: "Taxa real ≠ nominal − inflação", txt: "Taxa real = (1+nom)÷(1+inf)−1, nunca subtração. Para nominal=6%, inflação=4%: real=<strong>1,9231%</strong> (não 2%). Em horizontes de 30 anos a diferença acumulada é brutal." },
      { t: "danger", tag: "BD: sempre tributação progressiva", txt: "Planos BD (EFPC) usam <strong>sempre</strong> a tabela progressiva do IRPF — sem exceção, sem opção. A confusão surge porque CD e CV podem escolher. Viu BD na questão → tributação progressiva, ponto final." },
      { t: "danger", tag: "PGBL → VGBL: portabilidade proibida", txt: "Portabilidade é permitida somente entre planos do <strong>mesmo tipo</strong>: PGBL↔PGBL e VGBL↔VGBL. Cruzar tipos alteraria o tratamento fiscal das contribuições já deduzidas." },
      { t: "danger", tag: "Renda vitalícia = sempre progressiva", txt: "Mesmo em planos CD e CV (que normalmente podem usar regressiva), a <strong>renda vitalícia</strong> é sempre tributada pela tabela progressiva. Somente renda por prazo certo e pagamento único admitem a regressiva." },
      { t: "danger", tag: "Carregamento: base é a contribuição", txt: "Carregamento incide sobre o valor <strong>aportado</strong> (contribuição), não sobre o saldo acumulado. Quem cobra sobre o saldo é a TAF (Taxa de Administração Financeira)." },
      { t: "warn", tag: "BPC-LOAS não é previdência", txt: "BPC-LOAS é benefício <strong>assistencial</strong> — sem contribuição, financiado pelo FNAS. O INSS apenas paga; o fundo é separado do RGPS. Para a prova: BPC-LOAS ≠ benefício previdenciário ≠ RGPS." },
      { t: "warn", tag: "Tábua conservadora = mais proteção (não mais barata)", txt: "Tabela de mortalidade mais conservadora (vida mais longa) → seguradora precisa de mais reserva → <strong>prêmio maior para o cliente</strong>. É mais cara, mas corretamente precificada. Tábua antiga (menos conservadora) = risco atuarial e menos proteção." },
      { t: "tip", tag: "Mnemônico: 2 etapas da aposentadoria", txt: "<strong>Etapa 1 = olho no futuro</strong>: quanto capital vou precisar lá na frente? (PV da renda). <strong>Etapa 2 = olho no presente</strong>: esse PV vira meu FV — quanto poupo por mês para chegar lá? Sempre separadas, nunca misturadas." }
    ],
    conexoes: `<div class="content-body">
<h3>Previdência Social × Complementar × Planejamento</h3>
<p>O planejamento começa identificando o <em>gap</em>: diferença entre a renda futura do RGPS/RPPS (limitada pelo teto) e o padrão de vida desejado. A previdência complementar fecha esse gap. O cálculo HP 12C em taxa real mostra exatamente o PMT para atingir o capital.</p>
<h3>Taxa Real ↔ Juros Compostos (Módulo 3)</h3>
<p>A fórmula de Fischer é a mesma de juros compostos aplicada a dois indexadores simultâneos. A taxa real não é diferença, é proporção — o mesmo conceito de "quanto a mais rende um indexador sobre outro" visto na curva de juros.</p>
<h3>EFPC × Regulação do SFN (Módulo 1)</h3>
<p>EFPC: regulada pelo <strong>CNPC/PREVIC</strong>. EAPC: regulada pelo <strong>CNSP/SUSEP</strong>. Ambas já apareceram no módulo de SFN — o planejamento de aposentadoria é o contexto prático onde essas entidades ficam no centro do portfólio do cliente.</p>
<h3>Tábua Biométrica × Risco de Longevidade</h3>
<p>A tábua biométrica é uma matriz de probabilidade de sobrevivência por idade. Seguradoras que usam tábuas antigas subestimam a longevidade e ficam subcapitalizadas para honrar rendas vitalícias — risco sistêmico que a SUSEP mitiga exigindo tábuas atualizadas.</p>
</div>`
  },

  5: {
    titulo: "Planejamento de Aposentadoria II",
    exp: `<div class="content-body">
<h2>PGBL e VGBL — Produtos de Previdência Privada Aberta</h2>
<p>Os planos de previdência privada aberta são regulados pela <strong>SUSEP</strong> e distribuídos pelas <strong>EAPCs</strong> (Entidades Abertas de Previdência Complementar). Os dois principais produtos são o PGBL e o VGBL, que diferem fundamentalmente no tratamento tributário.</p>
<h3>PGBL — Plano Gerador de Benefício Livre</h3>
<ul>
<li>Permite <strong>dedução de até 12% da renda bruta tributável anual</strong> na declaração de IR (modelo completo)</li>
<li>Na fase de resgate, o IR incide sobre o <strong>valor total</strong> (capital aportado + rendimentos)</li>
<li>Indicado para: declaração completa e quem ainda não atingiu o teto de deduções</li>
</ul>
<h3>VGBL — Vida Gerador de Benefício Livre</h3>
<ul>
<li><strong>Não permite dedução</strong> na declaração de IR</li>
<li>Na fase de resgate, o IR incide <strong>apenas sobre os rendimentos</strong></li>
<li>Indicado para: declaração simplificada, isentos de IR ou quem já usou o limite de 12%</li>
<li>Classificado juridicamente como <em>seguro de pessoa</em> (não plano de previdência)</li>
</ul>
<table class="data-table">
<thead><tr><th>Característica</th><th>PGBL</th><th>VGBL</th></tr></thead>
<tbody>
<tr><td>Dedução IR (acumulação)</td><td>Até 12% renda bruta</td><td>Não permite</td></tr>
<tr><td>Base de tributação no resgate</td><td>Total (capital + rendimentos)</td><td>Apenas rendimentos</td></tr>
<tr><td>Declaração recomendada</td><td>Modelo completo</td><td>Simplificada ou isento</td></tr>
<tr><td>Classificação SUSEP</td><td>Plano de previdência</td><td>Seguro de pessoa</td></tr>
<tr><td>Bens e Direitos (IRPF)</td><td>Não declarado como bem</td><td>Código 97</td></tr>
</tbody>
</table>
<h2>Regimes de Tributação</h2>
<h3>Tabela Progressiva (Compensável)</h3>
<p>Segue a tabela do IR da pessoa física (0% a 27,5%). O IR retido na fonte é <em>antecipação</em> e ajustado na declaração anual — pode gerar restituição ou complementação.</p>
<table class="data-table">
<thead><tr><th>Base de Cálculo Mensal</th><th>Alíquota</th></tr></thead>
<tbody>
<tr><td>Até R$ 2.259,20</td><td>0% (isento)</td></tr>
<tr><td>R$ 2.259,21 a R$ 2.826,65</td><td>7,5%</td></tr>
<tr><td>R$ 2.826,66 a R$ 3.751,05</td><td>15%</td></tr>
<tr><td>R$ 3.751,06 a R$ 4.664,68</td><td>22,5%</td></tr>
<tr><td>Acima de R$ 4.664,68</td><td>27,5%</td></tr>
</tbody>
</table>
<h3>Tabela Regressiva (Definitiva / Exclusiva na Fonte)</h3>
<p>Alíquotas decrescentes conforme o prazo de acumulação. O IR retido é <strong>definitivo</strong> — não entra na declaração de ajuste anual. Ideal para horizontes longos.</p>
<table class="data-table">
<thead><tr><th>Prazo de Acumulação</th><th>Alíquota</th></tr></thead>
<tbody>
<tr><td>Até 2 anos</td><td>35%</td></tr>
<tr><td>2 a 4 anos</td><td>30%</td></tr>
<tr><td>4 a 6 anos</td><td>25%</td></tr>
<tr><td>6 a 8 anos</td><td>20%</td></tr>
<tr><td>8 a 10 anos</td><td>15%</td></tr>
<tr><td>Acima de 10 anos</td><td><strong>10%</strong></td></tr>
</tbody>
</table>
<p>Mnemônico: começa em <em>35%</em> e cai <em>5 p.p. a cada 2 anos</em> — seis faixas, alíquota mínima de 10% após 10 anos.</p>
<h2>Lei 14.803/2024 — Nova Regra de Escolha do Regime</h2>
<p>Antes da lei: a escolha do regime tributário (progressivo ou regressivo) era feita <strong>na contratação</strong> do plano.<br>
Após a lei: a escolha migrou para o <strong>momento do primeiro resgate ou início do recebimento do benefício</strong>, dando mais flexibilidade ao participante para decidir com base em sua situação fiscal futura.</p>
<h2>FIE — Fundo de Investimento Especialmente Constituído</h2>
<p>Os recursos da previdência privada aberta são investidos em <strong>FIEs</strong>, regulamentados pela SUSEP (não pela CVM). Os FIEs são isentos do <strong>come-cotas</strong> semestral — vantagem tributária frente aos fundos convencionais.</p>
<h3>Classificação SUSEP dos FIEs</h3>
<table class="data-table">
<thead><tr><th>Tipo</th><th>Alocação</th></tr></thead>
<tbody>
<tr><td><strong>Soberano</strong></td><td>100% em títulos públicos federais</td></tr>
<tr><td><strong>Renda Fixa Crédito Privado</strong></td><td>Mín. 80% em RF; pode ter crédito privado; <strong>sem renda variável</strong></td></tr>
<tr><td><strong>Composto</strong></td><td>Pode ter <strong>até 49% em renda variável</strong>; único tipo com RV</td></tr>
</tbody>
</table>
<h2>Composição da Carteira dos FIEs — CMN 4.993/2022</h2>
<p>A <strong>CMN 4.444/15</strong> definiu as regras originais de composição das reservas técnicas dos FIEs. Foi revogada pela <strong>CMN 4.993/2022</strong>, que manteve a mesma estrutura de limites por modalidade e perfil do participante. É essa tabela completa que cai na prova:</p>
<table class="data-table">
<thead><tr><th>Modalidade</th><th>Investidor Comum</th><th>Investidor Qualificado</th></tr></thead>
<tbody>
<tr><td>Renda Fixa</td><td>Até 100%</td><td>Até 100%</td></tr>
<tr><td>Renda Variável</td><td><strong>Até 70%</strong></td><td><strong>Até 100%</strong></td></tr>
<tr><td>Imóveis</td><td>Até 20%</td><td>Até 40%</td></tr>
<tr><td>Investimentos sujeitos a variação cambial</td><td>Até 20%</td><td>Até 40%</td></tr>
<tr><td>Outros (Multimercados, COE etc.)</td><td>Até 20%</td><td>Até 40%</td></tr>
<tr><td colspan="3" style="text-align:center;background:var(--red);color:#fff;font-weight:700;letter-spacing:.5px">NÃO ADMITEM ALAVANCAGEM</td></tr>
</tbody>
</table>
<p>Investidor qualificado: mais de R$ 1 milhão em aplicações financeiras, ou certificação reconhecida pelo BC (CFA, CFP®, CPA-20, entre outras).</p>
</div>`,
    mapa: {
      root: "Previdência Privada",
      branches: [
        { label: "Produtos", color: "#d4a843", icon: "📦", children: [
          { label: "PGBL", detail: "Deduz 12% renda bruta · tributa total" },
          { label: "VGBL", detail: "Não deduz · tributa só rendimentos · seguro de pessoa" }
        ]},
        { label: "Tributação", color: "#5b8fee", icon: "📊", children: [
          { label: "Progressiva", detail: "0 a 27,5% · compensável · ajuste anual" },
          { label: "Regressiva", detail: "35% → 10% · definitiva · exclusiva fonte" },
          { label: "Lei 14.803/24", detail: "Escolha no 1º resgate (não na contratação)" }
        ]},
        { label: "FIE (SUSEP)", color: "#4dbdaf", icon: "💼", children: [
          { label: "Soberano", detail: "100% títulos públicos" },
          { label: "RF Crédito Priv.", detail: "Min 80% RF · sem RV" },
          { label: "Composto", detail: "Único com RV · até 49%" }
        ]},
        { label: "Limites CMN", color: "#e05b5b", icon: "⚖️", children: [
          { label: "Inv. Comum", detail: "Até 70% em RV" },
          { label: "Inv. Qualificado", detail: "Até 100% em RV" }
        ]}
      ]
    },
    tags: ["PGBL","VGBL","previdência privada","tabela regressiva","progressiva","FIE","SUSEP","CMN 4993","come-cotas","Lei 14803","portabilidade","EAPC"],
    fc: [
      { q: "Qual a principal diferença tributária entre PGBL e VGBL?", a: "PGBL permite dedução de até 12% da renda bruta (IR modelo completo), mas tributa o valor TOTAL no resgate. VGBL não permite dedução, mas tributa apenas os RENDIMENTOS no resgate." },
      { q: "O que mudou com a Lei 14.803/2024 na previdência privada?", a: "A escolha do regime tributário (progressivo ou regressivo) passou da contratação para o MOMENTO DO PRIMEIRO RESGATE ou início do benefício, dando mais flexibilidade ao participante." },
      { q: "Quais são as alíquotas da tabela regressiva e qual o prazo para atingir 10%?", a: "35% (até 2 anos), 30% (2-4), 25% (4-6), 20% (6-8), 15% (8-10), 10% (acima de 10 anos). Prazo mínimo para 10%: mais de 10 anos de acumulação." },
      { q: "O que é um FIE e quais são os três tipos classificados pela SUSEP?", a: "FIE = Fundo de Investimento Especialmente Constituído (regulado pela SUSEP, não CVM). Tipos: Soberano (100% títulos públicos), Renda Fixa Crédito Privado (mín. 80% RF, sem RV), Composto (até 49% em RV — único com renda variável)." },
      { q: "Quais são os limites de composição dos FIEs (CMN 4.993/2022) para Investidor Comum e Qualificado?", a: "Renda Fixa: 100% / 100%. Renda Variável: 70% / 100%. Imóveis: 20% / 40%. Variação cambial: 20% / 40%. Outros (multimercados, COE): 20% / 40%. Os FIEs NÃO admitem alavancagem. CMN 4.444/15 definiu as regras originais; CMN 4.993/2022 a revogou mantendo a mesma estrutura." },
      { q: "Como o VGBL deve ser declarado no IR anual?", a: "VGBL é seguro de pessoa (código 97): declarado como bem na ficha de Bens e Direitos — contribuições NÃO são dedutíveis. PGBL: contribuições lançadas como dedução (até 12%) na ficha de pagamentos efetuados." },
      { q: "O que é come-cotas e como ele se aplica à previdência privada?", a: "Come-cotas é a antecipação semestral de IR em fundos convencionais (RF e multimercado). Os FIEs de previdência são ISENTOS do come-cotas — vantagem tributária relevante na fase de acumulação." }
    ],
    q: [
      { t: "Um cliente faz declaração de IR no modelo completo, tem renda bruta anual de R$ 200.000 e não atingiu o limite de deduções de previdência. Qual produto é mais indicado?", o: ["A) VGBL, pois tributa apenas rendimentos no resgate.", "B) PGBL, pois permite deduzir até R$ 24.000 (12% de R$ 200.000) da base de IR.", "C) PGBL, pois é isento de IR no resgate após 10 anos.", "D) VGBL, pois pode ser declarado como bem isento."], c: 1, f: "O PGBL é indicado para quem faz declaração completa com renda tributável elevada: permite deduzir até 12% de R$ 200.000 = R$ 24.000 ao ano, gerando economia fiscal imediata. Embora o resgate tribute o total, a dedução anual cria vantagem líquida para perfis tributários altos." },
      { t: "Um participante de PGBL com regime regressivo faz resgate após 9 anos de acumulação. Qual alíquota de IR será aplicada?", o: ["A) 10%, última faixa da tabela regressiva.", "B) 15%, pois 9 anos se enquadra na faixa de 8 a 10 anos.", "C) 20%, pois está acima de 8 anos.", "D) 25%, pois a tabela só atinge 15% após 10 anos completos."], c: 1, f: "Na tabela regressiva, 9 anos se enquadra na faixa '8 a 10 anos' = alíquota de 15%. A alíquota de 10% exige MAIS de 10 anos. O IR retido é definitivo (exclusivo na fonte) — não entra no ajuste anual." },
      { t: "Qual dos tipos de FIE é o ÚNICO que pode investir em renda variável?", o: ["A) FIE Soberano.", "B) FIE Renda Fixa Crédito Privado.", "C) FIE Composto.", "D) FIE Multimercado Previdenciário."], c: 2, f: "Pela classificação SUSEP, existem três tipos de FIE: Soberano (100% títulos públicos), Renda Fixa Crédito Privado (mín. 80% RF, sem RV) e Composto (até 49% em RV). O FIE Composto é o ÚNICO com renda variável. 'Multimercado Previdenciário' não existe na classificação SUSEP." },
      { t: "Segundo a CMN 4.993/2022, qual o limite máximo de RV para um 'Investidor Comum' em previdência?", o: ["A) 49%, igual ao limite do FIE Composto.", "B) 30%, para perfil conservador padrão.", "C) 70%, conforme o limite da CMN para investidores comuns.", "D) 100%, sem restrição para qualquer participante."], c: 2, f: "A CMN 4.993/2022 estabelece: Investidor Comum → até 70% em RV; Investidor Qualificado → até 100%. Atenção: o limite de 49% é do FIE Composto (produto em si), não do participante. O participante pode alocar em múltiplos FIEs; o teto do seu portfólio é 70%." }
    ],
    al: [
      { t: "danger", tag: "PGBL tributa o TOTAL", txt: "A pegadinha mais clássica: no PGBL, o IR no resgate incide sobre o valor TOTAL resgatado (capital + rendimentos), não apenas sobre os ganhos. Isso compensa a dedução de 12% na acumulação. No VGBL, IR só sobre rendimentos." },
      { t: "danger", tag: "Lei 14.803/24 — Atenção ao momento", txt: "Antes da lei: escolha do regime na <strong>contratação</strong>. Após a lei: escolha no <strong>momento do 1º resgate</strong>. A prova pode apresentar cenários anteriores e posteriores à lei — atenção ao contexto temporal da questão." },
      { t: "warn", tag: "49% vs 70% — Não confundir", txt: "O limite de <strong>49% em RV</strong> é do FIE Composto (classificação SUSEP do fundo em si). O limite de <strong>70% em RV</strong> é do Investidor Comum (CMN 4.993/2022, perfil do participante). Além de RV, a CMN limita imóveis, câmbio e outros em 20% (comum) / 40% (qualificado). FIEs não admitem alavancagem." },
      { t: "warn", tag: "VGBL = Seguro, não Plano", txt: "O VGBL é juridicamente um <strong>seguro de pessoa</strong>: (1) não é dedutível no IR; (2) declarado em Bens e Direitos (código 97); (3) na sucessão, não passa pelo inventário — beneficiários indicados recebem diretamente." },
      { t: "tip", tag: "Mnemônico tabela regressiva", txt: "Começa em <strong>35%</strong> e cai <strong>5 p.p. a cada 2 anos</strong>: 35% → 30% → 25% → 20% → 15% → 10%. Seis faixas. Alíquota mínima de 10% após mais de 10 anos." }
    ],
    conexoes: `<div class="content-body">
<h3>PGBL/VGBL × SFN (Módulo 1)</h3>
<p>A SUSEP (supervisora dos seguros privados e da previdência aberta) e o CNSP (normativo) já foram vistos no Módulo 1. Aposentadoria II é o contexto prático onde essas entidades regulam os produtos que o cliente vai comprar. EFPC segue CNPC/PREVIC — linha divisória essencial para a prova.</p>
<h3>Tabela Regressiva × Juros Compostos (Módulo 3)</h3>
<p>A vantagem da tabela regressiva é maximizada pelo efeito dos juros compostos: quanto mais tempo o dinheiro fica investido, menor a alíquota e maior o montante acumulado. Os dois efeitos se combinam — uma questão pode pedir para calcular o benefício líquido comparando os dois regimes com HP-12C.</p>
<h3>Aposentadoria II × Aposentadoria I (Módulo 4)</h3>
<p>O Módulo 4 cobriu o cálculo do capital necessário (etapas 1 e 2 com HP-12C), o gap previdenciário e os benefícios do RGPS/RPPS. O Módulo 5 cobre os <em>instrumentos</em> para fechar esse gap: PGBL, VGBL, e como são tributados e regulados. Os dois módulos formam o planejamento previdenciário completo.</p>
<h3>Come-cotas × Tributação de Fundos (Módulo 3)</h3>
<p>Fundos convencionais de RF e multimercado sofrem come-cotas (antecipação de IR em maio e novembro). FIEs de previdência são isentos — vantagem de diferimento tributário que potencializa o crescimento na fase longa de acumulação.</p>
</div>`
  },

  6: {
    titulo: "Análise de Projetos",
    exp: `<div class="content-body">
<h2>VPL — Valor Presente Líquido (NPV)</h2>
<p>O VPL desconta todos os fluxos de caixa futuros de um projeto à Taxa Mínima de Atratividade (TMA) e subtrai o investimento inicial. Mede a <strong>criação de valor em termos absolutos</strong>.</p>
<p>Fórmula: <strong>VPL = Σ [FCt / (1 + i)^t] − I₀</strong></p>
<p><strong>Regra de decisão:</strong></p>
<ul>
<li><em>VPL &gt; 0</em> → Projeto viável (cria valor acima da TMA)</li>
<li><em>VPL = 0</em> → Indiferente (remunera exatamente a TMA)</li>
<li><em>VPL &lt; 0</em> → Inviável (destrói valor)</li>
</ul>
<p>Entre projetos mutuamente exclusivos: escolhe-se o de <strong>maior VPL</strong>.</p>
<h3>Cálculo na HP-12C</h3>
<p>1. <code>g END</code> (fluxos ao final); 2. Investimento inicial negativo: <code>CHS g CFo</code>; 3. Cada fluxo: <code>g CFj</code>; 4. Repetições: <code>g Nj</code>; 5. Taxa: <code>i</code>; 6. Calcule: <code>f NPV</code></p>
<h2>TIR — Taxa Interna de Retorno (IRR)</h2>
<p>A TIR é a taxa que <strong>zera o VPL</strong> de um projeto — representa sua rentabilidade intrínseca.</p>
<p><strong>Regra de decisão:</strong> TIR &gt; TMA → viável; TIR &lt; TMA → inviável.</p>
<p>Entre projetos exclusivos: maior TIR vence — <em>mas pode conflitar com o VPL.</em></p>
<h3>HP-12C: mesmos fluxos do VPL → <code>f IRR</code></h3>
<h2>Múltiplas TIRs</h2>
<p>Ocorrem quando há <strong>inversões de sinal</strong> nos fluxos de caixa (ex: −, +, −).</p>
<ul>
<li><strong>Regra de Descartes:</strong> Número máximo de TIRs positivas = número de mudanças de sinal no fluxo.</li>
<li><strong>Critério de Norstrom:</strong> Se a série dos <em>saldos acumulados</em> tiver apenas UMA mudança de sinal → existe uma única TIR positiva, independente do número de inversões nos fluxos brutos.</li>
</ul>
<h2>TIRM — Taxa Interna de Retorno Modificada (MIRR)</h2>
<p>Resolve o problema da TIR: usa taxas separadas para reinvestimento e financiamento.</p>
<ul>
<li><strong>Taxa de financiamento (tf):</strong> desconta fluxos negativos ao período 0 (VP dos custos)</li>
<li><strong>Taxa de reinvestimento (tr):</strong> leva fluxos positivos ao período n (VF dos benefícios)</li>
</ul>
<p>Fórmula: <strong>TIRM = (VF dos benefícios / VP dos custos)^(1/n) − 1</strong></p>
<p>A TIRM é sempre <em>única</em> — não tem problema de múltiplas soluções.</p>
<h2>Payback Simples vs Descontado</h2>
<table class="data-table">
<thead><tr><th>Critério</th><th>Payback Simples</th><th>Payback Descontado</th></tr></thead>
<tbody>
<tr><td>Desconto dos fluxos</td><td>Não</td><td>Sim (pela TMA)</td></tr>
<tr><td>Valor do dinheiro no tempo</td><td>Ignora</td><td>Considera</td></tr>
<tr><td>Resultado</td><td>Menor prazo</td><td>Maior ou igual ao simples</td></tr>
</tbody>
</table>
<p>Regra: aceitar projeto com payback inferior ao prazo máximo estipulado. Limitação: ignora fluxos após o período de payback.</p>
<h2>Conflito VPL vs TIR</h2>
<p>Projetos mutuamente exclusivos podem ter VPL e TIR indicando vencedores diferentes. Ocorre quando há diferença de:</p>
<ul>
<li><strong>Escala de investimento</strong> (projetos de tamanhos diferentes)</li>
<li><strong>Prazo de duração</strong> (projetos com horizontes diferentes)</li>
<li><strong>Perfil temporal dos fluxos</strong> (concentrados no início vs no final)</li>
</ul>
<p><strong>Quando há conflito: o VPL prevalece.</strong> O VPL mede criação de valor em termos absolutos — objetivo de maximização de riqueza do acionista.</p>
<h2>EBITDA / LAJIDA</h2>
<p>EBITDA = Earnings Before Interest, Taxes, Depreciation and Amortization (LAJIDA = Lucro Antes de Juros, Impostos, Depreciação e Amortização). Mede a <strong>geração operacional de caixa</strong>.</p>
<table class="data-table">
<thead><tr><th>Item</th><th>Operação</th></tr></thead>
<tbody>
<tr><td>Receita Líquida</td><td>Base</td></tr>
<tr><td>(−) Custos e Despesas Operacionais</td><td></td></tr>
<tr><td>= EBIT (LAJIR)</td><td>Lucro operacional</td></tr>
<tr><td>(+) Depreciação e Amortização</td><td>Adição (não-caixa)</td></tr>
<tr><td>= <strong>EBITDA</strong></td><td></td></tr>
</tbody>
</table>
<p><strong>Margem EBITDA</strong> = EBITDA / Receita Líquida. Não é fluxo de caixa real: ignora variações de capital de giro e CAPEX.</p>
<h2>CMPC / WACC</h2>
<p>O CMPC (Custo Médio Ponderado de Capital) é a TMA de uma empresa, ponderando o custo de cada fonte de capital pelo seu peso na estrutura de financiamento.</p>
<p>Fórmula: <strong>CMPC = (PL / (PL+D)) × Rp + (D / (PL+D)) × Rd × (1 − IR)</strong></p>
<ul>
<li><strong>PL</strong> = Patrimônio Líquido; <strong>D</strong> = Dívida</li>
<li><strong>Rp</strong> = custo do capital próprio (ex.: CAPM)</li>
<li><strong>Rd</strong> = custo da dívida (taxa bruta)</li>
<li><strong>(1 − IR)</strong> = benefício fiscal — juros são dedutíveis no IR, reduzindo o custo líquido da dívida</li>
</ul>
<p><strong>Exemplo:</strong> PL = R$ 600k, D = R$ 400k, Rp = 15%, Rd = 10%, IR = 34%:<br>
CMPC = 0,6 × 15% + 0,4 × 10% × 0,66 = 9% + 2,64% = <strong>11,64%</strong></p>
</div>`,
    mapa: {
      root: "Análise de Projetos",
      branches: [
        { label: "VPL / NPV", color: "#d4a843", icon: "💰", children: [
          { label: "VPL > 0", detail: "Projeto viável · cria valor" },
          { label: "VPL = 0", detail: "Remunera exatamente a TMA" },
          { label: "Projetos excludentes", detail: "Escolhe maior VPL" }
        ]},
        { label: "TIR / TIRM", color: "#5b8fee", icon: "📈", children: [
          { label: "TIR > TMA", detail: "Projeto viável" },
          { label: "Múltiplas TIRs", detail: "Descartes: nº mudanças de sinal" },
          { label: "Norstrom", detail: "Saldo acumulado: 1 inversão = TIR única" },
          { label: "TIRM", detail: "Taxa reinvest. separada · única solução" }
        ]},
        { label: "Payback", color: "#4dbdaf", icon: "⏱️", children: [
          { label: "Simples", detail: "Sem desconto · mais rápido" },
          { label: "Descontado", detail: "Com TMA · sempre maior ou igual" }
        ]},
        { label: "EBITDA / CMPC", color: "#a855f7", icon: "🏢", children: [
          { label: "EBITDA", detail: "LAJIDA · geração operacional · não é caixa real" },
          { label: "CMPC", detail: "WACC = PL×Rp + D×Rd×(1−IR)" }
        ]}
      ]
    },
    tags: ["VPL","NPV","TIR","IRR","TIRM","MIRR","payback","EBITDA","LAJIDA","CMPC","WACC","Descartes","Norstrom","análise de projetos","TMA"],
    fc: [
      { q: "O que significa VPL > 0 na análise de projetos?", a: "O projeto é viável: os fluxos de caixa futuros, descontados pela TMA, superam o investimento inicial. O projeto cria valor. VPL = 0 → indiferente; VPL < 0 → inviável." },
      { q: "Qual a diferença entre TIR e TIRM?", a: "A TIR pressupõe reinvestimento dos fluxos intermediários à própria TIR (irreal). A TIRM usa taxa de reinvestimento separada (geralmente a TMA), tornando o resultado mais realista e eliminando múltiplas TIRs." },
      { q: "O que diz a Regra de Descartes sobre múltiplas TIRs?", a: "O número MÁXIMO de TIRs reais positivas é igual ao número de mudanças de sinal no fluxo de caixa. Fluxo (−, +, −): 2 inversões → até 2 TIRs positivas. Mas o número real pode ser menor." },
      { q: "O que é o Critério de Norstrom?", a: "Se a série dos SALDOS ACUMULADOS dos fluxos de caixa tiver apenas UMA mudança de sinal, existe uma única TIR positiva — independentemente do número de inversões nos fluxos brutos." },
      { q: "Qual a fórmula do CMPC (WACC) e o que significa o fator (1 − IR)?", a: "CMPC = (PL/(PL+D)) × Rp + (D/(PL+D)) × Rd × (1−IR). O fator (1−IR) é o benefício fiscal: juros da dívida são dedutíveis no IR, reduzindo o custo efetivo do capital de terceiros." },
      { q: "Quando há conflito entre VPL e TIR, qual prevalece?", a: "O VPL prevalece. Mede criação de valor em termos absolutos e alinha com o objetivo de maximização de riqueza. Conflitos ocorrem quando projetos têm escalas, prazos ou perfis temporais de fluxos diferentes." },
      { q: "Qual a diferença entre Payback Simples e Payback Descontado?", a: "Simples: acumula fluxos nominais (sem ajuste pelo valor do dinheiro no tempo). Descontado: desconta cada fluxo pela TMA antes de acumular. O Descontado é sempre MAIOR ou igual ao Simples quando TMA > 0." },
      { q: "O que é EBITDA e por que não é considerado fluxo de caixa real?", a: "EBITDA (LAJIDA) = lucro operacional antes de juros, IR, depreciação e amortização. Não é caixa real porque ignora variações de capital de giro, investimentos em ativos (CAPEX) e pagamentos de dívida." }
    ],
    q: [
      { t: "Uma empresa analisa dois projetos excludentes. Projeto A: VPL = R$ 120.000, TIR = 18%. Projeto B: VPL = R$ 95.000, TIR = 22%. TMA = 12% a.a. Qual deve ser escolhido?", o: ["A) Projeto B — maior TIR indica maior rentabilidade.", "B) Projeto A — maior VPL gera mais valor absoluto.", "C) Projeto A — TIR do B muito alta indica risco excessivo.", "D) Ambos equivalentes pois os dois superam a TMA."], c: 1, f: "Quando há conflito entre VPL e TIR em projetos mutuamente exclusivos, o VPL prevalece. O VPL mede criação de valor em termos absolutos. Projeto A (VPL = R$ 120.000) gera mais riqueza para o acionista do que o Projeto B, mesmo com TIR menor." },
      { t: "Um projeto tem fluxo de caixa: Ano 0: −R$100k; Ano 1: +R$300k; Ano 2: −R$250k. Quantas TIRs positivas pode ter (Regra de Descartes)?", o: ["A) Uma TIR, pois o investimento inicial é sempre negativo.", "B) Até duas TIRs positivas, pois há duas mudanças de sinal.", "C) Nenhuma, pois o fluxo líquido total é negativo.", "D) Três TIRs, pois há três períodos."], c: 1, f: "A Regra de Descartes conta as mudanças de sinal: (−, +, −) tem 2 mudanças. Logo, pode haver até 2 TIRs positivas. O fluxo líquido negativo não impede a existência de TIRs positivas — a TIR é calculada equação, não pelo somatório." },
      { t: "Empresa com PL = R$700k, Dívida = R$300k, Rp = 16%, Rd = 12% a.a. bruto, IR = 34%. Qual o CMPC?", o: ["A) 14,00% a.a.", "B) 13,18% a.a.", "C) 11,20% a.a.", "D) 13,58% a.a."], c: 3, f: "CMPC = (700/1000)×16% + (300/1000)×12%×(1−0,34) = 0,7×16% + 0,3×7,92% = 11,2% + 2,376% = 13,576% ≈ 13,58%. O fator (1−IR) transforma a taxa bruta de 12% em custo líquido de 7,92%. Esquecer esse ajuste é o erro mais frequente." },
      { t: "O Payback Descontado de um projeto com TMA positiva sempre será:", o: ["A) Igual ao Payback Simples.", "B) Menor que o Payback Simples.", "C) Maior ou igual ao Payback Simples.", "D) Independente da TMA."], c: 2, f: "Com TMA > 0, descontar os fluxos reduz seus valores presentes — eles acumulam mais devagar do que os nominais. Por isso o Payback Descontado sempre demora mais para recuperar o investimento: é maior ou igual ao Simples (iguais apenas se TMA = 0)." }
    ],
    al: [
      { t: "danger", tag: "TIR vs VPL em projetos excludentes", txt: "A prova frequentemente mostra projetos onde a TIR aponta um vencedor e o VPL aponta outro. <strong>O VPL sempre prevalece</strong> quando há conflito em projetos mutuamente exclusivos. Memorize: VPL mede criação de riqueza em termos absolutos." },
      { t: "danger", tag: "Múltiplas TIRs — fluxo não convencional", txt: "Quando o enunciado mostrar fluxo com mais de uma inversão de sinal (ex.: −, +, −, +), existe risco de múltiplas TIRs. A Regra de Descartes diz o <strong>máximo possível</strong> — não o número real. Use TIRM ou VPL nesses casos." },
      { t: "warn", tag: "Benefício fiscal da dívida no CMPC", txt: "No CMPC, o custo da dívida é <strong>multiplicado por (1 − IR)</strong>. As questões sempre fornecem a taxa bruta — você deve aplicar o ajuste. Esquecer o (1−IR) é o erro mais comum neste cálculo." },
      { t: "tip", tag: "Mnemônico TIRM", txt: "Fluxos <strong>negativos</strong> vêm a valor presente (taxa de financiamento) e fluxos <strong>positivos</strong> vão a valor futuro (taxa de reinvestimento). A TIRM iguala esses dois extremos — e é sempre única." },
      { t: "info", tag: "EBITDA não é caixa real", txt: "O EBITDA é frequentemente chamado de 'geração de caixa operacional', mas <strong>não é fluxo de caixa real</strong>: não considera variações de capital de giro nem CAPEX. A prova pode explorar essa distinção para testar se o aluno confunde os conceitos." }
    ],
    conexoes: `<div class="content-body">
<h3>VPL/TIR × Juros Compostos (Módulo 3)</h3>
<p>O VPL usa a mesma lógica de desconto a valor presente vista no Módulo 3 (HP-12C, fluxos de caixa, PMT/PV/FV). A TIR é o "i" que zera o VPL — a mesma taxa de desconto que o HP-12C calcula com <code>f IRR</code>. Dominar o Módulo 3 é pré-requisito direto para esse módulo.</p>
<h3>CMPC × Estrutura de Capital</h3>
<p>O CMPC pesa o custo de capital próprio (calculado pelo CAPM, que envolve beta e prêmio de risco) com o custo da dívida (taxa de mercado líquida de IR). O CAPM conecta Análise de Projetos com Gestão de Investimentos — o custo do equity não é arbitrário, vem do modelo de precificação de ativos.</p>
<h3>EBITDA × Demonstrações Financeiras</h3>
<p>O EBITDA parte do DRE: começa no Lucro Operacional (EBIT/LAJIR) e adiciona de volta depreciação e amortização. Entender o DRE é necessário para identificar cada linha do cálculo — especialmente a diferença entre EBIT e EBITDA em questões que dão o resultado bruto e pedem o operacional.</p>
<h3>Análise de Projetos × Planejamento Financeiro</h3>
<p>O VPL e a TIR são ferramentas que o planejador financeiro usa para avaliar investimentos do cliente — seja expansão de negócio, compra de imóvel para renda, ou troca de financiamento. O CMPC define o custo de oportunidade: se o projeto não bater o CMPC da empresa, destrói valor.</p>
</div>`
  },
  7: {
    "titulo": "Renda Fixa I",
    "exp": "<div class=\"content-body\"><h2>Conceitos Básicos de Renda Fixa</h2><p>Os instrumentos de renda fixa (empréstimos e títulos) são as formas mais comuns de financiamento para governos, empresas e entidades sem fins lucrativos. Enquanto os empréstimos são contratos personalizados entre devedor e instituição financeira, os títulos são instrumentos padronizados, com maior liquidez e negociação em mercado secundário. Investidores institucionais (fundos de pensão, seguradoras, bancos centrais) utilizam esses títulos como parte essencial de suas carteiras. Títulos soberanos tendem a ter a mais alta qualidade de crédito, pois são garantidos pela capacidade tributária do governo, funcionando como benchmark para mensurar risco de crédito relativo. Títulos corporativos podem ser não garantidos ou contar com garantias reais, especialmente em empresas com fluxo de caixa instável. As características de um título — emissor, vencimento, valor principal, taxa e frequência de juros, senioridade e cláusulas contingentes — definem sua estrutura de fluxo de caixa e o risco associado.</p><h3>Glossário Essencial</h3><ul><li><strong>Emissor</strong>: entidade que capta recursos e assume a obrigação de pagar juros e devolver o valor investido.</li><li><strong>Valor de face</strong>: montante prometido no vencimento (diferente do <strong>valor principal</strong>, que é o capital efetivamente levantado na emissão — a diferença aparece quando há ágio/deságio na colocação).</li><li><strong>Cupom</strong>: pagamento periódico de juros, quando houver; <strong>cupom rate</strong> é a taxa anual sobre o valor de face.</li><li><strong>Maturidade (vencimento)</strong>: data final de quitação do saldo devedor.</li><li><strong>Zero cupom</strong>: título que não paga juros periódicos.</li><li><strong>Título bullet</strong>: principal pago integralmente apenas no vencimento.</li><li><strong>Amortizado</strong>: parte do principal é devolvida antes do vencimento, junto com os juros.</li></ul><h3>Taxa Prefixada, Pós-Fixada e Taxa Livre de Risco (TLR)</h3><p>A <strong>taxa prefixada</strong> é definida no momento da aplicação: o investidor sabe exatamente a rentabilidade final se mantiver o título até o vencimento, mas fica exposto a risco de mercado (marcação a mercado) se negociar antes do prazo. A <strong>taxa pós-fixada</strong> está atrelada a um indexador (Selic, CDI): o retorno final só é conhecido no vencimento, mas há maior proteção contra oscilações de juros ao longo do caminho.</p><p>Cada título possui uma taxa composta pela <strong>Taxa Livre de Risco</strong> mais o <strong>spread de crédito</strong>. No Brasil, a LFT (Tesouro Selic) é o principal ativo livre de risco de curto prazo, pois combina risco soberano com risco de mercado praticamente nulo. Para horizontes mais longos, usam-se títulos públicos de duration equivalente — NTN-F para taxas nominais prefixadas, NTN-B para taxas reais. Como os títulos corporativos têm maior risco de inadimplência que o Tesouro Nacional, eles pagam um spread de crédito adicional.</p><p><strong>Exemplo numérico 1:</strong> se a LFT rende 10% a.a. e uma debênture pós-fixada rende CDI + 2% a.a. (aproximando CDI≈Selic), o spread de crédito é de 2 pontos percentuais (200 bps).</p><p><strong>Exemplo numérico 2:</strong> uma NTN-F (benchmark prefixado) negocia a 10,5% a.a. Uma debênture de risco moderado negocia a 13,0% a.a., mesmo prazo. Spread = 13,0% − 10,5% = 2,5 p.p. = <code>250 bps</code>, remuneração adicional exigida pelo mercado para compensar o risco de crédito privado frente ao público.</p><h3>Covenants e Cross Default</h3><p><em>Covenants</em> são cláusulas contratuais na escritura de emissão que estabelecem obrigações, limites e restrições à empresa emissora, protegendo o credor e permitindo acompanhar sua saúde financeira. O descumprimento pode gerar penalidades, como antecipação do vencimento. Podem ser <strong>financeiros</strong> (limites de endividamento, cobertura de juros, manutenção de índices) ou <strong>não financeiros</strong> (restrição a venda de ativos, distribuição de dividendos, novas dívidas sem autorização dos credores).</p><p>O <strong><em>Cross Default</em></strong> prevê que o inadimplemento de uma obrigação financeira em determinado contrato caracteriza automaticamente inadimplência em outros contratos/títulos da mesma empresa — mesmo que essas outras obrigações estejam sendo pagas normalmente, os credores podem exigir o vencimento antecipado.</p><h3>Tipos de Garantia (mnemônico REFLUQSU)</h3><table class=\"data-table\"><tr><th>Garantia</th><th>Descrição</th><th>Força</th></tr><tr><td>Real</td><td>Vinculada a bens específicos (imóveis, equipamentos) registrados em favor dos debenturistas</td><td>Mais forte</td></tr><tr><td>Fidejussória</td><td>Terceiro assume o risco via fiança/aval; não depende do ativo circulante nem de bens segregados</td><td>Intermediária (entre real e flutuante)</td></tr><tr><td>Flutuante</td><td>Incide sobre o ativo circulante, livremente substituível; execução prática limitada</td><td>Fraca</td></tr><tr><td>Quirografária</td><td>Sem garantia específica; concorre em igualdade com os demais credores comuns</td><td>Mais fraca (entre as com prioridade)</td></tr><tr><td>Subordinada</td><td>Prioridade de pagamento inferior às demais debêntures e à maioria dos credores</td><td>Última na fila</td></tr></table><h2>Títulos Públicos Federais</h2><p>Os Títulos Públicos Federais (TPF) são emitidos pelo Tesouro Nacional para financiar o Governo Federal, cobrindo déficits orçamentários e rolando a dívida pública. Podem ter remuneração prefixada, pós-fixada ou híbrida. O Governo Federal é o devedor final (risco soberano); o Tesouro Nacional emite, gerencia e paga os títulos; o BACEN não emite TPF, mas os usa como instrumento de política monetária (controle de liquidez e da Selic).</p><h3>LFT — Tesouro Selic (Pós-Fixado)</h3><p>Remuneração pós-fixada atrelada à Selic diária; a rentabilidade nominal só é conhecida no final do período. No mercado secundário pode haver <strong>ágio</strong> (preço acima do valor de face → rendimento abaixo de 100% da Selic) ou <strong>deságio</strong> (preço abaixo do valor de face → rendimento acima de 100% da Selic). Não possui cupom. Por ter baixíssima sensibilidade a juros, é o título público com menor risco de mercado — indicado para reserva de emergência e cenários de alta/instabilidade de juros.</p><p><strong>Exemplo:</strong> se o valor nominal atualizado (PU par) de uma LFT é R$ 10.000,00 e ela é negociada a R$ 10.015,00, há ágio de R$ 15,00 — o comprador pagou mais caro e receberá rendimento ligeiramente abaixo de 100% da Selic. Se negociada a R$ 9.985,00, há deságio, e o rendimento fica acima de 100% da Selic.</p><h3>LTN — Tesouro Prefixado</h3><p>Rentabilidade definida na compra; adquirida com desconto sobre o valor nominal de R$ 1.000, sem cupom. Sensibilidade direta às taxas de juros de mercado (maior risco de mercado, apesar do baixo risco de crédito soberano). Indicada para quem busca previsibilidade e acredita em queda/estabilidade dos juros, mantendo até o vencimento.</p><p><strong>Exemplo numérico (precificação):</strong> LTN com vencimento em exatamente 252 dias úteis, taxa prefixada de 12% a.a., valor de face R$ 1.000,00. <code>PU = VF / (1+i)^(du/252) = 1.000 / (1,12)^(252/252) = 1.000 / 1,12 = R$ 892,86</code>. O investidor paga hoje R$ 892,86 e recebe R$ 1.000,00 no vencimento.</p><h3>NTN-F — Tesouro Prefixado com Juros Semestrais</h3><p>Rentabilidade prefixada, com pagamento de cupons semestrais e devolução do principal no vencimento. Por causa dos fluxos intermediários, tem menor risco de volatilidade que a LTN (embora ainda sensível a juros de mercado).</p><h3>NTN-B Principal e NTN-B — Tesouro IPCA</h3><p>Remuneração híbrida: IPCA + taxa prefixada (juros real), preservando o poder de compra até o vencimento. A <strong>NTN-B Principal</strong> não paga cupons (fluxo concentrado no vencimento), tem elevada duration real e alta sensibilidade a juros reais — alto risco de volatilidade, indicada para longo prazo. A <strong>NTN-B</strong> paga cupons semestrais, o que reduz a duration e a volatilidade frente à Principal, mantendo a proteção inflacionária com renda periódica.</p><h3>Tesouro Renda+ e Tesouro Educa+</h3><p>Criados em 2023, combinam fase de acumulação (IPCA + taxa fixa) com fase de conversão em renda mensal por prazo determinado — funcionando como uma previdência privada de prazo certo, mas com remuneração direta do título público (sem fundo de investimento). O <strong>Renda+</strong> converte o saldo em pagamentos mensais por <strong>20 anos</strong> (foco em aposentadoria), com isenção da taxa de custódia da B3 para quem mantiver até o vencimento (limite de renda mensal de até 6 salários mínimos). O <strong>Educa+</strong> converte em parcelas mensais por <strong>5 anos</strong> (foco em despesas educacionais). Ambos apresentam risco de volatilidade antes da conversão.</p><h3>Tesouro Direto: Regras Operacionais</h3><ul><li>Programa exclusivo para <strong>pessoas físicas</strong> — pessoas jurídicas não podem investir via Tesouro Direto.</li><li>Aplicação mínima de 0,01 título.</li><li>Limite de compra de <strong>R$ 2 milhões por CPF, por mês</strong> (acima disso, só por canais tradicionais fora do programa).</li><li><strong>Não há limite financeiro para vendas</strong>, feitas a preço de mercado, sujeitas à marcação a mercado.</li><li>Liquidez diária garantida pelo Tesouro Nacional, negociação via agentes de custódia.</li></ul><table class=\"data-table\"><tr><th>Título</th><th>Indexação</th><th>Cupom</th><th>Volatilidade</th><th>Indicação</th></tr><tr><td>Tesouro Selic (LFT)</td><td>Selic</td><td>Não</td><td>Muito baixa</td><td>Reserva de emergência / cenários de alta ou instabilidade de juros</td></tr><tr><td>Tesouro Prefixado (LTN)</td><td>Taxa prefixada</td><td>Não</td><td>Alta</td><td>Previsibilidade, aposta em queda dos juros</td></tr><tr><td>Tesouro Prefixado c/ Juros Semestrais (NTN-F)</td><td>Taxa prefixada</td><td>Sim (semestral)</td><td>Elevada (menor que LTN)</td><td>Previsibilidade + renda periódica</td></tr><tr><td>Tesouro IPCA (NTN-B Principal)</td><td>IPCA + taxa fixa</td><td>Não</td><td>Alta</td><td>Proteção contra inflação no longo prazo</td></tr><tr><td>Tesouro IPCA c/ Juros Semestrais (NTN-B)</td><td>IPCA + taxa fixa</td><td>Sim (semestral)</td><td>Elevada (menor que NTN-B Principal)</td><td>Proteção contra inflação + renda periódica</td></tr><tr><td>Tesouro Renda+</td><td>IPCA + taxa fixa</td><td>Sim (mensal, na fase de renda)</td><td>Alta antes da conversão</td><td>Renda para aposentadoria (20 anos)</td></tr><tr><td>Tesouro Educa+</td><td>IPCA + taxa fixa</td><td>Sim (mensal, na fase de renda)</td><td>Alta antes da conversão</td><td>Despesas educacionais (5 anos)</td></tr></table><h2>Títulos de Renda Fixa de Instituições Financeiras</h2><p>Os títulos privados podem ser emitidos por instituições financeiras, não financeiras ou, em casos específicos, pessoas físicas. Parte dos títulos de instituições financeiras conta com a proteção do FGC.</p><h3>Caderneta de Poupança</h3><p>Remuneração padronizada, definida por norma do Banco Central, idêntica em todas as instituições autorizadas (bancos com carteira imobiliária, Caixa Econômica Federal, sociedades de crédito imobiliário, associações de poupança e empréstimo). Regra de remuneração: <strong>TR + 0,5% a.m.</strong> (PF) ou <strong>TR + 1,5% a.t.</strong> (PJ) se a Meta-Selic estiver <strong>acima</strong> de 8,5% a.a.; ou <strong>TR + 70% da Selic</strong> se a Meta-Selic estiver <strong>menor ou igual</strong> a 8,5% a.a. (regra válida só para aplicações a partir de 03/05/2012). Crédito de rendimentos por aniversário (30 dias PF, 90 dias PJ). Isenta de IR para pessoas físicas e entidades sem fins lucrativos. Cobertura do FGC até o limite regulamentar.</p><p><strong>Exemplo:</strong> se a meta Selic está em 7,25% a.a. (≤ 8,5%), a poupança rende TR + 70% × 7,25% = TR + 5,075% a.a. (aplicado proporcionalmente ao período), e não mais TR + 0,5% a.m. fixo — regra que só valeria com Selic acima de 8,5% a.a.</p><h3>CDB e RDB</h3><p>O <strong>CDB</strong> (Certificado de Depósito Bancário) representa um depósito a prazo do investidor junto ao banco/financeira; título nominativo e escritural, negociável, rentabilidade prefixada ou pós-fixada, tributação pela tabela regressiva do IR, cobertura do FGC. O <strong>RDB</strong> (Recibo de Depósito Bancário) é semelhante, mas <strong>intransferível e inegociável</strong>, sem mercado secundário, com possível prazo mínimo de saque.</p><h3>LCA e LCI</h3><p>A <strong>LCA</strong> (Letra de Crédito do Agronegócio) é lastreada em créditos do agronegócio; a <strong>LCI</strong> (Letra de Crédito Imobiliário) é lastreada em créditos imobiliários garantidos por hipoteca/alienação fiduciária (prazo de vencimento não pode superar o prazo dos créditos que a lastreiam). Ambas: isenção de IR para pessoas físicas, cobertura do FGC, <strong>prazo mínimo de 6 meses</strong> quando não atualizadas por índice de preços e <strong>36 meses</strong> quando atualizadas mensalmente por índice de preços; rentabilidade prefixada, pós-fixada ou (na LCA) atrelada a variação cambial.</p><h3>LIG — Letra Imobiliária Garantida</h3><p>Modelo internacional de <em>covered bonds</em>: os ativos que lastreiam a emissão ficam segregados e vinculados exclusivamente ao pagamento da LIG. Isenção de IR para PF, mas <strong>não conta com garantia do FGC</strong> — sua segurança vem da dupla proteção (risco do emissor + pool de ativos segregados).</p><h3>LC e LF</h3><p>A <strong>LC</strong> (Letra de Câmbio) é instrumento de captação das financeiras, usada no financiamento de bens duráveis (CDC); rentabilidade prefixada ou pós-fixada, tributação pela tabela regressiva, cobertura do FGC. A <strong>LF</strong> (Letra Financeira) é título de longo prazo com valor nominal mínimo de <strong>R$ 50 mil</strong> (não subordinada) ou <strong>R$ 300 mil</strong> (subordinada), recompra limitada a 5% do total emitido sem subordinação, e <strong>não possui garantia do FGC</strong>.</p><h3>DPGE e Operações Compromissadas</h3><p>O <strong>DPGE</strong> (Depósito a Prazo com Garantia Especial), criado em 2009, é semelhante ao CDB, mas com <strong>garantia especial do FGC de até R$ 40 milhões</strong> (ampliada de R$ 20 milhões pelo CMN em abril/2020), sem resgate antes de 6 meses e prazo máximo de 36 meses. As <strong>Operações Compromissadas</strong> envolvem venda de título com compromisso de recompra em data futura por preço preestabelecido (ao menos uma das partes deve ser instituição financeira); registro no SELIC (públicos) ou B3 (privados); só têm garantia do FGC quando o objeto for título emitido pela própria instituição financeira, a partir de 08/03/2012.</p><h2>FGC — Fundo Garantidor de Créditos</h2><p>O FGC é entidade privada, sem fins lucrativos, que protege correntistas, poupadores e investidores (residentes e não residentes) em caso de intervenção, liquidação ou falência da instituição associada. Objetivos: promover a estabilidade do SFN, garantir créditos contra instituições associadas, proteger o pequeno investidor. Todas as instituições financeiras e associações de poupança e empréstimo são associadas; <strong>cooperativas de crédito não integram o FGC</strong> (têm o FGCoop próprio).</p><h3>Produtos Cobertos e Não Cobertos</h3><table class=\"data-table\"><tr><th>Cobertos pelo FGC</th><th>NÃO cobertos pelo FGC</th></tr><tr><td>Depósitos à vista e de poupança</td><td>Letras Financeiras (LF)</td></tr><tr><td>Depósitos a prazo (CDB e RDB)</td><td>Letra Imobiliária (LI) e LIG</td></tr><tr><td>LC, LCI, LCA, LCD, LH</td><td>COE</td></tr><tr><td>Compromissadas com título próprio pós-08/03/2012</td><td>Renda fixa de não financeiras (CRI, CRA, CPR, debêntures)</td></tr><tr><td>—</td><td>Ações e fundos de investimento</td></tr></table><h3>Limites de Garantia</h3><ul><li>Limite de <strong>R$ 250.000 por CPF/CNPJ</strong>, por instituição ou grupo financeiro, limitado ao saldo existente.</li><li>Em <strong>contas conjuntas</strong>, o limite total de R$ 250.000 é dividido igualmente entre os titulares, com crédito individualizado.</li><li><strong>Teto global de R$ 1.000.000</strong> em garantias pagas por CPF/CNPJ a cada período de 4 anos (não se aplica a investimentos contratados/repactuados antes de 21/12/2017).</li></ul><h3>Exemplo Numérico Completo</h3><p>Quatro amigos possuem contas conjuntas no banco XYZ: (1) Eduardo e Marcelo — R$ 200.000; (2) Eduardo e Pedro — R$ 250.000; (3) Eduardo, Pedro e Rafael — R$ 650.000. O banco quebra. Como calcular a garantia de cada um?</p><p>Primeiro, cada conta é limitada a R$ 250.000 (a conta 3, de R$ 650.000, é reduzida para R$ 250.000 antes de dividir). Depois, divide-se entre os titulares: Conta (1): R$ 200.000 ÷ 2 = R$ 100.000 cada; Conta (2): R$ 250.000 ÷ 2 = R$ 125.000 cada; Conta (3): R$ 250.000 ÷ 3 = R$ 83.333,33 cada. Somando por CPF (limite de R$ 250.000 cada): <strong>Eduardo</strong> = R$ 100.000 + R$ 125.000 + R$ 83.333,33 = R$ 308.333,33 → limitado ao teto → recebe <strong>R$ 250.000</strong>. <strong>Marcelo</strong> = <strong>R$ 100.000</strong>. <strong>Pedro</strong> = R$ 125.000 + R$ 83.333,33 = <strong>R$ 208.333,33</strong>. <strong>Rafael</strong> = <strong>R$ 83.333,33</strong>.</p><h2>Títulos de Renda Fixa de Instituições Não Financeiras</h2><h3>Nota Promissória (Commercial Paper)</h3><p>Quando distribuída por oferta pública, é enquadrada como valor mobiliário sob supervisão da CVM (Resolução CVM nº 163/22). Usada para captação de curto prazo por companhias, sociedades limitadas e certas cooperativas agropecuárias. Não pode ter cupom de pagamento; prazo máximo de <strong>360 dias</strong> em ofertas públicas em geral, sem prazo máximo quando destinada exclusivamente a investidores profissionais.</p><h3>Debêntures: Conceito e Classificações</h3><p>Títulos de dívida de médio/longo prazo emitidos por sociedades anônimas não financeiras (abertas ou fechadas), sociedades de arrendamento mercantil e companhias hipotecárias — <strong>instituições financeiras não podem emitir debêntures</strong>. A distribuição ao público em geral é restrita a companhias abertas registradas na CVM. Podem ser <strong>nominativas</strong> (controle pela própria emissora) ou <strong>escriturais</strong> (registro por instituição financeira — predominantes no mercado). A escritura de emissão disciplina remuneração, prazos, garantias e conversão, com atuação obrigatória do agente fiduciário. Tipos: <strong>simples</strong> (recebimento só em dinheiro), <strong>conversíveis em ações</strong> (da própria emissora), <strong>permutáveis</strong> (em ações de outra companhia), e <strong>incentivadas/de infraestrutura</strong> (regime específico). Não têm garantia do FGC; o valor total da emissão não pode exceder o capital social da companhia; a remuneração pode ser prefixada, pós-fixada ou cambial.</p><h3>Repactuação, Resgate Antecipado e Opção de Compra</h3><p>A <strong>repactuação</strong> permite ao emissor renegociar condições (rentabilidade, prazo, garantias) desde que prevista na escritura; o investidor pode recusar as novas condições, e nesse caso a empresa é obrigada a recomprar as debêntures de quem não aderir. Já o <strong>resgate antecipado</strong> e a <strong>opção de compra</strong> favorecem a empresa emissora (diferente do vencimento antecipado por cross default/quebra de covenant, que favorece o credor): permitem encerrar a dívida antes do prazo, pagando o valor nominal atualizado mais remuneração pro rata temporis. A diferença entre eles: no <strong>resgate antecipado</strong> a empresa <strong>cancela definitivamente</strong> as debêntures, extinguindo a dívida; na <strong>opção de compra</strong>, a empresa <strong>recompra e pode manter em tesouraria</strong>, com possibilidade de revenda futura no mercado secundário.</p><h3>Debêntures Incentivadas x Debêntures de Infraestrutura</h3><table class=\"data-table\"><tr><th>Característica</th><th>Incentivadas (Lei 12.431/11)</th><th>Infraestrutura (Lei 14.801/24)</th></tr><tr><td>Beneficiário fiscal</td><td>Investidor pessoa física (isento de IR)</td><td>Emissor (dedução de IRPJ/CSLL sobre juros pagos)</td></tr><tr><td>Tributação do investidor</td><td>Isento PF / 15% PJ</td><td>Tributação normal de renda fixa</td></tr><tr><td>Emissor</td><td>SPE, capital aberto ou fechado</td><td>SPE, capital aberto ou fechado</td></tr><tr><td>Destinação dos recursos</td><td>Projetos de infraestrutura/P&D prioritários</td><td>Projetos de infraestrutura/P&D prioritários</td></tr><tr><td>Regras específicas</td><td>Prazo médio ponderado > 4 anos; sem recompra nos 2 primeiros anos; cupons com intervalo mínimo de 180 dias</td><td>Remuneração prefixada+índice, TR ou cambial (conforme autorização federal)</td></tr></table><h3>CRI, CRA e CPR</h3><p>O <strong>CRI</strong> (Certificado de Recebíveis Imobiliários) e o <strong>CRA</strong> (Certificado de Recebíveis do Agronegócio) são títulos nominativos e escriturais emitidos por companhias securitizadoras, lastreados respectivamente em créditos imobiliários e do agronegócio. Podem ser estruturados com <strong>Regime Fiduciário</strong> (patrimônio segregado, maior proteção ao investidor). Isenção de IR para PF; sem garantia do FGC. A <strong>CPR</strong> (Cédula de Produto Rural) é título de crédito do agronegócio, no qual o produtor rural recebe recursos antecipadamente e assume obrigação futura, liquidável por entrega física (CPR Física) ou financeiramente (CPR Financeira); registro obrigatório em entidade autorizada pelo BACEN; isenção de IR para PF.</p></div>",
    "mapa": {
      "root": "Renda Fixa I",
      "branches": [
        { "label": "Conceitos Básicos de Renda Fixa", "icon": "📚", "color": "#2563eb", "children": [
          { "label": "Glossário", "detail": "Emissor, valor de face x principal, cupom, bullet x amortizado, zero cupom" },
          { "label": "Prefixado x Pós-fixado", "detail": "Taxa conhecida na aplicação x atrelada a indexador (Selic/CDI)" },
          { "label": "Spread de Crédito", "detail": "Diferença entre a taxa do título privado e a taxa livre de risco (LFT/NTN-F/NTN-B)" },
          { "label": "Covenants & Cross Default", "detail": "Cláusulas de proteção ao credor; inadimplência em um contrato contamina outros" },
          { "label": "Garantias (REFLUQSU)", "detail": "Real > Fidejussória > Flutuante > Quirografária > Subordinada" }
        ]},
        { "label": "Títulos Públicos Federais", "icon": "🏛️", "color": "#059669", "children": [
          { "label": "LFT (Tesouro Selic)", "detail": "Pós-fixada, sem cupom, menor risco de mercado, ágio/deságio" },
          { "label": "LTN (Tesouro Prefixado)", "detail": "Zero cupom, deságio sobre R$ 1.000, maior risco de mercado" },
          { "label": "NTN-F e NTN-B", "detail": "Prefixada com cupom semestral (NTN-F) e IPCA + taxa fixa (NTN-B, com ou sem cupom)" },
          { "label": "Renda+ e Educa+", "detail": "Acumulação IPCA+taxa; conversão em renda por 20 anos (aposentadoria) ou 5 anos (educação)" },
          { "label": "Tesouro Direto", "detail": "Só pessoa física, limite de compra R$ 2 mi/mês/CPF, sem limite para venda" }
        ]},
        { "label": "Títulos de Instituições Financeiras", "icon": "🏦", "color": "#d97706", "children": [
          { "label": "Poupança", "detail": "TR + 0,5% a.m. ou TR + 70% Selic, conforme a meta Selic esteja acima ou até 8,5% a.a." },
          { "label": "CDB e RDB", "detail": "Depósito a prazo; RDB é intransferível e inegociável, sem mercado secundário" },
          { "label": "LCI e LCA", "detail": "Isentos de IR para PF, prazo mínimo de 6 ou 36 meses conforme atualização por índice" },
          { "label": "LIG e LF", "detail": "LIG (covered bond imobiliário) e LF (valor mínimo R$ 50 mil/R$ 300 mil) NÃO têm garantia do FGC" },
          { "label": "DPGE e Compromissadas", "detail": "DPGE com garantia especial do FGC de até R$ 40 milhões; compromissadas só com FGC em casos específicos" }
        ]},
        { "label": "FGC — Fundo Garantidor de Créditos", "icon": "🛡️", "color": "#dc2626", "children": [
          { "label": "O que cobre", "detail": "Depósitos, CDB/RDB, LC, LCI, LCA, LCD, LH e compromissadas específicas" },
          { "label": "O que não cobre", "detail": "LF, LI/LIG, COE, renda fixa de não financeiras (CRI/CRA/CPR/debêntures), ações e fundos" },
          { "label": "Limites", "detail": "R$ 250 mil por CPF/instituição/conta + teto global de R$ 1 milhão a cada 4 anos" },
          { "label": "Conta Conjunta", "detail": "Limite dividido igualmente entre titulares, respeitando o teto individual de R$ 250 mil por CPF" }
        ]},
        { "label": "Títulos de Instituições Não Financeiras", "icon": "🏭", "color": "#7c3aed", "children": [
          { "label": "Nota Promissória", "detail": "Captação de curto prazo, máximo 360 dias (exceto investidor profissional)" },
          { "label": "Debêntures", "detail": "Simples, conversíveis ou permutáveis; escritura de emissão + agente fiduciário obrigatórios" },
          { "label": "Repactuação x Resgate x Opção de Compra", "detail": "Renegociação; extinção definitiva da dívida; ou recompra com possível revenda em tesouraria" },
          { "label": "Incentivadas x Infraestrutura", "detail": "Benefício fiscal do investidor (Lei 12.431) x benefício fiscal do emissor (Lei 14.801)" },
          { "label": "CRI, CRA e CPR", "detail": "Securitização de recebíveis imobiliários/agro; isenção de IR para PF; sem garantia do FGC" }
        ]}
      ]
    },
    "tags": ["Renda Fixa I", "Títulos Públicos Federais", "Tesouro Direto", "LFT", "LTN", "NTN-B", "NTN-F", "CDB", "RDB", "LCI", "LCA", "LIG", "Letras Financeiras", "DPGE", "FGC", "Debêntures", "Debêntures Incentivadas", "CRI", "CRA", "CPR", "Spread de Crédito", "Covenants"],
    "fc": [
      { "q": "Qual a diferença entre valor de face e valor principal de um título?", "a": "Valor de face é o montante prometido no vencimento; valor principal é o capital efetivamente levantado na emissão. Podem diferir quando há ágio ou deságio na colocação do título." },
      { "q": "O que caracteriza um título 'bullet'?", "a": "O principal é pago integralmente apenas no vencimento, sem amortizações periódicas (diferente do título amortizado)." },
      { "q": "Por que a LFT é considerada o título público com menor risco de mercado?", "a": "Porque sua remuneração pós-fixada acompanha a Selic diária, resultando em duration/sensibilidade a juros praticamente nula, mesmo com risco soberano." },
      { "q": "O que significam ágio e deságio na compra de uma LFT no mercado secundário?", "a": "Ágio: preço acima do valor de face, rendimento abaixo de 100% da Selic. Deságio: preço abaixo do valor de face, rendimento acima de 100% da Selic." },
      { "q": "Qual a diferença entre resgate antecipado e opção de compra em debêntures?", "a": "No resgate antecipado a empresa cancela definitivamente as debêntures, extinguindo a dívida. Na opção de compra, a empresa recompra e pode manter em tesouraria, revendendo depois no mercado secundário." },
      { "q": "O que é a cláusula de cross default?", "a": "Cláusula pela qual o inadimplemento de uma obrigação financeira relevante em um contrato caracteriza automaticamente inadimplência em outros contratos/títulos da mesma empresa, permitindo vencimento antecipado exigido por outros credores." },
      { "q": "Qual o mnemônico e a ordem de força das garantias sobre o patrimônio do devedor?", "a": "REFLUQSU: Real (mais forte) > Fidejussória > Flutuante > Quirografária > Subordinada (mais fraca)." },
      { "q": "Quais produtos NÃO são cobertos pelo FGC?", "a": "Letras Financeiras (LF), Letra Imobiliária (LI) e LIG, COE, renda fixa de instituições não financeiras (CRI, CRA, CPR, debêntures) e ações/fundos de investimento." },
      { "q": "Qual o valor nominal mínimo de uma Letra Financeira (LF)?", "a": "R$ 50 mil se não subordinada; R$ 300 mil se subordinada." },
      { "q": "Quando a poupança passa a render TR + 70% da Selic em vez de TR + 0,5% a.m.?", "a": "Quando a meta Selic estiver menor ou igual a 8,5% a.a., regra válida para aplicações feitas a partir de 03/05/2012. Aplicações anteriores sempre rendem TR + 0,5% a.m. (PF)." },
      { "q": "Qual a principal diferença entre Debêntures Incentivadas (Lei 12.431/11) e Debêntures de Infraestrutura (Lei 14.801/24)?", "a": "Nas Incentivadas o benefício fiscal (isenção de IR) é do investidor pessoa física. Nas de Infraestrutura, o benefício fiscal passa a ser do emissor (dedução de IRPJ/CSLL), e o investidor paga a tributação normal de renda fixa." }
    ],
    "q": [
      { "t": "Um investidor deseja comprar um Tesouro Prefixado (LTN) com vencimento em exatamente 252 dias úteis, sendo a taxa prefixada negociada de 12% a.a. Considerando o valor de face de R$ 1.000,00 e regime de capitalização composta, qual será o preço unitário (PU) aproximado de compra do título?", "o": ["A) R$ 1.120,00", "B) R$ 892,86", "C) R$ 1.000,00", "D) R$ 880,00"], "c": 1, "f": "PU = VF / (1+taxa)^(du/252) = 1.000 / (1,12)^(252/252) = 1.000 / 1,12 = R$ 892,86. Como a LTN é título zero cupom vendido com desconto sobre o valor de face, o investidor paga hoje R$ 892,86 e recebe R$ 1.000,00 no vencimento, embutindo a rentabilidade de 12% a.a." },
      { "t": "Ana e Beatriz mantêm uma conta conjunta com saldo de R$ 300.000 em CDB no banco W. Ana também possui, individualmente, R$ 100.000 aplicados em CDB no mesmo banco. Em caso de falência do banco W (associado ao FGC), qual o valor total que Ana receberá da garantia do FGC?", "o": ["A) R$ 250.000", "B) R$ 225.000", "C) R$ 150.000", "D) R$ 325.000"], "c": 1, "f": "A conta conjunta de R$ 300.000 excede o limite de R$ 250.000 por conta, sendo reduzida para R$ 250.000 antes da divisão. Dividido entre os 2 titulares: R$ 125.000 para cada. Ana soma então R$ 100.000 (individual) + R$ 125.000 (conjunta) = R$ 225.000, valor que está dentro do limite de R$ 250.000 por CPF, portanto recebe integralmente R$ 225.000." },
      { "t": "Uma NTN-F (benchmark prefixado) negocia a uma taxa de 10,5% a.a. Uma debênture de uma empresa com risco de crédito moderado é negociada a 13,0% a.a., para o mesmo prazo/duration. Qual o spread de crédito exigido pelo mercado para essa debênture?", "o": ["A) 25 bps", "B) 250 bps", "C) 1.050 bps", "D) 130 bps"], "c": 1, "f": "Spread de crédito = taxa do título privado − taxa livre de risco de referência = 13,0% − 10,5% = 2,5 p.p. = 250 bps, representando a remuneração adicional exigida pelo mercado para compensar o maior risco de crédito da empresa em relação ao título público benchmark." },
      { "t": "Considerando que a meta Selic definida pelo Copom está atualmente fixada em 7,25% a.a., qual regra de remuneração se aplica a um novo depósito em caderneta de poupança feito por uma pessoa física, desconsiderando a TR?", "o": ["A) 0,5% ao mês fixo, independente da Selic", "B) TR + 70% da Selic (≈ TR + 5,075% a.a.)", "C) 100% da variação da Selic", "D) CDI + 2% a.a."], "c": 1, "f": "Como a meta Selic (7,25% a.a.) é menor ou igual a 8,5% a.a., aplica-se a regra vigente desde 03/05/2012: remuneração = TR + 70% da Selic = TR + (0,70 × 7,25%) = TR + 5,075% a.a. A regra de TR + 0,5% a.m. só valeria se a Selic estivesse acima de 8,5% a.a." },
      { "t": "Uma companhia emissora de debêntures deixa de pagar uma parcela de um empréstimo bancário relevante, contrato distinto e não relacionado à emissão das debêntures. A escritura de emissão das debêntures contém cláusula de cross default. Qual a consequência mais provável para os debenturistas?", "o": ["A) Nenhuma, pois o inadimplemento ocorreu em outro contrato", "B) Os debenturistas podem exigir o vencimento antecipado das debêntures, mesmo estando em dia", "C) A empresa deve obrigatoriamente repactuar as condições das debêntures", "D) O agente fiduciário assume automaticamente a dívida bancária inadimplida"], "c": 1, "f": "A cláusula de cross default prevê que o inadimplemento em qualquer obrigação financeira relevante da empresa caracteriza automaticamente inadimplência em outros contratos/títulos, permitindo aos credores (inclusive debenturistas) exigir o vencimento antecipado da dívida, mesmo que as debêntures estivessem sendo pagas normalmente." }
    ],
    "al": [
      { "t": "danger", "tag": "FGC", "txt": "LF (Letra Financeira) e LIG (Letra Imobiliária Garantida) NÃO têm garantia do FGC, mesmo sendo instrumentos emitidos por instituições financeiras — pegadinha clássica, pois o candidato tende a associar 'emissor banco' a 'FGC automático'." },
      { "t": "warn", "tag": "Poupança", "txt": "A regra TR + 70% Selic só vale para aplicações feitas a partir de 03/05/2012 e apenas quando a meta Selic está menor ou igual a 8,5% a.a. Aplicações anteriores a essa data sempre rendem TR + 0,5% a.m. (PF), independentemente do nível da Selic." },
      { "t": "danger", "tag": "Garantias", "txt": "Não confunda a força das garantias: Real > Fidejussória > Flutuante > Quirografária > Subordinada. A fidejussória (aval/fiança de terceiro) é mais forte que a flutuante, mas mais fraca que a real — use o mnemônico REFLUQSU." },
      { "t": "tip", "tag": "LFT", "txt": "Ágio (preço acima do valor de face) implica rendimento ABAIXO de 100% da Selic; deságio (preço abaixo do valor de face) implica rendimento ACIMA de 100% da Selic. A prova costuma inverter essa lógica para testar atenção." },
      { "t": "warn", "tag": "Debêntures", "txt": "Resgate antecipado é diferente de opção de compra: no resgate antecipado a dívida é EXTINTA definitivamente; na opção de compra a empresa pode manter os títulos em tesouraria e revendê-los depois. Ambas as cláusulas favorecem o EMISSOR, ao contrário do vencimento antecipado, que favorece o credor." },
      { "t": "info", "tag": "Incentivadas x Infraestrutura", "txt": "Nas Debêntures Incentivadas (Lei 12.431/11), o benefício fiscal é do INVESTIDOR pessoa física (isenção de IR). Nas Debêntures de Infraestrutura (Lei 14.801/24), o benefício fiscal passa a ser do EMISSOR (dedução de IRPJ/CSLL), e a tributação do investidor volta a ser a normal de renda fixa." },
      { "t": "danger", "tag": "Tesouro Direto", "txt": "Pessoa jurídica NÃO pode investir via Tesouro Direto — o programa é exclusivo para pessoas físicas. O limite de R$ 2 milhões por mês por CPF é só para COMPRAS; não há limite financeiro para vendas." }
    ],
    "conexoes": "<div class=\"content-body\"><h3>Fundamentos de Economia: Selic, IPCA e a Taxa Livre de Risco</h3><p>A remuneração da LFT (Selic diária) e da NTN-B (IPCA + juros real) só faz sentido plenamente para quem domina, em Fundamentos de Economia, o papel do Copom na definição da meta Selic e a dinâmica da inflação medida pelo IPCA. O candidato deve conseguir explicar a um cliente por que, em um ciclo de alta de juros, a LFT preserva capital (baixa volatilidade) enquanto a LTN e a NTN-B Principal sofrem marcação a mercado negativa.</p><h3>Análise de Projetos: a Taxa Livre de Risco como Benchmark de Desconto</h3><p>O módulo Análise de Projetos usa a taxa livre de risco como um dos pilares do custo de capital (WACC) para descontar fluxos de caixa. Aqui, em Renda Fixa I, essa mesma taxa livre de risco (LFT no curto prazo, NTN-F/NTN-B no longo prazo) aparece como benchmark para o spread de crédito de debêntures e CDBs — é o mesmo conceito de \"piso de remuneração\" olhado por dois ângulos: precificação de ativos de dívida de um lado, avaliação de projetos de investimento de outro.</p><h3>Planejamento de Aposentadoria I e II: Tesouro Renda+ e Educa+</h3><p>Ao montar um plano de aposentadoria, o planejador CFP precisa comparar o Tesouro Renda+ (conversão em renda por 20 anos) com um PGBL/VGBL — ambos entregam renda por prazo certo, mas um é título público de rentabilidade direta e outro é veículo de fundo com taxas de administração. Da mesma forma, o Tesouro Educa+ (renda por 5 anos) é uma alternativa direta a um plano de previdência com objetivo educacional, tema central em Planejamento de Aposentadoria I e II ao desenhar a alocação por objetivo do cliente.</p><h3>Fundamentos de Finanças: Valor do Dinheiro no Tempo na Precificação da LTN</h3><p>A fórmula de precificação da LTN — <code>PU = VF / (1+i)^(du/252)</code> — é uma aplicação direta do conceito de valor presente e capitalização composta ensinado em Fundamentos de Finanças. Um candidato que domina desconto de fluxos únicos naquele módulo resolve qualquer questão de precificação de título zero cupom aqui.</p><h3>Cenário Prático: Conversa com Cliente sobre Reserva de Emergência</h3><p>Um cliente pergunta onde alocar 6 meses de despesas como reserva de emergência. A resposta correta do planejador combina três pontos deste módulo: (1) Tesouro Selic (LFT) ou CDB de liquidez diária, por terem baixíssima volatilidade; (2) se optar por CDB, verificar a cobertura do FGC (limite de R$ 250.000 por CPF/instituição); (3) evitar LCI/LCA para esse fim específico, pois têm prazo mínimo de carência (6 ou 36 meses) incompatível com a necessidade de liquidez imediata de uma reserva de emergência.</p></div>"
  },
  8: {
    "titulo": "Gestão Financeira I",
    "exp": "<div class=\"content-body\"><h2>Finanças Pessoais, Educação Financeira e o Ponto Econômico Ótimo</h2><p>As <strong>finanças pessoais</strong> tratam da gestão organizada dos recursos financeiros de indivíduos ou famílias, envolvendo decisões sobre receitas, despesas, poupança, crédito e investimentos. O objetivo central é garantir o equilíbrio financeiro no curto prazo e a construção de segurança e patrimônio no longo prazo, alinhando consumo, endividamento e planejamento. O ponto de partida é sempre o orçamento e o fluxo de caixa, que permitem compreender a capacidade de poupança e orientar decisões conscientes sobre o uso do crédito.</p><h3>Educação Financeira Básica</h3><p>Consiste no conjunto de conhecimentos e práticas que permitem ao indivíduo compreender, planejar e administrar seus recursos financeiros de forma consciente — a base para decisões financeiras mais racionais ao longo da vida. É essencial para prevenir o endividamento excessivo e melhorar a qualidade das decisões financeiras.</p><p>Dado de prova: em 2019, o <strong>Banco Mundial</strong> constatou que mais de <strong>70 milhões de brasileiros</strong> consideravam impossível levantar cerca de <strong>R$ 2.500,00</strong> numa necessidade extrema. No mundo, somente outros sete países estão mais despreparados que o Brasil para o surgimento de infortúnios financeiros.</p><h3>O Ponto Econômico Ótimo</h3><p>Representa o momento em que o aumento de renda ou patrimônio deixa de trazer ganhos relevantes de felicidade e qualidade de vida — reflexo do princípio da <strong>utilidade marginal decrescente</strong>. Nos estágios iniciais da vida financeira, cada melhora de renda gera grande impacto no bem-estar; à medida que o patrimônio cresce, cada ganho adicional produz satisfação menor. Esse ponto é individual: depende de valores pessoais, estilo de vida e prioridades — não existe um número universal de <em>riqueza suficiente</em>. No planejamento financeiro, identificar esse ponto ajuda a alinhar dinheiro e propósito de vida, evitando que a busca por mais renda comprometa saúde, tempo e relações familiares.</p><h2>Orçamento e Fluxo de Caixa</h2><h3>Demonstrações Financeiras Pessoais</h3><p>São ferramentas que permitem organizar e compreender a situação financeira de um indivíduo ou família, assim como as empresas usam relatórios contábeis. As três principais são:</p><ul><li><strong>Balanço Patrimonial</strong>: posição financeira em um momento específico — ativos, passivos e patrimônio líquido.</li><li><strong>Fluxo de Caixa</strong>: registra entradas e saídas de dinheiro em um período, identificando padrões de consumo e capacidade de poupança.</li><li><strong>Orçamento</strong>: ferramenta de planejamento que projeta receitas e despesas futuras, ajudando na definição de prioridades e metas.</li></ul><h3>Construindo um Plano Orçamentário</h3><p>Na construção de um orçamento familiar, deve-se identificar custos fixos, custos variáveis e custos sensíveis à inflação; projetar o orçamento para os próximos 12 meses; e comparar as despesas reais com as projetadas sempre que possível. É fundamental considerar o impacto da inflação sobre o custo de vida: mesmo com renda estável, o aumento geral de preços eleva as despesas ao longo do tempo — se a renda não acompanhar esse movimento, há perda de poder de compra e o padrão de vida fica comprometido.</p><table class=\"data-table\"><thead><tr><th>Receitas</th><th>Despesas</th></tr></thead><tbody><tr><td>Salários</td><td>Custos fixos (aluguel, financiamentos, prêmios de seguros, pensão alimentícia...)</td></tr><tr><td>Receitas de juros</td><td>Custos variáveis (transporte, alimentação, telefone, internet, lazer, férias...)</td></tr><tr><td>Receitas de dividendos e aluguéis</td><td>Demais tipos de custos</td></tr><tr><td>Reembolso de impostos / outras receitas</td><td></td></tr></tbody></table><h3>Classificação das Despesas</h3><p>O profissional deve auxiliar o cliente a classificar corretamente suas despesas quanto à previsibilidade, ao caráter permanente ou rescindível, à periodicidade e à essencialidade — isso permite compreender como cada gasto evolui nas diferentes fases do ciclo de vida financeiro.</p><table class=\"data-table\"><thead><tr><th>Classificação</th><th>Características</th><th>Exemplos</th></tr></thead><tbody><tr><td>Fixo e rescindível</td><td>Valor previsível, prazo definido, desaparece após quitação</td><td>Financiamento imobiliário</td></tr><tr><td>Fixo e permanente</td><td>Recorrente e previsível, sem prazo natural de término</td><td>Condomínio, energia, água, plano de saúde</td></tr><tr><td>Variável e rescindível</td><td>Temporária, depende de circunstâncias específicas</td><td>Educação dos filhos, ajuda familiar, reformas</td></tr><tr><td>Variável e permanente</td><td>Varia de valor, mas tende a existir sempre no orçamento</td><td>Alimentação, transporte, saúde, lazer</td></tr><tr><td>Eventual ou sazonal</td><td>Ocorre em períodos específicos ou de forma esporádica</td><td>IPVA, material escolar, manutenção do imóvel</td></tr><tr><td>Discricionária x Essencial</td><td>Opcional (pode ser cortada sem comprometer sobrevivência) x necessária ao padrão básico de vida</td><td>Férias/lazer x moradia</td></tr></tbody></table><h3>Conciliação Orçamentária</h3><p>É o processo de comparar o orçamento planejado com os resultados financeiros efetivamente realizados. O orçamento funciona como ferramenta preditiva, mas a realidade financeira pode sofrer alterações por despesas inesperadas, mudanças de renda, inflação ou variações no comportamento de consumo. A conciliação identifica diferenças entre planejado e realizado — excessos, economias ou mudanças de padrão de gasto — e, quando feita periodicamente, transforma o orçamento em um instrumento dinâmico de gestão financeira, fortalecendo o controle sobre os gastos e aumentando a probabilidade de atingir os objetivos patrimoniais no longo prazo.</p><h3>Exemplo de Fluxo de Caixa Mensal</h3><p>Considere um casal, João e Maria, que organiza seu fluxo de caixa mensal:</p><table class=\"data-table\"><thead><tr><th>(1) Entradas</th><th>Valor</th></tr></thead><tbody><tr><td>Salário de João (líquido)</td><td>R$ 15.000,00</td></tr><tr><td>Salário de Maria (líquido)</td><td>R$ 8.000,00</td></tr><tr><td><strong>Total de Entradas</strong></td><td><strong>R$ 23.000,00</strong></td></tr></tbody></table><table class=\"data-table\"><thead><tr><th>(2) Saídas</th><th>Valor</th></tr></thead><tbody><tr><td>Casa (água, luz, telefone...)</td><td>R$ 3.000,00</td></tr><tr><td>Automóveis (combustível, impostos...)</td><td>R$ 2.000,00</td></tr><tr><td>Despesas pessoais</td><td>R$ 2.000,00</td></tr><tr><td>Prêmios de seguros</td><td>R$ 500,00</td></tr><tr><td>Prestação financiamento do automóvel</td><td>R$ 1.500,00</td></tr><tr><td>Prestação financiamento imobiliário</td><td>R$ 3.000,00</td></tr><tr><td><strong>Total de Saídas</strong></td><td><strong>R$ 12.000,00</strong></td></tr></tbody></table><p><strong>Saldo Final (1 – 2) = 23.000 – 12.000 = R$ 11.000,00.</strong> Esse superávit mensal é o que o casal tem disponível para poupança, investimentos ou amortização extraordinária de dívidas.</p><h2>Planejamento e Estratégias do Fluxo de Caixa</h2><h3>Análise do Fluxo de Caixa</h3><p>É uma das ferramentas centrais do planejamento financeiro pessoal: organiza as movimentações financeiras de forma estruturada, classificando gastos por categoria, periodicidade e finalidade — usando planilhas, aplicativos ou softwares especializados para construir mapas de fluxo de caixa mensais e acumulados. Um conceito central é o <strong>mismatch de caixa</strong>: descompasso temporal entre o momento em que a renda é recebida e o momento em que as obrigações precisam ser pagas. Mesmo indivíduos com renda suficiente podem enfrentar dificuldades de liquidez caso suas despesas vençam antes da entrada de recursos.</p><h3>Diagnóstico Financeiro</h3><p>Após organizar as informações, o planejador realiza um diagnóstico do fluxo de caixa, identificando padrões de comportamento, riscos de liquidez e possíveis distorções orçamentárias:</p><ul><li><strong>Saldo de caixa líquido</strong>: diferença entre entradas e despesas em determinado período — indica superávit (capacidade de poupança) ou déficit (necessidade de ajuste).</li><li><strong>Gaps de liquidez</strong>: descompassos entre datas de recebimento e vencimentos das obrigações, exigindo planejamento de prazos, reservas de liquidez ou reorganização do calendário financeiro.</li><li><strong>Comprometimento da renda</strong>: proporção da renda destinada ao pagamento de despesas e dívidas.</li><li><strong>Instrumentos de ajuste</strong>: reorganização de prazos, renegociação de obrigações ou uso de fundos de contingência para evitar desequilíbrios financeiros.</li></ul><h3>Ajustes no Orçamento: Ciclo PDCA</h3><p>Após o diagnóstico, o plano de ação deve contemplar metas mensais de economia, redirecionamento de excedentes de caixa para instrumentos de liquidez diária ou fundos de reserva, e adoção de estratégias de contenção de despesas quando os gastos superarem as receitas. A metodologia utilizada para implementar essas medidas de forma estruturada é o <strong>ciclo PDCA</strong>, de melhoria contínua aplicada à gestão financeira:</p><ul><li><strong>P (Plan – Planejar)</strong>: definição de metas financeiras claras, como percentual de poupança mensal e limites de gastos no orçamento.</li><li><strong>D (Do – Executar)</strong>: aplicação das ações planejadas, incluindo redução de despesas e direcionamento de excedentes para reservas ou investimentos líquidos.</li><li><strong>C (Check – Controlar)</strong>: acompanhamento periódico do fluxo de caixa, verificando se as metas estão sendo cumpridas.</li><li><strong>A (Act – Agir)</strong>: realização de ajustes corretivos no planejamento, especialmente quando surgirem desvios, mudanças de renda ou novas prioridades financeiras.</li></ul><h3>Definição de Objetivos e Alocação de Caixa</h3><p>Após organizar e ajustar o fluxo de caixa, o próximo passo é direcionar os recursos disponíveis para objetivos financeiros claros e bem definidos, conectados às metas do cliente (formação de reserva de emergência, aquisição de bens, construção de patrimônio):</p><ul><li><strong>Metodologia SMART</strong>: as metas devem ser específicas (S), mensuráveis (M), alcançáveis (A), relevantes (R) e definidas no tempo (T), garantindo que os objetivos financeiros sejam claros e acompanháveis.</li><li><strong>Horizonte temporal dos recursos</strong>: o dinheiro deve ser organizado conforme o prazo dos objetivos — curto prazo (liquidez e segurança), médio prazo (projetos e aquisição de bens) e longo prazo (aposentadoria e acumulação patrimonial).</li><li><strong>Backtesting</strong>: análise de como determinada estratégia teria se comportado em cenários passados, utilizando dados históricos para avaliar sua consistência.</li><li><strong>Stress testing financeiro</strong>: simulações que testam a resistência do planejamento diante de eventos adversos, como desemprego, incapacidade temporária, aumento da inflação ou choques econômicos.</li></ul><h3>Monitoramento e Indicadores (KPIs)</h3><p>O planejamento financeiro deve ser tratado como um processo dinâmico e contínuo, não como um plano fixo elaborado apenas uma vez. Os principais mecanismos de acompanhamento são:</p><ul><li><strong>Relatórios periódicos de fluxo de caixa</strong>: análise mensal das receitas, despesas e liquidez, permitindo identificar padrões e antecipar desequilíbrios financeiros.</li><li><strong>Indicadores-chave de performance (KPIs)</strong>: taxa de poupança (saving rate), patrimônio líquido consolidado e taxa de crescimento do capital.</li><li><strong>Revisão periódica da carteira</strong>: análise e eventual rebalanceamento dos investimentos, garantindo alinhamento com o perfil (API) e os objetivos financeiros.</li><li><strong>Revisão estratégica do planejamento</strong>: reavaliação anual ou semestral das premissas do plano, considerando mudanças de renda, novos objetivos ou alterações no perfil do investidor.</li></ul><h2>Poupança, Reserva de Emergência e Alocação por Prazo</h2><h3>Capacidade de Poupança</h3><p>Também chamada de índice de poupança, representa o resultado da diferença entre o total de receitas e o total de despesas, indicando o quanto a família consegue guardar de sua renda ao longo do tempo. Aportes mensais em CDB, VGBL e PGBL, por exemplo, devem ser tratados como aportes em investimentos, e não como saídas de recursos, no cálculo desse indicador. Quando as receitas são maiores que as despesas, há capacidade de poupança; quando as despesas superam as receitas, a família enfrenta desequilíbrio financeiro, sendo frequentemente obrigada a contrair dívidas ou vender ativos para se manter.</p><p><code>Índice de Poupança = Resultado do Orçamento Doméstico / Receitas</code></p><p><strong>Exemplo:</strong> Rafael tem renda líquida de R$ 9.000,00 e consegue investir todos os meses R$ 900,00. Seu Índice de Poupança é 900 / 9.000 = <strong>10%</strong>.</p><h3>A Importância de Poupar</h3><p>A poupança é fundamental para a estabilidade financeira, pois permite a formação de uma reserva de caixa destinada a proteger o indivíduo ou a família contra imprevistos — perda de emprego, problemas de saúde ou aumento inesperado de despesas. A reserva funciona como um colchão financeiro, permitindo enfrentar períodos de instabilidade sem recorrer a crédito de alto custo. Para que essa proteção seja efetiva, a poupança não deve ser tratada como valor residual: recomenda-se que o valor destinado a ela seja definido previamente no orçamento mensal, com prioridade semelhante às demais despesas essenciais. A capacidade de poupar também depende da gestão do fluxo de caixa — manter um fluxo de caixa positivo, em que as receitas superem os gastos, é condição essencial para viabilizar aportes regulares.</p><h3>Reserva de Emergência</h3><p>Também chamada de Fundo de Emergência, é um valor financeiro que deve estar aplicado em investimentos de alta liquidez, conversíveis em dinheiro rapidamente e sem variações bruscas — como LFT (Tesouro Selic), CDB de liquidez diária, poupança ou fundos de renda fixa de curto prazo. Seu objetivo é suprir imprevistos (batida de carro, problemas de saúde, desemprego) sem que seja necessária a tomada de empréstimos com taxas extremamente altas ou a venda de patrimônio de longo prazo.</p><p>O valor aconselhável é de <strong>3 a 12 meses das despesas correntes</strong> — e não da renda.</p><p><strong>Exemplo:</strong> uma família com renda de R$ 10 mil por mês e custo de vida de R$ 5 mil deve analisar de 3 a 12 meses sobre os R$ 5 mil, ou seja, entre <strong>R$ 15 mil e R$ 60 mil</strong> para o fundo de emergência.</p><h3>Diversificação e Estratégia de Poupança</h3><p>Definir estratégias de poupança envolve decidir como os recursos serão alocados entre diferentes tipos de investimentos, considerando perfil de risco, objetivos financeiros e horizonte temporal, sempre à luz do princípio da diversificação — distribuir os recursos entre diferentes ativos para reduzir riscos e melhorar a eficiência da carteira, evitando concentração excessiva em um único investimento.</p><p><strong>Exemplo:</strong> um cliente com objetivo de aposentadoria em 25 anos pode distribuir seus aportes entre Tesouro IPCA+ (proteção contra inflação), previdência privada (planejamento de longo prazo) e fundos de ações ou ETFs (maior potencial de crescimento), equilibrando segurança e rentabilidade ao longo do tempo.</p><h3>Investimentos Adequados ao Prazo dos Objetivos</h3><p>A escolha dos investimentos deve considerar principalmente o prazo do objetivo, pois cada horizonte temporal exige combinações diferentes de liquidez, risco e rentabilidade.</p><table class=\"data-table\"><thead><tr><th>Prazo do objetivo</th><th>Características da alocação</th><th>Produtos financeiros</th><th>Exemplos de objetivos</th></tr></thead><tbody><tr><td>Curto prazo (até 2 anos)</td><td>Alta liquidez e baixo risco</td><td>Contas remuneradas, CDBs de liquidez diária, Tesouro Selic</td><td>Reserva de emergência, viagens, troca de veículo</td></tr><tr><td>Médio prazo (3 a 5 anos)</td><td>Equilíbrio entre liquidez e rentabilidade</td><td>CDBs com vencimento, LCIs, LCAs, Tesouro IPCA+, fundos de renda fixa</td><td>Entrada de imóvel, reforma da casa, abertura de negócio</td></tr><tr><td>Longo prazo (acima de 5 anos)</td><td>Maior tolerância a risco e foco em crescimento patrimonial</td><td>Tesouro IPCA+ longo prazo, previdência privada (PGBL/VGBL), ações, ETFs</td><td>Aposentadoria, educação dos filhos, independência financeira</td></tr></tbody></table><h2>Balanço Patrimonial Pessoal</h2><h3>Definição e Patrimônio Líquido</h3><p>O balanço patrimonial pessoal apresenta a situação econômica de um indivíduo ou família em um determinado momento — organiza tudo o que a pessoa possui (ativos) e tudo o que deve (passivos), funcionando como uma <em>fotografia</em> da vida financeira. A partir dessa estrutura, calcula-se o <strong>patrimônio líquido</strong>, a diferença entre ativos e passivos, que indica quanto realmente pertence ao indivíduo após a quitação de todas as dívidas. No planejamento financeiro, o balanço patrimonial é fundamental para entender a evolução da riqueza ao longo do tempo, identificar riscos de endividamento e orientar decisões relacionadas a consumo, investimento e acumulação de patrimônio.</p><p><code>Patrimônio Líquido (PL) = Ativos − Passivos</code></p><h3>Ativos</h3><p>Representam todos os bens e direitos com valor econômico pertencentes ao indivíduo, classificados conforme finalidade de uso e prazo de realização:</p><ul><li><strong>Bens de uso</strong>: destinados ao uso pessoal ou familiar — residência própria, veículos da família, casa de veraneio.</li><li><strong>Bens de não uso</strong>: mantidos com objetivo de investimento, geração de renda ou valorização — aplicações financeiras, imóveis para aluguel.</li><li><strong>Ativo circulante (curto prazo)</strong>: recursos com alta liquidez, conversíveis em dinheiro em prazo menor que um ano — saldo em conta, aplicações financeiras, créditos a receber.</li><li><strong>Ativo não circulante (longo prazo)</strong>: ativos com prazo de vencimento maior que um ano — imóveis, participações em empresas, investimentos de longo prazo.</li></ul><h3>Passivos</h3><p>Também chamados de <strong>exigíveis</strong>, representam todas as obrigações financeiras assumidas por um indivíduo ou família — dívidas e compromissos que exigirão pagamento futuro, impactando o fluxo de caixa e o nível de endividamento:</p><ul><li><strong>Passivo circulante (curto prazo)</strong>: obrigações com vencimento próximo — faturas de cartão de crédito, contas a pagar, empréstimos de curto prazo e parcelas de financiamentos.</li><li><strong>Passivo não circulante (longo prazo)</strong>: dívidas com prazo de pagamento mais longo — financiamentos imobiliários, financiamentos de veículos ou empréstimos de longo prazo.</li></ul><h3>Exemplo de Balanço Patrimonial</h3><table class=\"data-table\"><thead><tr><th>Ativo</th><th>Valor</th></tr></thead><tbody><tr><td>Veículos da família (bem de uso)</td><td>R$ 100 mil</td></tr><tr><td>Residência familiar (bem de uso)</td><td>R$ 500 mil</td></tr><tr><td>Casa de veraneio (bem de uso)</td><td>R$ 200 mil</td></tr><tr><td>CDB liquidez diária (bem de não uso)</td><td>R$ 100 mil</td></tr><tr><td>Previdência VGBL (bem de não uso)</td><td>R$ 200 mil</td></tr><tr><td>Imóveis para locação (bem de não uso)</td><td>R$ 300 mil</td></tr><tr><td><strong>Total de Ativos</strong></td><td><strong>R$ 1,4 milhão</strong></td></tr></tbody></table><table class=\"data-table\"><thead><tr><th>Exigível Total (dívidas)</th><th>Valor</th></tr></thead><tbody><tr><td>Cartão de crédito</td><td>R$ 5 mil</td></tr><tr><td>Financiamento do carro</td><td>R$ 55 mil</td></tr><tr><td>Financiamento imobiliário</td><td>R$ 240 mil</td></tr><tr><td><strong>Total de Exigível</strong></td><td><strong>R$ 300 mil</strong></td></tr></tbody></table><p><strong>Patrimônio Líquido = Ativos − Passivos = 1.400.000 − 300.000 = R$ 1,1 milhão.</strong> Conferência: PL + Exigível Total = 1.100.000 + 300.000 = R$ 1,4 milhão = Total de Ativos.</p><h3>Análise da Composição Patrimonial</h3><p>O profissional deve avaliar a estrutura de ativos e passivos para identificar riscos patrimoniais, concentração de investimentos e limitações de liquidez, propondo ajustes quando necessário:</p><ul><li><strong>Concentração patrimonial</strong>: excesso de recursos em um único ativo ou classe (ex.: imóveis ou um único tipo de investimento).</li><li><strong>Baixa diversificação</strong>: ausência de ativos alternativos que possam melhorar a relação entre risco e retorno.</li><li><strong>Restrição de liquidez</strong>: patrimônio concentrado em ativos de difícil conversão em caixa, limitando a realocação de recursos.</li><li><strong>Ajustes estratégicos</strong>: aumentar a participação de ativos líquidos e geradores de renda passiva, reduzindo concentrações excessivas.</li><li><strong>Alinhamento ao planejamento</strong>: revisar a estrutura patrimonial considerando perfil de risco, objetivos financeiros e ciclo de vida do cliente.</li></ul><p>No exemplo acima, note a forte concentração em bens de uso (R$ 800 mil de R$ 1,4 milhão, ou seja, 57% do patrimônio) — um planejador identificaria essa baixa liquidez relativa como ponto de atenção, mesmo com patrimônio líquido elevado.</p><h2>Principais Indicadores Financeiros</h2><p>A prova de CFP costuma cobrar cada um destes indicadores com um pequeno estudo de caso numérico. Todos partem dos mesmos dados de balanço patrimonial e fluxo de caixa vistos acima.</p><h3>Dívida sobre Patrimônio</h3><p>Mede o grau de alavancagem financeira: a relação entre o total de dívidas (passivos) e o patrimônio líquido, indicando quanto do capital utilizado provém de recursos de terceiros em comparação aos recursos próprios. Um valor igual a 1,0 indica que o montante de dívidas é equivalente ao patrimônio próprio; valores superiores a 1,0 mostram maior grau de alavancagem financeira.</p><p><code>Dívida sobre Patrimônio = Dívidas Totais / Patrimônio Líquido</code></p><p><strong>Exemplo:</strong> Bernardo possui R$ 200.000 em dívidas totais e R$ 150.000 de patrimônio líquido. Dívida sobre Patrimônio = 200.000 / 150.000 = <strong>1,33</strong>.</p><h3>Índice de Endividamento</h3><p>Mede o grau em que os ativos totais de um indivíduo ou família são financiados por obrigações financeiras — a relação entre os exigíveis totais (todas as dívidas) e os ativos totais. Quanto maior o índice, maior a participação de capital de terceiros na estrutura patrimonial e, consequentemente, maior o risco financeiro.</p><p><code>Índice de Endividamento = Exigível Total / Ativos Totais</code></p><p><strong>Exemplo:</strong> Eduardo possui R$ 300.000 em ativos totais e R$ 120.000 em exigíveis totais. Índice de Endividamento = 120.000 / 300.000 = <strong>0,40 (40%)</strong> — indicando que 40% dos ativos foram financiados por dívidas.</p><h3>Índice de Solvência</h3><p>Avalia a capacidade de honrar todas as obrigações financeiras considerando um cenário hipotético de liquidação total do patrimônio: se todos os ativos fossem convertidos em recursos financeiros, seria possível quitar integralmente todas as dívidas existentes?</p><p><code>Índice de Solvência = Ativos Totais / Passivos Totais</code></p><p><strong>Exemplo:</strong> Rafael possui R$ 900.000 em ativos totais (imóveis, investimentos e saldo em conta) e R$ 600.000 em passivos totais. Índice de Solvência = 900.000 / 600.000 = <strong>1,5</strong>. Os ativos são 1,5 vezes superiores às dívidas, sugerindo capacidade patrimonial suficiente para quitar todas as obrigações. Resultado inferior a 1,0 indicaria insolvência patrimonial.</p><h3>Índice de Liquidez Geral e Índice de Liquidez Corrente</h3><p>O <strong>Índice de Liquidez Geral (ou Global)</strong> mede a capacidade global de um indivíduo transformar seus ativos realizáveis de curto e longo prazo em recursos suficientes para quitar todas as suas obrigações financeiras. Um índice superior a 1,0 indica que os ativos realizáveis são suficientes para cobrir as dívidas; inferior a 1,0 sugere que o passivo supera a capacidade de conversão de ativos em recursos financeiros.</p><p><code>Índice de Liquidez Geral = Ativos Realizáveis (curto + longo prazo) / Dívidas Totais</code></p><p><strong>Exemplo:</strong> João possui R$ 800.000 em ativos realizáveis e R$ 500.000 em dívidas totais. Índice de Liquidez Geral = 800.000 / 500.000 = <strong>1,6</strong>.</p><p>Já o <strong>Índice de Liquidez Corrente</strong> verifica se os ativos de curto prazo (com liquidez) conseguem honrar as dívidas de curto prazo. Muitas famílias possuem patrimônio elevado, mas sem liquidez — em qualquer necessidade extrema, terão que vender ativos de longo prazo com deságio, gerando prejuízo por falta de planejamento.</p><p><code>Índice de Liquidez Corrente = Ativo Circulante / Passivo Circulante</code></p><p><strong>Exemplo:</strong> um indivíduo possui R$ 40.000 em ativos de curto prazo (saldo em conta e aplicações com liquidez diária) e R$ 25.000 em dívidas de vencimento próximo (cartão de crédito, parcelas de empréstimos). Índice de Liquidez Corrente = 40.000 / 25.000 = <strong>1,6</strong>.</p><h3>Custo da Dívida</h3><p>Representa a taxa média ponderada de juros paga sobre o conjunto das dívidas de um indivíduo ou família. Um custo da dívida elevado indica que o endividamento impõe carga financeira significativa sobre o orçamento, reduzindo o fluxo de caixa disponível e a capacidade de poupança.</p><p><code>Custo da Dívida = Juros e Encargos Pagos no Período / Dívidas Totais</code></p><p><strong>Exemplo:</strong> Rafael possui R$ 100.000 em dívidas totais e paga R$ 12.000 por ano em juros e encargos financeiros. Custo da Dívida = 12.000 / 100.000 = <strong>0,12 (12% ao ano)</strong>.</p><h3>Índice de Cobertura das Despesas Mensais</h3><p>Mede por quanto tempo um indivíduo ou família consegue manter seu padrão de vida utilizando apenas os recursos financeiros disponíveis, sem depender de novas entradas de renda. É amplamente utilizado na avaliação da reserva de emergência e da segurança financeira de curto prazo — recomenda-se cobertura de 6 a 12 meses de despesas.</p><p><code>Índice de Cobertura = Ativos Líquidos (Reservas) / Despesas Mensais</code></p><p><strong>Exemplo:</strong> Antônio possui R$ 60.000 em CDB com liquidez diária e suas despesas mensais somam R$ 5.000. Índice de Cobertura = 60.000 / 5.000 = <strong>12 meses</strong>.</p><h3>Coeficiente de Investimento</h3><p>Mede a proporção do patrimônio total que está alocada em ativos com potencial de valorização ou geração de renda passiva. Diferentemente do índice de poupança, que se refere à parcela da renda destinada à formação de capital, este indicador analisa a composição do patrimônio já acumulado.</p><p><code>Coeficiente de Investimento = Ativos Investidos / Patrimônio Total × 100</code></p><p><strong>Exemplo:</strong> Gabriel possui patrimônio total de R$ 800.000, sendo R$ 500.000 investidos em ações, fundos e um imóvel para locação. Coeficiente de Investimento = 500.000 / 800.000 = <strong>0,625 (62,5%)</strong>.</p><h3>Ativos Financeiros sobre Total de Ativos</h3><p>Mede a proporção do patrimônio total que está alocada em ativos financeiros — Tesouro Direto, CDBs, LCIs, debêntures, ações e fundos de investimento — em contraste com bens de uso pessoal ou ativos não rentáveis, como veículos ou imóveis de uso próprio, que não geram fluxo de caixa direto.</p><p><code>Ativos Financeiros sobre Total de Ativos = Ativos Financeiros / Ativos Totais</code></p><p><strong>Exemplo:</strong> João possui patrimônio total de R$ 700.000, sendo R$ 210.000 aplicados em ativos financeiros. Indicador = 210.000 / 700.000 = <strong>0,30 (30%)</strong>.</p><h3>Coeficiente de Renda Passiva</h3><p>Mede a proporção da renda total de um indivíduo que é gerada por ativos que produzem fluxo de caixa recorrente — dividendos de ações, aluguéis de imóveis, rendimentos de fundos e juros sobre capital próprio — em comparação com a renda ativa (salários, honorários). Quanto maior o coeficiente, maior a autonomia financeira, pois o indivíduo depende menos do trabalho para manter sua renda — objetivo central das estratégias de independência financeira.</p><p><code>Coeficiente de Renda Passiva = Renda Passiva / Renda Total × 100</code></p><p><strong>Exemplo:</strong> um indivíduo recebe R$ 12.000 de salário mensal e R$ 3.000 provenientes de dividendos e aluguéis. Coeficiente de Renda Passiva = 3.000 / 15.000 = <strong>20%</strong>.</p></div>",
    "mapa": {
      "root": "Gestão Financeira I",
      "branches": [
        { "label": "Orçamento e Fluxo de Caixa", "icon": "💰", "color": "#d4a843", "children": [
          { "label": "Demonstrações financeiras pessoais", "detail": "Orçamento, fluxo de caixa e balanço patrimonial" },
          { "label": "Classificação das despesas", "detail": "Fixo/variável x rescindível/permanente; discricionária x essencial" },
          { "label": "Conciliação orçamentária", "detail": "Compara planejado x realizado periodicamente" },
          { "label": "Exemplo de fluxo de caixa", "detail": "Entradas 23.000 − Saídas 12.000 = Saldo 11.000" }
        ]},
        { "label": "Planejamento e Estratégias do Fluxo de Caixa", "icon": "🔄", "color": "#5b8fee", "children": [
          { "label": "Diagnóstico financeiro", "detail": "Saldo líquido, gaps de liquidez, comprometimento de renda" },
          { "label": "Ciclo PDCA", "detail": "Plan · Do · Check · Act aplicado ao orçamento" },
          { "label": "SMART + backtesting/stress test", "detail": "Metas específicas, mensuráveis; simulação de cenários adversos" },
          { "label": "KPIs de monitoramento", "detail": "Taxa de poupança, PL consolidado, revisão da carteira" }
        ]},
        { "label": "Poupança e Reserva de Emergência", "icon": "🐷", "color": "#4dbdaf", "children": [
          { "label": "Índice de poupança", "detail": "Resultado do orçamento / Receitas · ex.: 10%" },
          { "label": "Reserva de emergência", "detail": "3 a 12 meses das DESPESAS correntes, alta liquidez" },
          { "label": "Diversificação da poupança", "detail": "Distribuir aportes conforme risco e horizonte" },
          { "label": "Investimentos por prazo", "detail": "Curto: Selic/CDB · Médio: LCI/IPCA+ · Longo: ações/previdência" }
        ]},
        { "label": "Balanço Patrimonial Pessoal", "icon": "⚖️", "color": "#a855f7", "children": [
          { "label": "Ativos", "detail": "Bens de uso/não uso; circulante/não circulante" },
          { "label": "Passivos (exigíveis)", "detail": "Circulante (cartão) x não circulante (financiamentos)" },
          { "label": "Patrimônio líquido", "detail": "PL = Ativos − Passivos · ex.: 1,4MM − 300k = 1,1MM" },
          { "label": "Análise da composição", "detail": "Concentração, baixa diversificação, restrição de liquidez" }
        ]},
        { "label": "Indicadores Financeiros", "icon": "📊", "color": "#ef4444", "children": [
          { "label": "Dívida sobre Patrimônio", "detail": "Dívidas / PL · >1,0 = mais dívida que patrimônio próprio" },
          { "label": "Endividamento e Solvência", "detail": "Exigível/Ativos · Ativos/Passivos (>1,0 = solvente)" },
          { "label": "Liquidez Geral e Corrente", "detail": "Realizável total x dívidas · circulante x circulante" },
          { "label": "Cobertura, Investimento, Renda Passiva", "detail": "Meses de reserva; % patrimônio investido; % renda passiva" }
        ]}
      ]
    },
    "tags": ["orçamento", "fluxo de caixa", "balanço patrimonial", "patrimônio líquido", "reserva de emergência", "índice de poupança", "PDCA", "SMART", "índice de liquidez", "índice de endividamento", "índice de solvência", "custo da dívida", "coeficiente de investimento", "renda passiva", "ponto econômico ótimo", "finanças pessoais"],
    "fc": [
      { "q": "O que representa o ponto econômico ótimo no planejamento financeiro?", "a": "O momento em que aumentos de renda ou patrimônio deixam de gerar ganhos relevantes de bem-estar, refletindo a utilidade marginal decrescente. É individual e ajuda a alinhar dinheiro e propósito de vida, evitando sacrificar saúde e tempo em troca de mais renda." },
      { "q": "Qual a fórmula do índice de poupança e o que ele mede?", "a": "Índice de Poupança = Resultado do Orçamento Doméstico / Receitas. Mede o percentual da renda que a família consegue guardar. Aportes em CDB, VGBL e PGBL contam como investimento, não como despesa." },
      { "q": "Quantos meses de despesas a reserva de emergência deve cobrir, e sobre qual base (renda ou despesas)?", "a": "De 3 a 12 meses das DESPESAS CORRENTES — não da renda. Deve estar aplicada em ativos de alta liquidez (Tesouro Selic, CDB de liquidez diária) para suprir imprevistos sem recorrer a crédito caro ou venda de ativos de longo prazo." },
      { "q": "Qual a diferença entre uma despesa 'fixa e rescindível' e uma 'fixa e permanente'?", "a": "Fixa e rescindível tem valor previsível e prazo definido, desaparecendo após a quitação (ex.: financiamento imobiliário). Fixa e permanente é recorrente e previsível, mas sem prazo natural de término (ex.: condomínio, plano de saúde)." },
      { "q": "O que representa cada etapa do ciclo PDCA aplicado ao ajuste do orçamento?", "a": "P (Plan): definir metas de poupança e limites de gasto. D (Do): executar as ações, reduzindo despesas e direcionando excedentes. C (Check): acompanhar periodicamente o cumprimento das metas. A (Act): corrigir o planejamento diante de desvios ou mudanças de renda." },
      { "q": "O que significa cada letra da metodologia SMART na definição de objetivos financeiros?", "a": "Específicas (S), Mensuráveis (M), Alcançáveis (A), Relevantes (R) e definidas no Tempo (T) — garante que os objetivos financeiros sejam claros e acompanháveis." },
      { "q": "Qual a diferença entre Índice de Liquidez Geral e Índice de Liquidez Corrente?", "a": "O Geral (Global) considera ativos realizáveis de curto E longo prazo sobre o total de dívidas. O Corrente considera apenas o ativo circulante sobre o passivo circulante, medindo a capacidade de honrar somente as obrigações de curto prazo." },
      { "q": "Qual a diferença entre o Índice de Endividamento e o Índice de Solvência?", "a": "Endividamento = Exigível Total / Ativos Totais (quanto do patrimônio veio de dívida). Solvência = Ativos Totais / Passivos Totais (se a liquidação total dos ativos cobriria as dívidas); abaixo de 1,0 indica insolvência." },
      { "q": "O que mede o Coeficiente de Renda Passiva e por que é relevante para a independência financeira?", "a": "Mede a proporção da renda total gerada por ativos (dividendos, aluguéis, juros) em relação à renda ativa (salário). Quanto maior, menor a dependência do trabalho — é o indicador central das estratégias de independência financeira." },
      { "q": "Qual a diferença entre o Coeficiente de Investimento e o Coeficiente de Renda Passiva?", "a": "O Coeficiente de Investimento usa o PATRIMÔNIO TOTAL como base (ativos investidos / patrimônio total) e mede a composição do que já foi acumulado. O Coeficiente de Renda Passiva usa a RENDA TOTAL como base (renda passiva / renda total) e mede o fluxo gerado por esse patrimônio." }
    ],
    "q": [
      { "t": "Uma família possui os seguintes ativos: residência própria R$ 600.000, veículo R$ 80.000, aplicações financeiras de alta liquidez R$ 120.000 e previdência privada R$ 100.000. As dívidas somam: financiamento imobiliário R$ 250.000 e cartão de crédito R$ 10.000. Qual o Índice de Endividamento dessa família?", "o": ["A) 26,0%", "B) 28,9%", "C) 33,3%", "D) 21,7%"], "c": 1, "f": "Ativos Totais = 600.000 + 80.000 + 120.000 + 100.000 = R$ 900.000. Exigível Total = 250.000 + 10.000 = R$ 260.000. Índice de Endividamento = Exigível Total / Ativos Totais = 260.000 / 900.000 ≈ 0,289, ou 28,9%." },
      { "t": "Um indivíduo possui R$ 55.000 em ativos de curto prazo (conta corrente e CDB de liquidez diária) e dívidas de curto prazo somando R$ 20.000 (fatura de cartão e parcela de empréstimo pessoal). Qual o Índice de Liquidez Corrente e o que ele indica?", "o": ["A) 1,75 — ativos de curto prazo insuficientes", "B) 2,20 — cobertura parcial das dívidas de curto prazo", "C) 2,75 — ativos de curto prazo cobrem com folga as dívidas imediatas", "D) 3,75 — patrimônio de longo prazo elevado"], "c": 2, "f": "Índice de Liquidez Corrente = Ativo Circulante / Passivo Circulante = 55.000 / 20.000 = 2,75. Isso indica que os ativos de curto prazo são 2,75 vezes superiores às obrigações de vencimento próximo — situação confortável de liquidez imediata, distinta da liquidez geral (que incluiria ativos de longo prazo)." },
      { "t": "Uma família tem renda mensal de R$ 12.000 e despesas correntes mensais de R$ 7.000. Considerando a faixa recomendada de reserva de emergência (3 a 12 meses das despesas correntes), qual o intervalo de valores adequado para o fundo de emergência dessa família?", "o": ["A) R$ 36.000 a R$ 144.000", "B) R$ 21.000 a R$ 84.000", "C) R$ 7.000 a R$ 84.000", "D) R$ 21.000 a R$ 144.000"], "c": 1, "f": "A reserva de emergência deve ser calculada sobre as DESPESAS CORRENTES, não sobre a renda — erro comum cobrado em prova. 3 meses × 7.000 = R$ 21.000 (mínimo); 12 meses × 7.000 = R$ 84.000 (máximo). A renda de R$ 12.000 é irrelevante para esse cálculo, servindo apenas para o índice de poupança." },
      { "t": "Um casal possui R$ 180.000 em dívidas totais (financiamento imobiliário, financiamento de veículo e cartão parcelado) e paga, ao longo de um ano, R$ 27.000 em juros e encargos financeiros somados. Qual é o Custo da Dívida anual desse casal?", "o": ["A) 12% a.a.", "B) 15% a.a.", "C) 18% a.a.", "D) 21% a.a."], "c": 1, "f": "Custo da Dívida = Juros e Encargos Pagos / Dívidas Totais = 27.000 / 180.000 = 0,15, ou 15% a.a. Esse valor representa a taxa média ponderada de juros sobre o conjunto das dívidas — quanto maior, menor a capacidade de poupança do casal, pois mais recursos são consumidos apenas para pagar encargos." },
      { "t": "Uma pessoa possui patrimônio total de R$ 1.000.000, sendo R$ 650.000 em ativos com potencial de valorização ou renda (ações, fundos imobiliários e imóvel para locação). Sua renda mensal total é de R$ 20.000, dos quais R$ 6.000 vêm de aluguéis e dividendos. Quais são, respectivamente, o Coeficiente de Investimento e o Coeficiente de Renda Passiva dessa pessoa?", "o": ["A) 65% e 30%", "B) 30% e 65%", "C) 65% e 6%", "D) 6,5% e 30%"], "c": 0, "f": "Coeficiente de Investimento = Ativos Investidos / Patrimônio Total = 650.000 / 1.000.000 = 65% (base: patrimônio). Coeficiente de Renda Passiva = Renda Passiva / Renda Total = 6.000 / 20.000 = 30% (base: renda mensal). São indicadores com bases diferentes — um mede a composição do patrimônio acumulado, o outro mede o fluxo de renda gerado por ele — e a prova costuma inverter essas bases como pegadinha." }
    ],
    "al": [
      { "t": "danger", "tag": "Reserva de emergência: base é a despesa, não a renda", "txt": "A prova adora inverter esse dado: o cálculo de 3 a 12 meses é sempre sobre as <strong>despesas correntes</strong>, nunca sobre a renda bruta ou líquida. Uma família com renda de R$ 10 mil e despesas de R$ 5 mil deve ter reserva entre R$ 15 mil e R$ 60 mil — usar os R$ 10 mil no cálculo é o erro mais comum." },
      { "t": "danger", "tag": "Aportes em CDB/VGBL/PGBL não são despesas", "txt": "No cálculo do índice de poupança, aportes mensais em investimentos (CDB, VGBL, PGBL) devem ser tratados como <strong>investimento</strong>, não como saída/despesa do orçamento. Classificá-los como despesa reduz artificialmente a capacidade de poupança calculada." },
      { "t": "warn", "tag": "Liquidez Geral x Liquidez Corrente", "txt": "O Índice de Liquidez Geral usa ativos realizáveis de curto E longo prazo sobre o total de dívidas; o Índice de Liquidez Corrente usa apenas o ativo circulante sobre o passivo circulante. Confundir os dois é armadilha clássica — releia sempre se a questão fala em 'total' ou em 'curto prazo'." },
      { "t": "warn", "tag": "Coeficiente de Investimento x Coeficiente de Renda Passiva", "txt": "São indicadores com bases diferentes: Investimento usa o <strong>patrimônio total</strong> como denominador; Renda Passiva usa a <strong>renda total</strong>. A prova gosta de fornecer os dois valores e pedir para calcular ambos, invertendo o denominador de propósito." },
      { "t": "tip", "tag": "Mnemônico do PDCA", "txt": "Plan (metas) → Do (executar cortes/aportes) → Check (acompanhar o fluxo de caixa) → Act (corrigir desvios). É sempre um ciclo contínuo, não um evento único — o planejamento financeiro nunca 'termina' após o primeiro ajuste." }
    ],
    "conexoes": "<div class=\"content-body\"><h3>Fundamentos de Economia</h3><p>O impacto da inflação sobre o orçamento — discutido na construção do plano orçamentário e na necessidade de projetar despesas sensíveis à inflação para 12 meses — retoma diretamente os conceitos de inflação e poder de compra vistos em Fundamentos de Economia. Um orçamento que não reajusta despesas conforme o IPCA, por exemplo, gera perda real de padrão de vida mesmo com renda nominal estável.</p><h3>Fundamentos de Finanças</h3><p>O backtesting e o stress testing financeiro, usados para validar a estratégia de alocação de caixa, aplicam a mesma lógica de projeção de fluxos e valor do dinheiro no tempo estudada em Fundamentos de Finanças. Da mesma forma, o cálculo do índice de cobertura (reservas líquidas ÷ despesas mensais) e a escolha de produtos por prazo de liquidez retomam a relação entre risco, prazo e rentabilidade central àquele módulo.</p><h3>Sistema Financeiro Nacional</h3><p>Os produtos recomendados para a reserva de emergência e para objetivos de curto prazo — LFT/Tesouro Selic, CDB de liquidez diária, LCI e LCA — são os mesmos instrumentos de captação estudados em Sistema Financeiro Nacional. Entender a natureza de cada produto (renda fixa pública x privada, garantia do FGC) é pré-requisito para orientar corretamente a alocação por prazo apresentada neste módulo.</p><h3>Planejamento de Aposentadoria I e II</h3><p>A previdência privada (PGBL/VGBL) aparece aqui como bem de não uso no balanço patrimonial e como produto de longo prazo na estratégia de poupança — mas seu detalhamento tributário e regulatório completo é tratado nos módulos de Planejamento de Aposentadoria I e II. O Coeficiente de Renda Passiva, que mede a autonomia financeira em relação ao trabalho, é exatamente o indicador que evidencia se um cliente está pronto para a fase de usufruto estudada naqueles módulos.</p><h3>Cenário prático: diagnóstico financeiro completo de um cliente</h3><p>Um candidato ao CFP frequentemente recebe um caso combinando balanço patrimonial e fluxo de caixa de um cliente e precisa, na mesma questão, calcular o índice de poupança, verificar se a reserva de emergência é suficiente (3 a 12 meses de despesas correntes) e avaliar o índice de endividamento antes de recomendar novos investimentos. A ordem lógica é sempre a mesma: primeiro diagnosticar liquidez e endividamento pelo balanço, depois avaliar a capacidade de poupança pelo fluxo de caixa, para só então alocar novos recursos por prazo de objetivo.</p></div>"
  },
  9: {
    "titulo": "Gestão Financeira II",
    "exp": "<div class=\"content-body\"><h2>Alavancagem Financeira e Análise de Crédito</h2><p>A alavancagem financeira ocorre quando indivíduos ou empresas utilizam recursos de terceiros (empréstimos ou financiamentos) para antecipar consumo, realizar investimentos ou alcançar objetivos financeiros. Quando planejada, permite viabilizar objetivos relevantes (imóvel, educação, negócio); quando mal utilizada, compromete o equilíbrio das finanças pessoais. Por isso, é fundamental compreender como as instituições financeiras avaliam potenciais devedores.</p><h3>Fatores para avaliar potenciais devedores</h3><p>A análise de crédito busca avaliar capacidade e disposição do solicitante para honrar obrigações, formando o score de crédito. Os quatro fatores centrais são:</p><table class=\"data-table\"><tr><th>Fator</th><th>O que avalia</th><th>Efeito na condição de crédito</th></tr><tr><td>Histórico de crédito</td><td>Pontualidade, inadimplência/protestos, tempo de relacionamento</td><td>Bom histórico → taxas menores</td></tr><tr><td>Renda e capacidade de pagamento</td><td>Valor e estabilidade da renda, relação renda x despesas fixas</td><td>Renda estável e compatível → maior acesso</td></tr><tr><td>Nível de endividamento</td><td>Índice de comprometimento de renda (parcelas / renda líquida)</td><td>Quanto maior, maior o risco percebido</td></tr><tr><td>Garantias/colaterais</td><td>Existência de bens (reais) ou responsáveis (fidejussórias)</td><td>Reduz risco → taxas menores, prazos maiores</td></tr></table><p><strong>Garantias reais</strong> envolvem bens tangíveis (imóveis, veículos, aplicações financeiras) executáveis em caso de inadimplência. <strong>Garantias fidejussórias</strong> envolvem responsabilidade de terceiros (fiadores, avalistas). Exemplo: um cliente que oferece um imóvel de R$ 200.000 como garantia tende a obter taxas menores e prazos maiores do que um cliente sem garantia.</p><h2>Gestão de Crédito e do Endividamento</h2><h3>Níveis adequados de endividamento</h3><p>Não existe limite universal, mas diretrizes de referência amplamente usadas em prova:</p><ul><li>Comprometimento mensal total com dívidas: até <strong>cerca de 30%</strong> da renda líquida;</li><li>Dívidas de consumo (cartão, crédito pessoal): idealmente abaixo de <strong>20%</strong>;</li><li>Volume total de dívidas: idealmente até <strong>50%</strong> do patrimônio acumulado.</li></ul><p><strong>Exemplo:</strong> renda líquida de R$ 5.000 com parcelas de R$ 1.000 = comprometimento de 20% (saudável). Com parcelas de R$ 3.000 = comprometimento de 60% (elevado, reduz capacidade de novo crédito e aumenta risco ao credor).</p><h3>Diagnóstico do sobre-endividamento</h3><p>A análise deve considerar não só o valor total das dívidas, mas prazo, custo e finalidade. Dívidas de curto prazo e juros altos (cheque especial, rotativo do cartão) comprometem mais a saúde financeira do que financiamentos de longo prazo com garantia real (imobiliário). Sinais de <strong>sobre-endividamento</strong>: parcelamento de despesas essenciais, inadimplência recorrente, uso da reserva de emergência para pagar dívidas, incapacidade de gerar superávit mesmo com renda estável.</p><h3>Estratégias para gestão de dívidas</h3><ul><li><strong>Consolidação de dívidas:</strong> substituir várias dívidas por um único empréstimo com melhores condições, concentrando pagamentos em uma parcela — útil sobretudo para dívidas de cartão/linhas com juros elevados;</li><li><strong>Renegociação:</strong> buscar redução de juros ou ampliação de prazo junto ao credor para melhorar o fluxo de caixa;</li><li><strong>Amortização antecipada:</strong> pagamentos extras para reduzir o saldo devedor antes do vencimento, diminuindo o custo total.</li></ul><h2>Custo Efetivo Total (CET)</h2><h3>Conceito</h3><p>O CET é a taxa que engloba todos os encargos e despesas de uma operação de crédito ou arrendamento mercantil (pessoa física, ME ou EPP), conforme regulamentação do BACEN: juros, tributos (IOF), tarifas, seguros e demais custos. É o CET — e não a taxa de juros anunciada — que representa o custo real do crédito. Atenção: se os custos não forem financiados, são descontados do valor liberado ao tomador. Por determinação do BACEN, o CET anualizado deve ser convertido com base em <strong>365 dias corridos</strong>.</p><h3>IOF sobre operações de crédito</h3><p>O IOF-Crédito possui duas componentes:</p><ul><li><strong>0,38%</strong> sobre o valor do crédito, cobrado na liberação (pode ser financiado);</li><li><strong>0,0082% ao dia</strong> sobre o valor do crédito, limitado a 365 dias (teto de aproximadamente <strong>3,0% ao ano</strong>).</li></ul><p><strong>Exemplo:</strong> empréstimo de R$ 100.000: IOF fixo = 0,38% x 100.000 = R$ 380,00; IOF diário = 0,0082% x 100.000 = R$ 8,22/dia x 365 dias (teto) = R$ 3.000,00; Total = <strong>R$ 3.380,00</strong>.</p><h3>Seguro Prestamista</h3><p>Vinculado a operações de crédito (empréstimo pessoal, consignado, financiamentos, cartão), garante o pagamento do saldo devedor em caso de morte, invalidez permanente, desemprego involuntário ou incapacidade temporária, conforme apólice. É <strong>opcional</strong> na maioria das operações — diferente do seguro habitacional, obrigatório no financiamento imobiliário. Se o valor segurado superar o saldo devedor, o excedente é pago aos beneficiários após quitar o credor.</p><h3>Cálculo do CET — exemplo numérico (HP12C)</h3><p>Empréstimo de R$ 1.000, taxa anunciada de 3% a.m., pagamento único em 3 meses, com IOF de R$ 11,30 e demais despesas de R$ 50,00 financiadas.</p><table class=\"data-table\"><tr><th>Etapa</th><th>Cálculo HP12C</th><th>Resultado</th></tr><tr><td>1) Valor total a pagar (FV)</td><td>PV=1.061,30; PMT=0; n=3; i=3</td><td>FV = R$ 1.159,71</td></tr><tr><td>2) CET mensal</td><td>PV=1.000; PMT=0; n=3; FV=-1.159,71</td><td>i = 5,06% a.m.</td></tr><tr><td>3) CET anual (base 365 dias)</td><td>converte taxa diária e composta por 365 dias</td><td><strong>82,31% a.a.</strong></td></tr></table><p>Note como o CET (82,31% a.a. em termos de custo real) é muito superior à taxa de juros anunciada de 3% a.m. (~42,6% a.a. em juros simples de fachada), evidenciando o peso do IOF e das tarifas embutidas.</p><h2>Modalidades de Crédito Rotativo</h2><h3>Cheque Especial</h3><p>Limite de crédito pré-aprovado vinculado à conta corrente, utilizado automaticamente quando falta saldo. O valor não é recurso próprio do cliente; incidem juros e IOF sobre o saldo utilizado. Devido às taxas elevadas, recomendado apenas para necessidades emergenciais de curtíssimo prazo.</p><h3>Cartão de Crédito</h3><p>Instrumento de pagamento e crédito pós-pago, emitido por instituição financeira ou de pagamento, regulado pelo BACEN. Pode ser <strong>básico</strong> (só pagamentos) ou <strong>diferenciado</strong> (milhagem, seguros, benefícios). As instituições podem cobrar apenas cinco tarifas de pessoas físicas: anuidade, 2ª via, saque em espécie, pagamento de contas/boletos e avaliação emergencial de limite. No pagamento integral até o vencimento não há encargos; no parcelamento da fatura ou pagamento mínimo há incidência de juros e IOF. Não existe mais percentual mínimo obrigatório de 15% — cada instituição define seu mínimo.</p><h2>Empréstimos Pessoais</h2><p>Valor liberado uma única vez, livre utilização, com prazo, taxa e parcelas fixadas na contratação (cronograma fixo), diferente do crédito rotativo (limite que se renova conforme pagamentos).</p><h3>Empréstimo Consignado</h3><p>Parcelas descontadas diretamente em folha, aposentadoria ou benefício, o que reduz o risco de inadimplência e resulta em juros menores. Regulado pela Lei nº 10.820/2003; a Lei nº 14.432/22 ampliou o limite de comprometimento de renda para até <strong>40%</strong>, sendo <strong>35%</strong> para empréstimos/financiamentos/arrendamentos mercantis consignados e <strong>5%</strong> exclusivos para o cartão de crédito consignado. Pode ainda usar parte do FGTS como garantia adicional.</p><h3>Outras modalidades</h3><p><strong>Crédito automático:</strong> limite pré-aprovado com base no histórico, contratado rapidamente via canais digitais. <strong>Antecipação de recebíveis:</strong> antecipa valores já garantidos ao cliente (13º salário, restituição de IR), com juros menores por reduzir o risco ao credor — útil para substituir dívidas mais caras.</p><h2>Empréstimos com Garantia</h2><h3>Home Equity</h3><p>Empréstimo com garantia de imóvel (alienação fiduciária), com livre utilização dos recursos. O crédito concedido costuma corresponder a <strong>50% a 60%</strong> do valor de avaliação do imóvel, com taxas menores e prazos mais longos do que empréstimos sem garantia.</p><h3>Empréstimo com Garantia de Investimentos</h3><p>Aplicações (CDB, fundos, ações, títulos públicos) ficam vinculadas ao contrato, mas seguem rendendo. Vantajoso quando o investidor precisa de liquidez de curto prazo sem resgatar e perder rentabilidade.</p><h3>Penhor</h3><p>Direito real de garantia sobre bem móvel (joias, prataria, relógios), com posse transferida ao credor (Caixa Econômica Federal é a principal operadora). Liberação rápida, sem análise cadastral/avalista; limite de crédito pode chegar a 100% do valor avaliado; contrato renovável mediante pagamento dos encargos.</p><h2>Financiamentos</h2><h3>Financiamento Imobiliário: SFH x SFI</h3><table class=\"data-table\"><tr><th>Característica</th><th>SFH (Lei 4.380/1964)</th><th>SFI (Lei 9.514/1997)</th></tr><tr><td>Valor do imóvel</td><td>Limite atual de R$ 2,25 milhões</td><td>Sem limite</td></tr><tr><td>Taxa de juros</td><td>Limitada a 12% a.a. + TR</td><td>Livremente pactuada pelo mercado</td></tr><tr><td>Comprometimento de renda</td><td>Máximo 30% da renda familiar</td><td>Sem regra específica</td></tr><tr><td>Uso do FGTS</td><td>Permitido (moradia própria)</td><td>Permitido se atender aos requisitos do FGTS</td></tr></table><p>O <strong>seguro habitacional é obrigatório</strong> em ambos os sistemas, com duas coberturas: <strong>MIP</strong> (Morte e Invalidez Permanente — quita total ou proporcionalmente o saldo devedor) e <strong>DFI</strong> (Danos Físicos ao Imóvel — incêndio, explosão, desmoronamento, vendaval, inundação). Em financiamento com composição de renda, a indenização de MIP é proporcional à participação de cada mutuário.</p><h3>Financiamento de Veículos</h3><p>O veículo financiado serve de garantia (alienação fiduciária). Diferente do imóvel, o veículo se deprecia, exigindo atenção ao prazo e à entrada para evitar saldo devedor superior ao valor de mercado. O seguro do veículo não é obrigatório: em caso de roubo/perda total sem seguro, o financiamento continua devido mesmo sem o bem.</p><h3>Crédito Direto ao Consumidor (CDC)</h3><p>Financiamento para bens duráveis (veículos, eletrodomésticos, móveis), geralmente em parceria com a loja vendedora, com o próprio bem como garantia (alienação fiduciária). O BACEN também admite CDC para serviços (pacotes turísticos) e para bens do ativo imobilizado de empresas.</p><h2>Leasing (Arrendamento Mercantil)</h2><p>A arrendadora adquire o bem e o disponibiliza ao arrendatário mediante contraprestações periódicas, mantendo a propriedade durante o contrato. Ao final: comprar, renovar ou devolver o bem.</p><ul><li><strong>Leasing financeiro:</strong> semelhante a um financiamento, com opção de compra ao final; prazo mínimo de 2 anos (bens com vida útil até 5 anos) ou 3 anos (demais bens);</li><li><strong>Leasing operacional:</strong> mais parecido com uma locação, sem intenção inicial de compra; prazo mínimo de 90 dias.</li></ul><p>O descumprimento dos prazos mínimos <strong>descaracteriza</strong> a operação como compra e venda a prazo, com incidência de IOF. Leasing não possui IOF, mas possui ISS; contraprestações podem ser dedutíveis do IR para empresas no Lucro Real, e reduzem a imobilização de capital.</p><h3>Comparativo entre modalidades</h3><table class=\"data-table\"><tr><th></th><th>Empréstimo</th><th>Financiamento</th><th>Leasing</th></tr><tr><td>Liberação</td><td>Mais simples</td><td>Análise mais detalhada</td><td>Análise mais detalhada</td></tr><tr><td>Juros</td><td>Mais altos sem garantia</td><td>Mais baixos (bem = garantia)</td><td>Custo tende a ser menor</td></tr><tr><td>Prazos</td><td>Mais curtos</td><td>Mais longos</td><td>Curtos (operacional) / longos (financeiro)</td></tr><tr><td>Utilização dos recursos</td><td>Livre</td><td>Vinculada ao bem</td><td>Uso do bem, sem compra imediata</td></tr></table><p>Em todas as modalidades, o consumidor tem direito a quitar o débito antecipadamente, total ou parcialmente (fonte: BACEN).</p><h2>Outras Modalidades de Crédito</h2><h3>Consórcio</h3><p>Autofinanciamento coletivo organizado por administradoras fiscalizadas pelo BACEN, <strong>sem cobrança de juros</strong>; os custos são a taxa de administração (maior custo) e o fundo de reserva (devolvido em até 60 dias se não utilizado, ao final do grupo). A contemplação ocorre por sorteio ou lance (antecipação de parcelas): <strong>lance livre</strong> (vence o maior valor), <strong>lance fixo</strong> (definido pela administradora) e <strong>lance embutido</strong> (usa parte da própria carta de crédito). Em consórcios imobiliários, o FGTS pode ser usado para dar lances ou amortizar o saldo após a contemplação. Funciona como ferramenta de acumulação patrimonial \"forçada\".</p><h3>Crédito Rural</h3><p>Destinado a produtores rurais, cooperativas e demais envolvidos no setor. Finalidades classificadas pelo BACEN: <strong>custeio</strong> (despesas do ciclo produtivo), <strong>investimento</strong> (bens de uso plurianual, como máquinas), <strong>comercialização</strong> (armazenagem, transporte, venda) e <strong>industrialização</strong> (agroindústria por cooperativas/produtor).</p><h3>Repasses do BNDES</h3><p>Principal instrumento do Governo Federal para financiamento de longo prazo (infraestrutura, indústria, comércio, agropecuária, exportação, cultura). Não financia bens usados; equipamentos importados só sem similar nacional. Modalidades operacionais: <strong>direta</strong> (com o próprio BNDES/mandatário), <strong>indireta</strong> (via instituições credenciadas, ex.: Cartão BNDES) e <strong>mista</strong>.</p><table class=\"data-table\"><tr><th>Linha</th><th>Finalidade</th></tr><tr><td>BNDES Finame</td><td>Produção/aquisição de máquinas e equipamentos novos</td></tr><tr><td>Cartão BNDES</td><td>Crédito rotativo pré-aprovado para MPMEs e MEI</td></tr><tr><td>BNDES Automático</td><td>Projetos de investimento até R$ 150 milhões</td></tr><tr><td>BNDES Finem</td><td>Projetos de investimento acima de R$ 20 milhões</td></tr><tr><td>BNDES Microcrédito</td><td>Amplia acesso ao crédito de microempreendedores</td></tr><tr><td>BNDES Project Finance</td><td>Garantia lastreada no fluxo de caixa/recebíveis do projeto</td></tr></table><h3>Crédito Educacional</h3><table class=\"data-table\"><tr><th>Item</th><th>FIES (Modalidade I)</th><th>P-FIES (Modalidades II e III)</th></tr><tr><td>Taxa de juros</td><td>Zero</td><td>Varia por instituição</td></tr><tr><td>Renda familiar</td><td>Até 3 salários mínimos</td><td>Sem limite (até 5 s.m. na regra geral)</td></tr><tr><td>% financiado</td><td>50% a 100% da semestralidade</td><td>100% da semestralidade</td></tr><tr><td>Pagamento</td><td>Após conclusão do curso</td><td>Definido pela instituição financeira</td></tr></table><p>O <strong>PROUNI</strong> concede bolsas integrais ou de 50% em instituições privadas para quem não possui diploma de nível superior — não é financiamento, é concessão de bolsa. Já o <strong>financiamento privado</strong> é alternativa para quem não se enquadra nos programas públicos: a instituição paga a faculdade e o estudante quita depois, geralmente com juros mais altos.</p></div>",
    "mapa": {
      "root": "Gestão Financeira II — Crédito e Alavancagem",
      "branches": [
        { "label": "Análise de Crédito", "icon": "🔍", "color": "#3b82f6", "children": [
          { "label": "Histórico de crédito", "detail": "Pontualidade, inadimplência, tempo de relacionamento" },
          { "label": "Renda e capacidade de pagamento", "detail": "Valor, estabilidade e relação renda x despesas" },
          { "label": "Nível de endividamento", "detail": "Índice de comprometimento de renda" },
          { "label": "Garantias e colaterais", "detail": "Reais (bens) x fidejussórias (fiador/avalista)" }
        ]},
        { "label": "Gestão de Dívidas", "icon": "📊", "color": "#f59e0b", "children": [
          { "label": "Níveis saudáveis", "detail": "30% renda total, 20% consumo, 50% patrimônio" },
          { "label": "Sobre-endividamento", "detail": "Parcelar essenciais, usar reserva para pagar dívida" },
          { "label": "Consolidação de dívidas", "detail": "Unificar várias dívidas em um só empréstimo" },
          { "label": "Renegociação e amortização antecipada", "detail": "Reduzir juros, ampliar prazo ou quitar saldo" }
        ]},
        { "label": "Custo Efetivo Total (CET)", "icon": "💰", "color": "#ef4444", "children": [
          { "label": "Conceito", "detail": "Juros + tributos + tarifas + seguros; base 365 dias" },
          { "label": "IOF-Crédito", "detail": "0,38% na liberação + 0,0082%/dia (teto ~3% a.a.)" },
          { "label": "Seguro prestamista", "detail": "Cobre morte, invalidez, desemprego; opcional" },
          { "label": "Cálculo HP12C", "detail": "PV/FV/n/i mensal, depois anualizado" }
        ]},
        { "label": "Empréstimos e Financiamentos", "icon": "🏦", "color": "#10b981", "children": [
          { "label": "Cheque especial e cartão", "detail": "Crédito rotativo, juros altos, uso emergencial" },
          { "label": "Empréstimo pessoal e consignado", "detail": "Limite 40% renda (35%+5% cartão consignado)" },
          { "label": "Garantias (home equity, penhor)", "detail": "LTV 50-60% imóvel; penhor até 100% do bem" },
          { "label": "Imobiliário, veículo e CDC", "detail": "SFH x SFI; MIP/DFI; alienação fiduciária" }
        ]},
        { "label": "Outras Modalidades", "icon": "🌾", "color": "#8b5cf6", "children": [
          { "label": "Leasing", "detail": "Financeiro (2-3 anos) x operacional (90 dias)" },
          { "label": "Consórcio", "detail": "Sem juros; taxa de administração e fundo de reserva" },
          { "label": "Crédito rural e BNDES", "detail": "Custeio/investimento/comercialização; Finame, Finem" },
          { "label": "Crédito educacional", "detail": "FIES (juros zero), P-FIES, PROUNI (bolsa)" }
        ]}
      ]
    },
    "tags": ["crédito", "CET", "IOF", "endividamento", "consignado", "financiamento imobiliário", "SFH", "SFI", "leasing", "consórcio", "BNDES", "crédito rural", "crédito educacional", "FIES", "home equity", "score de crédito"],
    "fc": [
      { "q": "O que é o Custo Efetivo Total (CET) e por que ele é mais relevante que a taxa de juros anunciada?", "a": "É a taxa que reúne todos os encargos de uma operação de crédito (juros, IOF, tarifas, seguros); representa o custo real para o tomador, sendo mais relevante que a taxa de juros nominal isolada." },
      { "q": "Quais são os dois componentes do IOF sobre operações de crédito?", "a": "0,38% sobre o valor do crédito na liberação, mais 0,0082% ao dia sobre o valor do crédito, limitado a 365 dias (teto de aproximadamente 3% ao ano)." },
      { "q": "Qual a diferença entre garantias reais e garantias fidejussórias?", "a": "Reais envolvem bens tangíveis (imóvel, veículo, aplicações) executáveis em caso de inadimplência; fidejussórias envolvem responsabilidade de terceiros, como fiador ou avalista." },
      { "q": "Quais os limites de comprometimento de renda geralmente recomendados como diretriz de endividamento saudável?", "a": "Até cerca de 30% da renda líquida com o total de dívidas, até 20% com dívidas de consumo, e volume total de dívidas até cerca de 50% do patrimônio acumulado." },
      { "q": "Qual o limite de comprometimento de renda no empréstimo consignado após a Lei nº 14.432/22?", "a": "Até 40% da renda, sendo 35% para empréstimos/financiamentos/arrendamentos mercantis consignados e 5% exclusivos para o cartão de crédito consignado." },
      { "q": "Quais as duas coberturas obrigatórias do seguro habitacional em financiamentos imobiliários?", "a": "MIP (Morte e Invalidez Permanente, quita o saldo devedor) e DFI (Danos Físicos ao Imóvel, cobre incêndio, desmoronamento, vendaval, inundação, entre outros)." },
      { "q": "Qual a diferença entre leasing financeiro e leasing operacional quanto ao prazo mínimo?", "a": "Leasing financeiro: mínimo de 2 anos (bens com vida útil até 5 anos) ou 3 anos (demais); leasing operacional: prazo mínimo de 90 dias, sem intenção inicial de compra do bem." },
      { "q": "O que é o lance embutido no consórcio?", "a": "É a modalidade de lance em que o consorciado utiliza parte do valor da própria carta de crédito para ofertar o lance, aumentando a chance de contemplação." },
      { "q": "Qual a principal diferença entre SFH e SFI no financiamento imobiliário?", "a": "SFH tem limite de valor do imóvel (R$ 2,25 milhões), juros limitados a 12% a.a. + TR e comprometimento máximo de 30% da renda; SFI não tem limite de valor e as taxas são livremente pactuadas." }
    ],
    "q": [
      { "t": "Um cliente contrata um empréstimo de R$ 5.000,00, com taxa de juros anunciada de 2% ao mês, para pagamento em parcela única 4 meses após a contratação. Sobre a operação incide IOF de R$ 45,00 e demais tarifas de R$ 55,00, custos financiados pela instituição financeira. Qual é, aproximadamente, o Custo Efetivo Total (CET) mensal da operação?", "o": ["A) 2,00% a.m.", "B) 2,51% a.m.", "C) 3,00% a.m.", "D) 4,08% a.m."], "c": 1, "f": "O valor efetivamente financiado (incluindo custos) é PV = 5.000 + 45 + 55 = R$ 5.100,00. Aplicando a taxa anunciada: FV = 5.100 x (1,02)^4 = R$ 5.520,40. O CET mensal é a taxa 'i' que iguala o valor que o cliente realmente queria (R$ 5.000,00) a esse FV em 4 meses: 5.000 x (1+i)^4 = 5.520,40 → i = (5.520,40/5.000)^(1/4) − 1 ≈ 2,51% a.m. A taxa anunciada de 2% subestima o custo real porque o cliente recebe líquido apenas R$ 5.000, mas paga como se tivesse recebido R$ 5.100." },
      { "t": "Uma empresa contrata um empréstimo de R$ 50.000,00 com prazo de pagamento de 200 dias. Considerando a alíquota fixa de 0,38% sobre o valor do crédito mais 0,0082% ao dia, qual o valor total de IOF incidente sobre essa operação?", "o": ["A) R$ 820,00", "B) R$ 1.010,00", "C) R$ 1.190,00", "D) R$ 1.690,00"], "c": 1, "f": "Parcela fixa: 0,38% x 50.000 = R$ 190,00 (cobrada na liberação). Parcela diária: 0,0082% x 50.000 = R$ 4,10 por dia x 200 dias = R$ 820,00. Como 200 dias é menor que o teto de 365 dias, não se aplica o limite de ~3% a.a. Total de IOF = 190,00 + 820,00 = R$ 1.010,00." },
      { "t": "Um cliente possui renda líquida mensal de R$ 8.000,00 e as seguintes parcelas mensais: financiamento imobiliário de R$ 1.800,00, fatura de cartão de crédito de R$ 400,00 e empréstimo pessoal de R$ 200,00. Qual o índice de comprometimento de renda desse cliente e como essa situação se enquadra nas diretrizes gerais de endividamento?", "o": ["A) 20%; dentro do limite recomendado para dívidas de consumo", "B) 30%; no limite máximo geralmente recomendado para o comprometimento total de renda com dívidas", "C) 40%; acima do limite recomendado, indicando sobre-endividamento", "D) 60%; nível crítico de comprometimento de renda"], "c": 1, "f": "Comprometimento = (1.800 + 400 + 200) / 8.000 = 2.400 / 8.000 = 30%. Esse percentual está exatamente no teto geralmente recomendado (cerca de 30% da renda líquida) para o comprometimento total com dívidas. Vale notar que as dívidas de consumo isoladas (cartão + empréstimo pessoal = R$ 600,00) representam apenas 7,5% da renda, dentro do limite de 20% recomendado especificamente para esse tipo de dívida — o financiamento imobiliário, de longo prazo e com garantia real, é o que eleva o comprometimento total ao limite." },
      { "t": "Um trabalhador com carteira assinada recebe salário líquido de R$ 6.000,00 e deseja utilizar o máximo permitido em crédito consignado, incluindo o cartão de crédito consignado. Conforme a Lei nº 14.432/22, qual o valor máximo mensal total que pode ser comprometido e como ele se divide entre as modalidades?", "o": ["A) R$ 1.800,00 no total, sem divisão entre modalidades", "B) R$ 2.400,00 no total, sendo R$ 2.100,00 para empréstimos/financiamentos/arrendamentos e R$ 300,00 exclusivos para o cartão consignado", "C) R$ 2.400,00 no total, com livre distribuição entre as modalidades", "D) R$ 3.000,00 no total, correspondente a 50% da renda"], "c": 1, "f": "A Lei nº 10.820/2003, alterada pela Lei nº 14.432/22, elevou o limite de comprometimento de renda no crédito consignado para até 40% (40% x 6.000 = R$ 2.400,00), sendo 35% (35% x 6.000 = R$ 2.100,00) destinados a empréstimos, financiamentos e arrendamentos mercantis consignados, e 5% (5% x 6.000 = R$ 300,00) destinados exclusivamente ao cartão de crédito consignado — essa parcela de 5% não pode ser somada livremente à de empréstimos, cada uma tem seu próprio teto." }
    ],
    "al": [
      { "t": "danger", "tag": "Cheque especial", "txt": "Juros extremamente elevados por ser crédito rotativo sem garantia. Deve ser usado apenas para necessidades emergenciais e de curtíssimo prazo — nunca como fonte de crédito recorrente." },
      { "t": "warn", "tag": "CET em prova", "txt": "Sempre verifique se os custos (IOF, tarifas) são financiados pela instituição ou descontados na liberação do crédito — isso muda o valor de PV usado no cálculo do CET." },
      { "t": "tip", "tag": "Anualização do CET", "txt": "O BACEN exige que a conversão do CET anualizado seja feita com base em 365 dias corridos, não 360 — atenção a esse detalhe na HP12C." },
      { "t": "info", "tag": "Consórcio sem juros", "txt": "O consórcio não cobra juros, mas tem custo via taxa de administração (o maior custo) e fundo de reserva — não confundir 'sem juros' com 'sem custo'." },
      { "t": "warn", "tag": "Financiamento de veículo", "txt": "Veículos se depreciam ao longo do tempo; prazos longos e entradas baixas podem gerar saldo devedor maior que o valor de mercado do bem. Além disso, o seguro do veículo não é obrigatório: em caso de roubo ou perda total sem seguro, o financiamento continua devido." }
    ],
    "conexoes": "<div class=\"content-body\"><h3>Gestão Financeira I</h3><p>Este módulo é a continuidade direta de Gestão Financeira I: depois de estruturar orçamento, fluxo de caixa e reserva de emergência, o planejador passa a avaliar quando e como o cliente deve se alavancar. Um cliente sem reserva de emergência que recorre ao cheque especial para cobrir despesas recorrentes é um sinal clássico de sobre-endividamento discutido aqui, e a solução volta a passar pelos fundamentos de orçamento do módulo anterior.</p><h3>Fundamentos de Finanças</h3><p>O cálculo do CET (PV, FV, i, n na HP12C) é uma aplicação direta do valor do dinheiro no tempo estudado em Fundamentos de Finanças. A conversão de taxas equivalentes (mensal para anual, com a regra do BACEN de 365 dias corridos) exige o mesmo domínio de juros compostos e taxas equivalentes x proporcionais cobrado naquele módulo — é comum a prova cobrar a mesma lógica de anualização em questões de CET.</p><h3>Sistema Financeiro Nacional</h3><p>A regulamentação do CET, do IOF-Crédito, do cartão de crédito e do consórcio é toda emanada do Banco Central do Brasil (BACEN) e do CMN, conforme estudado em Sistema Financeiro Nacional. O BNDES, tratado aqui como fonte de crédito de longo prazo, é também uma instituição financeira pública estudada naquele módulo como braço de fomento do Governo Federal.</p><h3>Planejamento de Aposentadoria I e II</h3><p>O empréstimo consignado é especialmente relevante para aposentados e pensionistas do INSS, público central dos módulos de Planejamento de Aposentadoria. Um planejador deve saber que o desconto em folha do benefício previdenciário reduz o risco de crédito e melhora as condições, mas também deve alertar sobre o limite de 40% de comprometimento da renda (35% + 5% cartão consignado) para não comprometer a sustentabilidade do benefício na aposentadoria.</p><h3>Cenário prático: comprar ou financiar um imóvel para alugar</h3><p>Um candidato ao CFP frequentemente atende clientes que avaliam financiar um imóvel para investimento. A decisão envolve comparar o SFH (taxa limitada a 12% a.a. + TR, mas teto de valor e de renda comprometida) com o SFI (sem limites, taxa de mercado), verificar se o valor da parcela é compatível com o aluguel esperado, e sempre observar o CET real da operação — não apenas a taxa de juros anunciada — antes de recomendar a alavancagem.</p></div>"
  }
};

const MODS = [
  { id: 1, n: "01", name: "Sistema Financeiro Nacional", cfp_mod: 1 },
  { id: 2, n: "02", name: "Fundamentos de Economia", cfp_mod: 1 },
  { id: 3, n: "03", name: "Fundamentos de Finanças", cfp_mod: 1 },
  { id: 4, n: "04", name: "Planejamento de Aposentadoria I", cfp_mod: 4 },
  { id: 5, n: "05", name: "Planejamento de Aposentadoria II", cfp_mod: 4 },
  { id: 6, n: "06", name: "Análise de Projetos", cfp_mod: 2 },
  { id: 7, n: "07", name: "Renda Fixa I", cfp_mod: 2 },
  { id: 8, n: "08", name: "Gestão Financeira I", cfp_mod: 1 },
  { id: 9, n: "09", name: "Gestão Financeira II", cfp_mod: 1 }
];

const CFP_MOD_NAMES = {
  1: "Fundamentos de Economia e Finanças",
  2: "Gestão de Ativos e Investimentos",
  3: "Previdência",
  4: "Planejamento de Aposentadoria",
  5: "Gestão de Riscos e Seguros",
  6: "Planejamento Fiscal",
  7: "Planejamento Sucessório",
  8: "Ética e Legislação"
};

const META = {
  total: 9,
  gerado_em: "28/07/2026"
};
