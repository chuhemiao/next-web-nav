export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "加密货币和开发者最信任的导航",
  description: "最全的加密货币导航，最好的加密货币开发导航",
  mainNav: [
    {
      title: "iBuidl",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/ibuidl_2024",
    github: "https://github.com/ibuidl/tool-ibuidl",
  },
}

export interface NavLink {
  /** 站点图标 */
  icon?: string
  /** 站点名称 */
  title: string
  /** 站点名称 */
  desc?: string
  /** 站点链接 */
  link: string
}

type NavData = {
  title: string
  items: NavLink[]
}

export const NavData: NavData[] = [
  {
    title: "常用工具",
    items: [
      {
        icon: "/icons/ibuidl.png",
        title: "Web2快速转型Web3",
        desc: "90天，成为一个数字游民，web2 到 web3 的蜕变。",
        link: "https://www.ibuidl.org/zh",
      },
      {
        icon: "/icons/blockjob.jpg",
        title: "Block Job",
        desc: "Web3招聘、找工作，Block Job更快更精准！",
        link: "https://x.com/blockjob2022",
      },
      {
        icon: "/icons/seasmm.jpg",
        title: "SeaSMM",
        desc: "SeaSMM 提供优质的社交媒体营销服务，帮助提升您的线上影响力",
        link: "https://www.seasmm.com",
      },
      {
        icon: "https://crypto-fundraising.info/wp-content/themes/ico/img/cf-logo.svg",
        title: "Crypto Fundraising",
        desc: "加密货币融资平台",
        link: "https://crypto-fundraising.info/",
      },
      {
        icon: "/icons/cmc.jpeg",
        title: "CMC",
        desc: "最大的加密资产价格跟踪网站",
        link: "https://coinmarketcap.com/",
      },
      {
        icon: "/icons/cmc.jpeg",
        title: "coinmarkets Today",
        desc: "以柱状图的形式展示每日加密货币行情涨跌排行",
        link: "https://coinmarkets.today/",
      },
      {
        icon: "/icons/cmc.jpeg",
        title: "加密货币ETF",
        desc: "最好的加密货币ETF数据，涵盖了市面上几乎所有的品种。",
        link: "https://www.justetf.com/en/how-to/invest-in-crypto.html",
      },
      {
        icon: "/icons/micro.png",
        title: "财经m平方- 全球宏观数据",
        desc: "全球宏观成绩单，宏观表现，以及未来半年的预测，M平方关注的转折指标",
        link: "https://sc.macromicro.me/macro",
      },
      {
        icon: "/icons/micro.png",
        title: "萨姆规则衰退指标",
        desc: "当失业率的3个月平均值上升到过去12个月的最低值之上0.50个百分点时，就被认为是经济衰退的可能信号。",
        link: "https://fred.stlouisfed.org/series/SAHMCURRENT",
      },

      {
        icon: "/icons/golden.jpg",
        title: "Golden",
        desc: "加密货币的维基百科",
        link: "https://golden.com/home",
      },
      {
        icon: "/icons/tree.jpg",
        title: "Tree of alpha",
        desc: "最快的加密信息索引平台",
        link: "https://news.treeofalpha.com/",
      },
      {
        icon: "/icons/alternative-me-logo.png",
        title: "恐惧与贪婪指数",
        desc: "历史悠久的加密指数",
        link: "https://alternative.me/crypto/fear-and-greed-index/",
      },
      {
        icon: "/icons/nomos.jpg",
        title: "Nomos Labs",
        desc: "是一家专注于 Web3 生态系统的孵化器，旨在支持和培育创新和前瞻性的项目。",
        link: "https://mirror.xyz/0xBfB7A25AE4709F3f4363024F9d2a9C6A4379D4d0",
      },
      {
        icon: "/icons/artemis.jpeg",
        title: "公链的链上日活数据",
        desc: "ETH, BTC, SOL, SUI, NEAR等公链的活跃地址和钱包",
        link: "https://app.artemis.xyz/chains",
      },
      {
        icon: "/icons/theblock.jpeg",
        title: "比特币期货期权",
        desc: "稳定币，合约链上交易数据平台",
        link: "https://www.theblock.co/data/crypto-markets/spot",
      },
      {
        icon: "/icons/defillama.jpeg",
        title: "Defillama",
        desc: "Defi数据大全",
        link: "https://defillama.com/",
      },
      {
        icon: "/icons/dappradar.jpeg",
        title: "dappradar",
        desc: "dapp数据大全，游戏，NFT，热门合约等",
        link: "https://dappradar.com/rankings",
      },
    ],
  },

  {
    title: "链上数据",
    items: [
      {
        icon: "/icons/artemis.jpeg",
        title: "公链的链上日活数据",
        desc: "ETH, BTC, SOL, SUI, NEAR等公链的活跃地址和钱包",
        link: "https://app.artemis.xyz/chains",
      },
      {
        icon: "/icons/bubblemaps.png",
        title: "EVM和SOL系列的链上数据",
        desc: "支持以泡泡的形式连接每一个巨鲸，是etherscan的持仓排行的另一种。",
        link: "https://app.bubblemaps.io/eth/",
      },
      {
        icon: "/icons/vettafi.jpeg",
        title: "加密货币的ETF数据",
        desc: "美股比特币ETF以及合约期权",
        link: "https://etfdb.com/themes/blockchain-etfs/",
      },
      {
        icon: "/icons/growthepie.jpeg",
        title: "Layer2的数据分析平台",
        desc: "ETH生态L2的基本面和区块空间分析。一个是公共基金扶持的项目。",
        link: "https://www.growthepie.xyz/",
      },
      {
        icon: "/icons/geckoterminal.png",
        title: "geckoterminal",
        desc: "EVM和Layer2链上数据",
        link: "https://www.geckoterminal.com/",
      },
      {
        icon: "/icons/coingecko.jpeg",
        title: "加密货币数据追踪",
        desc: "和CMC相比，coingecko会细分更多领域和标签",
        link: "https://www.coingecko.com/",
      },
      {
        icon: "/icons/dune.jpeg",
        title: "Dune的数据面板",
        desc: "ETH2.0的质押和重新质押数据",
        link: "https://dune.com/hildobby/eth2-staking",
      },
      {
        icon: "/icons/nansen.jpeg",
        title: "Nansen ai",
        desc: "基于AI的数据平台，用来寻找alpha和热门合约等",
        link: "https://app.nansen.ai/",
      },
      {
        icon: "/icons/binance.jpeg",
        title: "币安研究报告",
        desc: "每个月，季度，热点项目币安都会出一些研究报告",
        link: "https://www.binance.com/en/research/analysis",
      },
      {
        icon: "/icons/tradingview.jpeg",
        title: "tradingview",
        desc: "加密货币K线看盘最佳工具",
        link: "https://www.tradingview.com/symbols/BTCUSD/#community",
      },
      {
        icon: "/icons/cryptoslam.jpeg",
        title: "cryptoslam",
        desc: "NFT链上数据",
        link: "https://www.cryptoslam.io/",
      },
      {
        icon: "/icons/cryptoslam.jpeg",
        title: "cryptofees",
        desc: "加密货币每日费用排行",
        link: "https://cryptofees.info/",
      },
      {
        icon: "/icons/baibaoxiang.jpeg",
        title: "币圈百宝箱",
        desc: "一个快速查询项目的工具，非常丰富的资料库，包含：公链、空投交互、项目任务、铭文等",
        link: "https://docs.google.com/spreadsheets/u/0/d/1WWqbgh6_Ph9nOu23OWACPD4VyuJmLZNNpK0zp9yRmQY/htmlview?pli=1#",
      },
      {
        icon: "/icons/sms.png",
        title: "短信在线接码平台",
        desc: "全直接短信接收，方便注册小号用。",
        link: "https://receive-smss.com/",
      },
      {
        icon: "/icons/cryptoslam.jpeg",
        title: "ethburned",
        desc: "ETH的销毁数据，自2.0以来",
        link: "https://ethburned.info/",
      },
      {
        icon: "/icons/tokenlock.jpeg",
        title: "代币解锁数据",
        desc: "最全的代币解锁数据，订阅可以获得每月的解锁状态",
        link: "https://token.unlocks.app/",
      },

      {
        icon: "/icons/coinglass.jpeg",
        title: "加密货币合约数据",
        desc: "加密衍生品数据分析平台，包含比特币期权、交易所资金费率等",
        link: "https://www.coinglass.com/zh",
      },
    ],
  },
  {
    title: "硬件钱包",
    items: [
      {
        icon: "/icons/coldcard.jpeg",
        title: "Coldcard",
        desc: "超级安全的比特币硬件钱包之一",
        link: "https://coldcard.com/",
      },
      {
        icon: "/icons/safepal.png",
        title: "safepal",
        desc: "支持多种加密货币的硬件钱包",
        link: "https://store.safepal.com/safepal-s1-hardware-wallet.html",
      },
    ],
  },
  {
    title: "软件钱包",
    items: [
      {
        icon: "/icons/metamask.png",
        title: "MetaMask",
        desc: "比较流行的，主要是用于与EVM系列的L1、L2进行交互的软件加密货币钱包。",
        link: "https://metamask.io/",
      },
      {
        icon: "/icons/unisat.jpeg",
        title: "unisat",
        desc: "比特币生态比较流行的钱包，支持Brc20，arc20等。",
        link: "https://unisat.io/",
      },
      {
        icon: "/icons/solflare.jpeg",
        title: "Solflare",
        desc: "Solana生态新晋的钱包，它可以加速你的交易。",
        link: "https://solflare.com/",
      },
      {
        icon: "/icons/trustwallet.png",
        title: "Trust Wallet",
        desc: "支持多链，可信度高，🔐。曾经开源领域最好的纸钱包，目前被binance收购。",
        link: "https://trustwallet.com/",
      },
      {
        icon: "/icons/safe.jpg",
        title: "Safe",
        desc: "多签钱包领域发展比较早的钱包厂家之一，安全度、可信度都不错。",
        link: "https://safe.global/",
      },
      {
        icon: "/icons/plugwallet.png",
        title: "plugwallet",
        desc: "ICP生态的钱包，或者直接使用NNS。",
        link: "https://plugwallet.ooo/",
      },
      {
        icon: "/icons/subwallet.jpeg",
        title: "subwallet",
        desc: "波卡生态的钱包，支持手机版和插件。",
        link: "https://www.subwallet.app/",
      },
      {
        icon: "/icons/daedaluswallet.jpg",
        title: "ADA Wallet",
        desc: "ADA生态最早的钱包之一，开源，安全性还不错。",
        link: "https://daedaluswallet.io/",
      },
      {
        icon: "/icons/coinbasewallet.png",
        title: "Coinbase Wallet",
        desc: "美国上市公司开发的开源钱包，海外比较流行。",
        link: "https://wallet.coinbase.com/",
      },
      {
        icon: "/icons/martianwallet.jpg",
        title: "Martian Wallet",
        desc: "MOVE生态的钱包开发商，支持apt、sui",
        link: "https://martianwallet.xyz/",
      },
      {
        icon: "/icons/aptosconnect.jpg",
        title: "Aptosconnect Wallet",
        desc: "由apt基金会开发的钱包，Aptos 的帐户管理器，可以通过谷歌授权。",
        link: "https://aptosconnect.app/",
      },
    ],
  },
  {
    title: "交易所",
    items: [
      {
        icon: "/icons/binance.jpeg",
        title: "Binance - 币安",
        desc: "全球最大最广泛的加密货币交易所",
        link: "https://accounts.binance.com/en/register?ref=MKOOSEO4",
      },
      {
        icon: "/icons/okx.jpeg",
        title: "Okx",
        desc: "支持多种加密货币的硬件钱包",
        link: "https://www.okx.com/join/1871789",
      },
      {
        icon: "/icons/coinbase.png",
        title: "Coinbase Pro",
        desc: "合规的加密货币交易所",
        link: "https://www.coinbase.com/",
      },
      {
        icon: "/icons/bybit.jpeg",
        title: "Bybit",
        desc: "体验还不错的交易所，短暂支持国内认证！",
        link: "https://www.bybit.com/invite?ref=VPXW4ZN",
      },
      {
        icon: "/icons/kraken.jpg",
        title: "Kraken",
        desc: "支持法币、信用卡的美国交易所，交易界面很单一。",
        link: "https://pro.kraken.com/",
      },
    ],
  },
  {
    title: "前端和合约开发",
    items: [
      {
        icon: "https://developer.mozilla.org/apple-touch-icon.6803c6f0.png",
        title: "MDN | Web 开发者指南",
        desc: "Mozilla 的开发者平台，提供了大量关于 HTML、CSS 和 JavaScript 的详细文档以及广泛的 Web API 参考资料",
        link: "https://developer.mozilla.org/zh-CN",
      },
      {
        icon: "/icons/es6.png",
        title: "ES6 入门教程",
        desc: "《ECMAScript 6 入门教程》是一本开源的 JavaScript 语言教程，全面介绍 ECMAScript 6 新引入的语法特性",
        link: "https://es6.ruanyifeng.com/",
      },
      {
        icon: "/icons/typescript.png",
        title: "深入理解 TypeScript",
        desc: "《TypeScript Deep Dive》 是一本很好的开源书，从基础到深入，很全面的阐述了 TypeScript 的各种魔法",
        link: "https://jkchao.github.io/typescript-book-chinese/",
      },
      {
        icon: "/icons/rust.svg",
        title: "Rust语言圣经",
        desc: "一份高质量 Rust 教程",
        link: "https://course.rs",
      },
      {
        icon: "/icons/cookbook.jpg",
        title: "cookbook - 快速复制EVM合约的平台",
        desc: "里面涵盖了UNI v4、chainlink、zircuit、base等主流项目的合约。",
        link: "https://www.cookbook.dev/",
      },
      {
        icon: "/icons/solidity.svg",
        title: "Solidity 指南",
        desc: "一份高质量以太坊开发教程",
        link: "https://github.com/dukedaily/solidity-expert",
      },
      {
        icon: "/icons/aptos.jpg",
        title: "Aptos 指南",
        desc: "Aptos的社区文档",
        link: "https://aptos.guide/zh",
      },
      {
        icon: "/icons/solidity.svg",
        title: "Solidity 官方文档",
        desc: "学习Solidity 从0到1的最佳指南",
        link: "https://solidity-cn.readthedocs.io/zh/develop/",
      },
      {
        icon: "/icons/defillama.jpeg",
        title: "EVM所有主网和测试网",
        desc: "ChainList 是 EVM 网络的列表。可以查看 Chain ID 和 Network ID，从而连接到正确的链。",
        link: "https://chainlist.org/",
      },
      {
        icon: "/icons/sol.jpeg",
        title: "Solana中文开发教程",
        desc: "Solana中文开发教程旨在让更多的中文Solana开发者更好地上手在Solana上进行开发。",
        link: "https://www.solanazh.com/",
      },
    ],
  },
  {
    title: "水龙头🚰",
    items: [
      {
        title: "Ethereum Sepolia（Base、OP、ARB、Stark）",
        desc: "最早的加密货币服务商，提供多数EVM系测试网和主网节点和轻节点dapp创建",
        icon: "/icons/alchemy.png",
        link: "https://www.alchemy.com/faucets/ethereum-sepolia",
      },
      {
        title: "以太坊 API 端点",
        desc: "后起之秀，提供多链的服务商，一些项目初期会提供大部分节点，有RPC和API服务。",
        icon: "/icons/blockpi.jpeg",
        link: "https://blockpi.io/",
      },
      {
        title: "Quicknode",
        desc: "Pos节点服务商之一，支持的链比较多，稳定、比较大。",
        icon: "/icons/quicknode.png",
        link: "https://www.quicknode.com/",
      },
      {
        title: "Solfaucet",
        desc: "Solana Devnet 和 Testnet 的高级水龙头。",
        icon: "/icons/sol.jpeg",
        link: "https://solfaucet.com/",
      },
      {
        title: "Solana",
        desc: "SOL官方的水龙头",
        icon: "/icons/sol.jpeg",
        link: "https://faucet.solana.com/",
      },
      {
        title: "Solfaucet togatech",
        desc: "有史以来第一个Solana 主网水龙头！，主网账户需要有少量余额",
        icon: "/icons/sol.jpeg",
        link: "https://solfaucet.togatech.org/",
      },
      {
        title: "Ton faucet",
        desc: "Ton 官方提供的telegram机器人水龙头。",
        icon: "/icons/ton.jpeg",
        link: "https://t.me/testgiver_ton_bot",
      },
    ],
  },
  {
    title: "数字游民/远程工作",
    items: [
      {
        title: "Web3 career",
        desc: "web3工作收录平台，寻找你喜欢的工作和地区进行buidl。",
        icon: "/icons/web3career.jpeg",
        link: "https://web3.career/",
      },
      {
        title: "Dejob",
        desc: "亚太地区最大的WEB3招聘平台之一",
        icon: "/icons/dejob.jpeg",
        link: "https://www.dejob.top/",
      },
      {
        title: "Bondex",
        desc: "Web3 人才市场，通过提供游戏化体验和代币化奖励，或许会改变传统招聘模式。",
        icon: "/icons/bondex.jpg",
        link: "https://bondex.app/",
      },
      {
        title: "Remotive",
        desc: "顶尖人才可以轻松获取经过审查的科技公司提供的积极且完全远程的工作机会的地方。",
        icon: "/icons/remotive.jpeg",
        link: "https://remotive.com/",
      },
      {
        title: "Remoteok",
        desc: "寻找一个远程工作，工作在任何地方。",
        icon: "/icons/remoteok.jpeg",
        link: "https://remoteok.com/",
      },
      {
        title: "WWR",
        desc: "最好的远程工作者发布、寻找工作平台。",
        icon: "/icons/wwr.png",
        link: "https://weworkremotely.com/",
      },
      {
        title: "Crypto Jobs",
        desc: "web2 转向 web3的工作平台。",
        icon: "/icons/cryptojobs.jpeg",
        link: "https://crypto.jobs/",
      },
      {
        title: "Cryptojobs list",
        desc: "工作在web3和加密货币，一个meme加密货币工作列表。",
        icon: "/icons/cryptojobslist.png",
        link: "https://cryptojobslist.com/",
      },
      {
        title: "Remoteok",
        desc: "寻找一个远程工作，工作在任何地方。",
        icon: "/icons/remoteok.jpeg",
        link: "https://remoteok.com/",
      },
      {
        title: "Indiebuidl",
        desc: "90天，成为一个数字游民，web2 到 web3 的蜕变。",
        icon: "/icons/indiebuidl.jpeg",
        link: "https://www.indiebuidl.com/",
      },
      {
        title: "annas archive",
        desc: "人类历史上最大的真正开放图书馆。",
        icon: "/icons/annas.png",
        link: "https://annas-archive.org/",
      },
    ],
  },
  {
    title: "Meme",
    items: [
      {
        title: "Doge",
        desc: "最早的加密meme，以前都是打赏用的,或许有一天，马斯克带它上火星",
        icon: "/icons/doge.png",
        link: "https://dogecoin.com/",
      },
      {
        title: "Shib",
        desc: "第一个巨量发行的meme代币，不可复制的神话",
        icon: "/icons/shib.jpeg",
        link: "https://shib.io/",
      },
      {
        title: "Pepe",
        desc: "现存最具模因性的模因币。Doge已经度过了他们的日子，是 pepe 统治的时候了。",
        icon: "/icons/pepe.jpeg",
        link: "https://www.pepe.vip/",
      },
    ],
  },
  {
    title: "Layer2",
    items: [
      {
        title: "比特币L2 Watch",
        desc: "比特币生态Layer2的所有项目和状态",
        icon: "/icons/l2watch.png",
        link: "https://l2.watch/",
      },
      {
        title: "btceden",
        desc: "探索比特币的 Layer 2 和整个生态系统",
        icon: "/icons/btceden.svg",
        link: "https://www.btceden.org/",
      },
      {
        title: "ETH L2 进度和TVL",
        desc: "以太坊生态的Layer2项目，观察TVL锁仓，每个L2的阶段以及Layer3项目。",
        icon: "/icons/l2beat.jpeg",
        link: "https://l2beat.com/scaling/summary",
      },
    ],
  },
  {
    title: "GameFi",
    items: [
      {
        title: "Redstone",
        desc: "专为链上游戏和自治世界而全新构建的链，基于Op的底层和Mud的全链游戏协议",
        icon: "/icons/redstone.jpeg",
        link: "https://redstone.xyz/",
      },
      {
        title: "Gala",
        desc: "加密货币的娱乐之王，游戏、音乐、电影等娱乐设施的提供者",
        icon: "/icons/gala.jpeg",
        link: "https://gala.com/",
      },
      {
        title: "Shrapnel",
        desc: "是一款竞争激烈的 AAA 撤离射击游戏。",
        icon: "/icons/shrapnel.jpeg",
        link: "https://www.shrapnel.com/",
      },
      {
        title: "Matr1x Fire",
        desc: "Web3娱乐平台，提供一款Fire的FPS手机游戏",
        icon: "/icons/fire.jpeg",
        link: "https://matr1x.io/",
      },
      {
        title: "Gods Unchained",
        desc: "由Immutable主导的交易纸牌游戏",
        icon: "/icons/gods.jpeg",
        link: "https://godsunchained.com/",
      },
      {
        title: "Mythical",
        desc: "区块链和游戏交汇处的下一代游戏技术工作室。",
        icon: "/icons/mythical.jpeg",
        link: "https://mythicalgames.com/",
      },
    ],
  },
  {
    title: "SocialFi",
    items: [
      {
        title: "Farcaster",
        desc: "去中心化社交协议，无需许可即可构建和分发社交应用程序。",
        icon: "/icons/farcaster.png",
        link: "https://www.farcaster.xyz/",
      },
      {
        title: "Lens",
        desc: "以太坊上的开放社交网络协议。",
        icon: "/icons/lens.jpeg",
        link: "https://www.lens.xyz/",
      },
      {
        title: "DeSo",
        desc: "比较早的去中心化社交协议，从0到1开发，支持多个公链。",
        icon: "/icons/deso.png",
        link: "https://www.deso.com/",
      },
      {
        title: "Focus",
        desc: "Focus 是一种新型社交网络，融合了加密货币投机、社交媒体和生成人工智能。",
        icon: "/icons/focus.jpg",
        link: "https://focus.xyz/",
      },
    ],
  },
  {
    title: "AI工具",
    items: [
      {
        title: "Trendx",
        desc: "一款用于 AI 驱动的 Web3 趋势跟踪和智能交易的一体化平台。",
        icon: "/icons/trendx.jpeg",
        link: "https://app.trendx.tech/",
      },
    ],
  },
  {
    title: "优质作家",
    items: [
      {
        title: "Paradigm",
        desc: "币圈顶级加密资本的内容输出,用来观察行业和技术新趋势。",
        icon: "/icons/paradigm.jpeg",
        link: "https://www.paradigm.xyz/writing",
      },
      {
        title: "Commonpre Fix",
        desc: "一支由科学家和工程师组成的团队，致力于研究和实施区块链协议。",
        icon: "/icons/commonprefix.jpg",
        link: "https://www.commonprefix.com/research",
      },
      {
        title: "V神",
        desc: "ETH的创始人，币圈大佬，通过文章寻找财富密码。",
        icon: "/icons/vitalik.jpeg",
        link: "https://vitalik.eth.limo/",
      },
      //
      {
        title: "Chris Dixon",
        desc: "A16Z顶级合伙人, 读、写、拥有此书的作者，web3忠实拥护者。",
        icon: "/icons/cdixon.png",
        link: "https://cdixon.org/",
      },
      {
        title: "Jacob Horne",
        desc: "前Coinbase 员工，Jacob Horne 于 2020 年共同创立了 Zora，一个NFT的L2平台。",
        icon: "/icons/jacob.jpeg",
        link: "https://jacob.energy/index.html",
      },
      {
        title: "A16Z Future",
        desc: "A16Z旗下的内容平台，用来书写行业趋势以及投资标的的研究等。",
        icon: "/icons/future.jpeg",
        link: "https://future.com/",
      },
      {
        title: "Varun Srinivasan",
        desc: "去中心化网络 Farcaster的联合创始人，前cb、微软、yc员工。",
        icon: "/icons/varunsrinivasan.jpeg",
        link: "https://www.varunsrinivasan.com/writing/",
      },
      {
        title: "Glassnode",
        desc: "glassnode的研究报告，通过研报观察趋势和寻找新币的机会。",
        icon: "/icons/glassnode.jpeg",
        link: "https://insights.glassnode.com/",
      },
    ],
  },
  {
    title: "加密新闻",
    items: [
      {
        icon: "/icons/cointelegraph.jpeg",
        title: "Cointelegraph",
        desc: "一个加密货币信息网站",
        link: "https://cointelegraph.com/",
      },
      {
        icon: "/icons/bankless.jpeg",
        title: "Bankless",
        desc: "以Youtube和播客的形式在扩大加密货币的群体，付费会员值得拥有。",
        link: "https://www.bankless.com/",
      },
      {
        icon: "/icons/messari.jpeg",
        title: "Messari",
        desc: "专业加密货币研究机构和数据平台",
        link: "https://messari.io/",
      },
      {
        icon: "/icons/tree.jpg",
        title: "Tree of alpha",
        desc: "最快的加密信息索引平台",
        link: "https://news.treeofalpha.com/",
      },
      {
        icon: "/icons/nomos.jpg",
        title: "Nomos Labs",
        desc: "是一家专注于 Web3 生态系统的孵化器，旨在支持和培育创新和前瞻性的项目。",
        link: "https://mirror.xyz/0xBfB7A25AE4709F3f4363024F9d2a9C6A4379D4d0",
      },
      {
        icon: "/icons/ocmacro.jpeg",
        title: "美联储数据库 - FOMC",
        desc: "Fed以及各种宏观、利率数据",
        link: "https://ocmacro.com/fed",
      },
      {
        icon: "/icons/cmc.jpeg",
        title: "加密货币ETF",
        desc: "最好的加密货币ETF数据，涵盖了市面上几乎所有的品种。",
        link: "https://www.justetf.com/en/how-to/invest-in-crypto.html",
      },
      {
        icon: "/icons/micro.png",
        title: "财经m平方- 全球宏观数据",
        desc: "全球宏观成绩单，宏观表现，以及未来半年的预测，M平方关注的转折指标",
        link: "https://sc.macromicro.me/macro",
      },
      {
        icon: "/icons/wu.svg",
        title: "吴说",
        desc: "中文加密货币信息网站",
        link: "https://www.wublock123.com/",
      },
      {
        icon: "/icons/coindesk.png",
        title: "coindesk",
        desc: "古老的加密信息网站，加密共识大会举办方",
        link: "https://www.coindesk.com/",
      },
      {
        icon: "/icons/cointelegraph.jpeg",
        title: "bitscreener",
        desc: "加密货币热力图",
        link: "https://bitscreener.com/crypto-heat-maps",
      },
      {
        icon: "/icons/avator.jpg",
        title: "白总的加密货币周报",
        desc: "加密新闻扫盲，了解一些加密货币的最新趋势和寻找百倍密码的渠道。",
        link: "https://weekly.kkdemian.com/",
      },
      {
        icon: "/icons/avator.jpg",
        title: "白总的加密货币入门知识",
        desc: "5年前写的文档和一些币圈指南，所言仅为偏见，仅供参考。",
        link: "https://wiki.kkdemian.com/",
      },
    ],
  },
]
