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
};

const MODS = [
  { id: 1, n: "01", name: "Sistema Financeiro Nacional" },
  { id: 2, n: "02", name: "Fundamentos de Economia" }
];

const META = {
  total: 2,
  gerado_em: "19/05/2026"
};
