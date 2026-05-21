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
  }
};

const MODS = [
  { id: 1, n: "01", name: "Sistema Financeiro Nacional", cfp_mod: 1 },
  { id: 2, n: "02", name: "Fundamentos de Economia", cfp_mod: 1 },
  { id: 3, n: "03", name: "Fundamentos de Finanças", cfp_mod: 1 }
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
  total: 3,
  gerado_em: "21/05/2026"
};
