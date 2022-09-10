<template>
<!-- alpha时间线 -->
<Row class="alpha_timeline">
    <!-- story部分 -->
    <Row class="a_story" id="a_story">
        <Row class="a_st_title">
            <Col span="8"></Col>
            <Col span="8">
                <Row class="a_t_img"></Row>
            </Col>
            <Col span="8"></Col>
        </Row>
        <Row class="a_st_body">
            <Row class="body_text">
                <ul class="textbody" id="textslide" :style="{ transform: `translateY(${TxtUp})` }">
                    <li class="txtsidebg"></li>
                    <li>
                        <div class="storytxt01">
                            <div class="txtinside">
                                <div class="txtinsidetitle">始まりと終わりのプロローグ</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime01':istxtbodyanime,'txtbodyanimereverse01':istxtbodyanimereverse}">
                                    秋葉原を拠点に活動している発明サークル、未来ガジェット研究所（通称：ラボ）の設立者、岡部倫太郎はサークルメンバーで幼なじみの椎名まゆりとともに、
                                    ラジ館で行われる中鉢博士の講演へと足を運んだ。講演の最中、中鉢博士が提唱するタイムマシン理論に異議を唱えた岡部は、ひとりの少女に連れ出される。
                                    彼女の名は牧瀬紅莉栖。米国の科学誌に論文を発表するほどの才媛である。しかし──紅莉栖と別れた直後、ラジ館に悲鳴が響く。駆けつけた岡部が見たのは、先ほど知り合ったばかりの紅莉栖が、無惨にも血の海に沈んでいた姿であった。
                                    動転した岡部はラボのメンバーのダルこと橋田至に、事件の顛末をケータイでメールする。送信ボタンを押した瞬間、岡部の周囲が静寂に包まれ、秋葉原の街から人影が消えた。一瞬の混乱ののち、ようやく現実世界へと引き戻された岡部が見たのは、ラジ館に落着した人工衛星と思しき物体であった。
                                    ときに、2010年7月28日──ここより、運命石の扉(シュタインズ・ゲート)が開かれる。
                                </div>
                                <div v-if="txtbtn[0]" class="txtmorebtnbox">
                                    <Button  class="txtmorebtn" shape="circle" size="large" ghost @click="unfold"> 
                                        More 
                                        <Icon type="ios-arrow-forward" />
                                    </Button>
                                </div>
                                <div v-if="txtbtn[1]" class="txtclosebtnbox">
                                    <Button class="txtclosebtn" shape="circle" size="large" ghost @click="fold">            
                                        Close
                                        <Icon type="ios-arrow-back" />
                                    </Button>
                                </div>
                            </div>
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav01.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt02">
                            <div class="txtinside">
                                <div class="txtinsidetitle">時間跳躍のパラノイア</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime02':istxtbodyanime,'txtbodyanimereverse02':istxtbodyanimereverse}">
                                    中鉢博士の講演が行われたラジ館で、何者かによって刺殺された牧瀬紅莉栖。しかし、ATFで行われたセミナーに参加した岡部が目にしたのは、
                                    何事もなかったように講義する紅莉栖の姿であった。殺されたはずの紅莉栖が生きている──理解を超えた出来事に混乱する岡部であったが、
                                    変異はそれだけではなかった。 2000年ごろにインターネット上を騒がしたジョン・タイターという自称未来人。10年の時を経て、
                                    巨大掲示板“@ちゃんねる”に彼を名乗る人物が再び現れたが、岡部以外は誰ひとりとして彼の存在を覚えてはいなかった。
                                    岡部はフェイリスのいるメイド喫茶に向かう途中、希少なレトロPC“IBN5100”を探している桐生萌郁と出会う。
                                    ラボに戻った岡部は電話レンジ（仮）の再実験を行うが──レンジの中に入れたはずのバナナはゲルバナと化し、テーブル上の房へと戻っていた。
                                    予期せぬ実験結果に驚く岡部とダル。そして、そこに姿を現したのは牧瀬紅莉栖その人であった。
                                </div>
                                <div v-if="txtbtn[0]" class="txtmorebtnbox">
                                    <Button  class="txtmorebtn" shape="circle" size="large" ghost @click="unfold"> 
                                        More 
                                        <Icon type="ios-arrow-forward" />
                                    </Button>
                                </div>
                                <div v-if="txtbtn[1]" class="txtclosebtnbox">
                                    <Button class="txtclosebtn" shape="circle" size="large" ghost @click="fold">            
                                        Close
                                        <Icon type="ios-arrow-back" />
                                    </Button>
                                </div>
                            </div>
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav02.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt03">
                            <div class="txtinside">
                                <div class="txtinsidetitle">並列過程のパラノイア</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime03':istxtbodyanime,'txtbodyanimereverse03':istxtbodyanimereverse}">
                                    未来ガジェット研究所にて、「電話レンジ（仮）」の実験を行う岡部とダル。レンジ内にあったはずのバナナはゲル状と化し、
                                    レンジから離れた場所にある房に戻るという驚くべき結果となった。その実験を偶然目撃していた牧瀬紅莉栖に促されて再実験を行った岡部は、
                                    「電話レンジ（仮）」には過去にメールを送信する機能があり、擬似的な「タイムマシン」のようなものではないかと推測する。
                                    紅莉栖はタイムマシンの存在を認めようとせず、未来ガジェット研究所をあとにした。一方、「電話レンジ（仮）」のタイムマシン仮説を立証しようとする岡部は、
                                    ジョン・タイターが@ちゃんねるに書き込んだ「未来ではSERNがタイムマシンを管理している」という記述を思い出す。ダルにSERNをハッキングさせた岡部は、
                                    職員の電子メールのやりとりを発見し、SERNが公式に否定しているミニブラックホールの生成に成功している事を知る。タイムトラベルを実現するために、
                                    ブラックホールを使った理論が存在するのである。そして、一通のメールには次のように書かれていた。「HUMAN IS DEAD MISMATCH」と――。
                                </div>
                                <div v-if="txtbtn[0]" class="txtmorebtnbox">
                                    <Button  class="txtmorebtn" shape="circle" size="large" ghost @click="unfold"> 
                                        More 
                                        <Icon type="ios-arrow-forward" />
                                    </Button>
                                </div>
                                <div v-if="txtbtn[1]" class="txtclosebtnbox">
                                    <Button class="txtclosebtn" shape="circle" size="large" ghost @click="fold">            
                                        Close
                                        <Icon type="ios-arrow-back" />
                                    </Button>
                                </div>
                            </div>
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav03.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt04">
                            <div class="txtinside">
                                <div class="txtinsidetitle">空理彷徨のランデヴー</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime04':istxtbodyanime,'txtbodyanimereverse04':istxtbodyanimereverse}">
                                    ハッキングしたSERN職員の電子メールに書かれていた「Human is Dead,mismatch 」の文字は、岡部とダルに戦慄を与えた。彼らはさらなるハッキングを行おうと試みるが、
                                    謎のプログラムコードに阻まれてしまう。岡部は鈴羽やジョン・タイターとのやりとりで知ったパーソナルコンピューター、“IBN5100”の存在を思い出す。
                                    そのレトロPCは、BASICが登場する以前のコードで記されたプログラムを解析できるマシンであった。SERNのコードをハッキングする鍵はIBN5100にあると推測し、
                                    その所在を探していた岡部の元に、意外な人物から情報がもたらされる。情報提供者であるフェイリスによると、彼女の父親がIBN5100を所有していたことがあり、
                                    現在は秋葉原の柳林神社に奉納しているという。柳林神社に向かった岡部は、そこであっけなくIBN5100と対面することに。神主のるかの父によると、IBN5100を奉納した人物――おそらくはフェイリスの父――は、
                                    「いつかこのパソコンを必要とする若者が現れるから、大事にとっておくように」との言葉を残していた。まさしく運命の巡り合わせ──シュタインズ・ゲートの選択に岡部は興奮しながら、
                                    居合わせた紅莉栖とともにIBN5100をラボへと運ぶのであった。
                                </div>
                                <div v-if="txtbtn[0]" class="txtmorebtnbox">
                                    <Button  class="txtmorebtn" shape="circle" size="large" ghost @click="unfold"> 
                                        More 
                                        <Icon type="ios-arrow-forward" />
                                    </Button>
                                </div>
                                <div v-if="txtbtn[1]" class="txtclosebtnbox">
                                    <Button class="txtclosebtn" shape="circle" size="large" ghost @click="fold">            
                                        Close
                                        <Icon type="ios-arrow-back" />
                                    </Button>
                                </div>
                            </div>
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav04.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt05">
                            <div class="txtinside">
                                <div class="txtinsidetitle">電荷衝突のランデヴー</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime05':istxtbodyanime,'txtbodyanimereverse05':istxtbodyanimereverse}">
                                    SERNのハッキングに必要なIBN5100をラボまで運んできた岡部と紅莉栖は、ブラウン管工房の片付けをする鈴羽と出会う。
                                    紅莉栖とは初対面のはずの鈴羽であったが、なぜか紅莉栖に対して激しい敵対心を見せる。その理由を訪ねる岡部に、
                                    彼女は「牧瀬紅莉栖には気をつけて」と忠告するのであった。IBN5100を修理した岡部、ダル、紅莉栖の3人はSERNへのハッキングを再開する。そして、
                                    手に入れた資料から恐るべき事実が明らかになる。ゼリーマンズレポートと呼ばれるその資料には、SERNが40年以上前からタイムトラベル実験に着手しており、
                                    人体実験をも行っていたことが記されていた。凄惨な実験結果にショックを受ける一同。しかし、岡部はSERNに先行して完璧なタイムマシンを作り上げる事を紅莉栖に宣言するのであった。
                                </div>
                                <div v-if="txtbtn[0]" class="txtmorebtnbox">
                                    <Button  class="txtmorebtn" shape="circle" size="large" ghost @click="unfold"> 
                                        More 
                                        <Icon type="ios-arrow-forward" />
                                    </Button>
                                </div>
                                <div v-if="txtbtn[1]" class="txtclosebtnbox">
                                    <Button class="txtclosebtn" shape="circle" size="large" ghost @click="fold">            
                                        Close
                                        <Icon type="ios-arrow-back" />
                                    </Button>
                                </div>
                            </div>
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav05.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt06">
                            <div class="txtinside">
                                <div class="txtinsidetitle">蝶翼のダイバージェンス</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime06':istxtbodyanime,'txtbodyanimereverse06':istxtbodyanimereverse}">
                                    SERNへのハッキングに成功した岡部は、未来ガジェット研究所にラボメンを集め、円卓会議を開催する。そこで、自分たちが偶然発見した“過去へ送れるメール”を「Dメール」と命名する。
                                    特定の時間帯にメールを送信することで「電話レンジ（仮）」が放電現象を起こし、Dメールが送られると仮定した岡部は、検証すべく実験を再開。結果、
                                    「電話レンジ（仮）」の中に入れたバナナはゲルバナとなり、紅莉栖が送った岡部宛のメールは5日前の日付で届いた。世紀の大発見に浮かれる岡部であったが、
                                    危険な人体実験をもいとわないSERNの秘密を知り、さらには無関係のまゆりを巻き込んだことに一抹の不安を覚える。翌日、IBN5100を見学しようとラボに訪れた萌郁に、
                                    偶然にもDメールの存在を知られてしまった岡部は、秘密の保持のために、急遽彼女をラボメンナンバー005に認定することになる。
                                </div>
                                <div v-if="txtbtn[0]" class="txtmorebtnbox">
                                    <Button  class="txtmorebtn" shape="circle" size="large" ghost @click="unfold"> 
                                        More 
                                        <Icon type="ios-arrow-forward" />
                                    </Button>
                                </div>
                                <div v-if="txtbtn[1]" class="txtclosebtnbox">
                                    <Button class="txtclosebtn" shape="circle" size="large" ghost @click="fold">            
                                        Close
                                        <Icon type="ios-arrow-back" />
                                    </Button>
                                </div>
                            </div>
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav06.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt07">
                            <div class="txtinside">
                                <div class="txtinsidetitle">断層のダイバージェンス</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime07':istxtbodyanime,'txtbodyanimereverse07':istxtbodyanimereverse}">
                                    岡部はセカンドエディションバージョン1.03に改造した「電話レンジ（仮）」を使い、Dメールで過去を改変する実験を思いつく。
                                    紅莉栖はタイムパラドックスを危惧するが、討議の結果、ロト6の3等当選番号を記したメールを、１週間前の岡部自身に送ることに。
                                    そして、メールを送信した瞬間、岡部は世界が歪むような奇妙な感覚に襲われる。周囲との微妙な齟齬にとまどう岡部の元に、
                                    １週間前に岡部から当選番号を教えられたというるかが現れ、ロト6を購入したものの番号を間違えはずれてしまったという。
                                    そして、先程までなかったはずのドクトルペッパーがなぜかラボの机の上にあった。そう──驚くべきことに、Dメールを送った瞬間、
                                    過去が書き換わり、世界は改変されたのだ。その場に居合わせたにも関わらず、ラボメンたちは誰も実験のことを覚えておらず、
                                    改変前の記憶を持つ者は岡部ひとりであった。この不可思議な現象をジョン・タイターに訪ねた岡部は、
                                    自分が世界線を移動しても記憶を保持できる希有な存在ではないかと指摘される。さらに、タイターは岡部にこういうのだった。
                                    「ダイバージェンス1％の向こう側に世界を導き、世界の救世主になってほしい」と。
                                </div>
                                <div v-if="txtbtn[0]" class="txtmorebtnbox">
                                    <Button  class="txtmorebtn" shape="circle" size="large" ghost @click="unfold"> 
                                        More 
                                        <Icon type="ios-arrow-forward" />
                                    </Button>
                                </div>
                                <div v-if="txtbtn[1]" class="txtclosebtnbox">
                                    <Button class="txtclosebtn" shape="circle" size="large" ghost @click="fold">            
                                        Close
                                        <Icon type="ios-arrow-back" />
                                    </Button>
                                </div>
                            </div>
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav07.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt08">
                            <div class="txtinside">
                                <div class="txtinsidetitle">夢幻のホメオスタシス</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime08':istxtbodyanime,'txtbodyanimereverse08':istxtbodyanimereverse}">
                                    ジョン・タイターから「救世主になってほしい」とのメールを受け取った岡部は、ダルと紅莉栖に、過去を司る女神作戦（オペレーション・ウルド）の再開を告げる。
                                    そして、岡部は自分だけに世界線変動前の記憶を保持する特殊な能力「リーディング・シュタイナー」があることを示唆する。その能力を立証するために、
                                    Dメールの実験を重ねる岡部たちは、4日前の萌郁に“ケータイの機種変更をするな”というDメールを送る。その結果、世界線は変動し、萌郁の行動が変わり、
                                    彼女がラボに来なかったという過去に改変されてしまった。そして、Dメールの話を立ち聞きしたるかから“女の子になりたい”と打ち明けられる。岡部らは、
                                    るかの母親のポケベルに、「野菜をたくさん食べると女の子が生まれる」という俗説に従って、野菜を食べることを勧めるメッセージをDメールで送った。その直後──岡部を再び奇妙な感覚が襲う。
                                    リーディング・シュタイナーが発動したが、るかの外見には一見なんの変化も観られなかった。確かに世界線は変動したはずなのだが…
                                    ときに、2010年7月28日──ここより、運命石の扉(シュタインズ・ゲート)が開かれる。
                                </div>
                                <div v-if="txtbtn[0]" class="txtmorebtnbox">
                                    <Button  class="txtmorebtn" shape="circle" size="large" ghost @click="unfold"> 
                                        More 
                                        <Icon type="ios-arrow-forward" />
                                    </Button>
                                </div>
                                <div v-if="txtbtn[1]" class="txtclosebtnbox">
                                    <Button class="txtclosebtn" shape="circle" size="large" ghost @click="fold">            
                                        Close
                                        <Icon type="ios-arrow-back" />
                                    </Button>
                                </div>
                            </div>
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav08.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt09">
                            <div class="txtinside">
                                <div class="txtinsidetitle">幻相のホメオスタシス</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime09':istxtbodyanime,'txtbodyanimereverse09':istxtbodyanimereverse}">
                                    フェイリスに「過去にメールを送る」話を聞かれてしまった岡部とダル。その後、岡部は円卓会議にて「電話レンジ（仮）」を使った物理的タイムトラベルの可能性に言及するが、
                                    紅莉栖に否定される。その後、SERNへのハッキング状況をダルに確認した岡部は、ラボからIBN5100がなくなっていることに気付く。
                                    これまでに送ったDメールによって過去が少しずつ改変され、IBN5100を手に入れていないという歴史が紡がれてしまったのだ。岡部は再びIBN5100を入手しようとするが、
                                    奉納されていたはずの柳林神社にそのレトロPCはもうなかった。IBN5100の持ち主を知るフェイリスに話を聞こうと、彼女の自宅に向かった岡部たち。フェイリスはその情報と引き替えに、
                                    10年前に1通のDメールを送らせてほしいと交換条件を出してきた。やむを得ず承諾した岡部がDメールを送らせると、リーディング・シュタイナーが発動。
                                    目の前には、さっきまでいなかったはずのフェイリスの父がいた。
                                    そして、フェイリスの家を出た岡部たちを待っていた光景は──萌え系の店がまったく見あたらない電気街・秋葉原の姿であった。
                                </div>
                                <div v-if="txtbtn[0]" class="txtmorebtnbox">
                                    <Button  class="txtmorebtn" shape="circle" size="large" ghost @click="unfold"> 
                                        More 
                                        <Icon type="ios-arrow-forward" />
                                    </Button>
                                </div>
                                <div v-if="txtbtn[1]" class="txtclosebtnbox">
                                    <Button class="txtclosebtn" shape="circle" size="large" ghost @click="fold">            
                                        Close
                                        <Icon type="ios-arrow-back" />
                                    </Button>
                                </div>
                            </div>
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav09.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt10">
                            <div class="txtinside">
                                <div class="txtinsidetitle">相生のホメオスタシス</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime10':istxtbodyanime,'txtbodyanimereverse10':istxtbodyanimereverse}">
                                    フェイリスが送ったDメールによって、秋葉原の街から「萌え」が消え去ってしまった。しかし、メイクイーン＋ニャン2がなくなっていても、
                                    岡部たちはフェイリスと知り合っており、彼らの人間関係に大きな変化はなかった。だが、Dメールによってるかの性別が女性に変わっており、
                                    その事実を知らなかった岡部はるかを傷つけてしまう。鈴羽に誘われてサイクリングに出かけた岡部は、彼女が父親捜しのために秋葉原にやってきたこと、
                                    明日父親に会えるかもしれないという話を聞かされる。いずれにせよこの街を離れるという鈴羽のために、岡部はお別れ会を開こうとラボメンたちに提案するが──
                                    そのとき岡部の携帯電話に「お前を見ているぞ」と書かれた差出人不明のメールが届いた。真っ赤なゼリーが写された添付画像に不安を覚えながらも、
                                    お別れ会の準備を整える。だが、鈴羽がラボに姿を現すことはなかった。鈴羽からメールが届き、突然の別れにショックを受ける岡部。
                                    彼は半日前の自分に鈴羽を尾行するようにDメールを送る。その結果鈴羽はもう少しだけこの街で父親捜しを続けることになった。
                                </div>
                                <div v-if="txtbtn[0]" class="txtmorebtnbox">
                                    <Button  class="txtmorebtn" shape="circle" size="large" ghost @click="unfold"> 
                                        More 
                                        <Icon type="ios-arrow-forward" />
                                    </Button>
                                </div>
                                <div v-if="txtbtn[1]" class="txtclosebtnbox">
                                    <Button class="txtclosebtn" shape="circle" size="large" ghost @click="fold">            
                                        Close
                                        <Icon type="ios-arrow-back" />
                                    </Button>
                                </div>
                            </div>
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav10.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt11">
                            <div class="txtinside">
                                <div class="txtinsidetitle">時空境界のドグマ</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime11':istxtbodyanime,'txtbodyanimereverse11':istxtbodyanimereverse}">
                                    岡部はDメール実験をするために、鈴羽に天王寺の目を引きつけてほしいと頼む。彼の目論みは失敗に終わるが、ブラウン管工房にある42型ブラウン管こそが「電話レンジ（仮）」によるDメール送信の鍵であると判明した。
                                    電話レンジ(仮)の仕組みを解明できた紅莉栖はDメールに代わり、人間の脳にある記憶データを圧縮して過去の自分に送る方法、いわゆるタイムリープ実験を考案する。
                                    すぐさま「電話レンジ（仮）」をタイムリープマシンに改造するためのパーツを集めてきた岡部だったが、なぜか紅莉栖はためらいを見せる。紅莉栖によると物理学者である彼女の父親との間に確執があり、
                                    タイムリープマシンを完成させた場合、関係を修復できないかも知れない、という。岡部はそんな紅莉栖に、タイムリープマシンが完成したらいっしょに父親に会いに行こうと約束するのだった。
                                    しばらく泊まり込むという紅莉栖とまゆりをラボに残し、買い物に出かけた岡部のケータイに一通のメールが届く。メールを開くと「おまえは知りすぎた」というメッセージと、血まみれの人形の首が写し出された。
                                    まゆりの身を案じてラボへ急行した岡部だったが、彼の心配はひとまず杞憂に終わる。しかし、ダルによるとラボとSERNのネットワークがいつの間にかつながっており、何者かにアクセスされた形跡があることがわかった。
                                    岡部は身辺に近付く恐怖に動揺を隠せなかった。
                                </div>
                                <div v-if="txtbtn[0]" class="txtmorebtnbox">
                                    <Button  class="txtmorebtn" shape="circle" size="large" ghost @click="unfold"> 
                                        More 
                                        <Icon type="ios-arrow-forward" />
                                    </Button>
                                </div>
                                <div v-if="txtbtn[1]" class="txtclosebtnbox">
                                    <Button class="txtclosebtn" shape="circle" size="large" ghost @click="fold">            
                                        Close
                                        <Icon type="ios-arrow-back" />
                                    </Button>
                                </div>
                            </div>
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav11.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt12">
                            <div class="txtinside">
                                <div class="txtinsidetitle">静止限界のドグマ</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime12':istxtbodyanime,'txtbodyanimereverse12':istxtbodyanimereverse}">
                                    7000万年前の荒野に時間跳躍する夢を見た岡部。白昼夢のような奇妙な感覚から目を覚ますと、まゆりが泊まり込みで制作していたコスプレ衣装、
                                    そして紅莉栖のタイムリープマシンが完成を迎えていた。ついに“時空を超える装置”を手に入れた岡部たち。しかし、岡部はタイムリープマシンの実験を中止。
                                    事実を世間に公表し、研究機関に装置を託すことを決める。ラボメンたちも岡部の決断に賛同し、それぞれの労をねぎらうためにパーティーが開かれる。
                                    犬猿の仲である紅莉栖と鈴羽も顔を合わせるが、まゆりの気遣いで和やかなものに。だが、穏やかな空気がにわかに破られる。テレビには緊急ニュースが映し出されていた。
                                    爆弾テロの予告によって秋葉原駅を通るJR各線が運転を見合わせるというニュースに、岡部は悪い予感を覚え、鈴羽はなにかを言いかけてひとり飛び出してしまう。
                                    そして、彼女と入れ替わるように、5人の武装した男たちがラボに押し入ってきた。彼らに続いて岡部らの前に現れたのは、黒いライダースーツに身を包んだ桐生萌郁であった。
                                    彼女の目的は完成したばかりのタイムリープマシンと開発者たちの身柄の確保。そして、「椎名まゆりは、必要ない…」と言うと、彼女の眉間に銃口を向けて引き金を引いたのだった。
                                </div>
                                <div v-if="txtbtn[0]" class="txtmorebtnbox">
                                    <Button  class="txtmorebtn" shape="circle" size="large" ghost @click="unfold"> 
                                        More 
                                        <Icon type="ios-arrow-forward" />
                                    </Button>
                                </div>
                                <div v-if="txtbtn[1]" class="txtclosebtnbox">
                                    <Button class="txtclosebtn" shape="circle" size="large" ghost @click="fold">            
                                        Close
                                        <Icon type="ios-arrow-back" />
                                    </Button>
                                </div>
                            </div>
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav12.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt13">
                            <div class="txtinside">
                                <div class="txtinsidetitle">形而上のネクローシス</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime13':istxtbodyanime,'txtbodyanimereverse13':istxtbodyanimereverse}">
                                    ラボを強襲してきた萌郁の凶弾に倒れたまゆり。最悪の事態を前にして身動きが取れない岡部たちだったが、そこに姿を消したはずの鈴羽が現れる。
                                    素早い動きで襲撃者たちを次々と倒した彼女は、「42」「ブラウン管」「点灯済み」とつぶやく。それを聞いた紅莉栖は完成したばかりのタイムリープマシンを起動させ、
                                    岡部は過去へ時間を巻き戻すべく叫んだ――「跳べよぉぉぉぉっ！」。ふと我に返ると、岡部は惨劇から数時間前にタイムリープしていた。ラボメンたちにパーティーの中止を告げる。
                                    岡部の唐突な行動に戸惑う紅莉栖たち。岡部はまゆりを探し出し、一緒に逃げ回るが、萌郁の乗っていた自動車にまゆりは轢かれてしまう。再びタイムリープした岡部は秋葉原駅を避け、
                                    まゆりを連れて地下鉄へ向かった。だが、駅構内に電車が乗り入れてきた瞬間、まゆりは天王寺の娘、綯に突き飛ばされる。まゆりの死は避けようのない結果なのか……。
                                    それでも、岡部はまゆりを助けることを決意する。
                                </div>
                                <div v-if="txtbtn[0]" class="txtmorebtnbox">
                                    <Button  class="txtmorebtn" shape="circle" size="large" ghost @click="unfold"> 
                                        More 
                                        <Icon type="ios-arrow-forward" />
                                    </Button>
                                </div>
                                <div v-if="txtbtn[1]" class="txtclosebtnbox">
                                    <Button class="txtclosebtn" shape="circle" size="large" ghost @click="fold">            
                                        Close
                                        <Icon type="ios-arrow-back" />
                                    </Button>
                                </div>
                            </div>
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav13.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt14">
                            <div class="txtinside">
                                <div class="txtinsidetitle">形而下のネクローシス</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime14':istxtbodyanime,'txtbodyanimereverse14':istxtbodyanimereverse}">
                                    まゆりの命を救うため、タイムリープを繰り返す岡部。だが、どれだけ試みようと、「まゆりの死」という結果は変わらなかった。
                                    岡部は萌郁たちの襲撃自体を回避することができないか、と考え、タイムマシンの新情報を入手した、というメールを餌に萌郁を呼び出す。
                                    萌郁と再会した岡部はすぐさま彼女の銃を奪い、萌郁がIBN5100を探すラウンダーであることと、彼女たちがラボを襲撃した理由を聞き出すが、
                                    彼女の仲間によって岡部は捕らえられる。かろうじて逃走に成功して、ラボへ戻るが、またもまゆりは萌郁の手によって殺されてしまった。
                                    タイムリープを行うものの、運命のように同じ結果に収束していくことに絶望する岡部。彼の状況を察した紅莉栖に岡部はすべてを話し、
                                    彼女の協力を得ることにする。残された時間が少ないため、5時間前にタイムリープした岡部。まゆりを救う作戦を練り始めた岡部と紅莉栖の前に突然、
                                    鈴羽が姿を見せる。すべてを知っているかのように鈴羽は語った――まゆりを救うにはこの世界線がどこにあるかを示す数値“ダイバージェンス”が1％を超えたβ世界線に到達する必要がある、
                                    と。彼女に連れられてラジ館の屋上へ赴いた岡部と紅莉栖。落着した人工衛星のかたわらに立って、鈴羽は衝撃の事実をふたりに告げる。
                                    「あたしは2036年から来たタイムトラベラー、ジョン・タイターだよ」と。
                                </div>
                                <div v-if="txtbtn[0]" class="txtmorebtnbox">
                                    <Button  class="txtmorebtn" shape="circle" size="large" ghost @click="unfold"> 
                                        More 
                                        <Icon type="ios-arrow-forward" />
                                    </Button>
                                </div>
                                <div v-if="txtbtn[1]" class="txtclosebtnbox">
                                    <Button class="txtclosebtn" shape="circle" size="large" ghost @click="fold">            
                                        Close
                                        <Icon type="ios-arrow-back" />
                                    </Button>
                                </div>
                            </div>
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav14.png'></div>
                        </div>
                    </li>
                    <li>   
                        <div class="storytxt15">
                            <div class="txtinside">
                                <div class="txtinsidetitle">亡環上のネクローシス</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime15':istxtbodyanime,'txtbodyanimereverse15':istxtbodyanimereverse}">
                                    2036年からやってきた鈴羽は、岡部と紅莉栖に未来の姿を伝えた。SERNがタイムマシンの力で世界を支配していること、鈴羽がレジスタンスであること、
                                    「電話レンジ（仮）」がSERNのタイムマシン開発の決定打になったこと……。そして、岡部がラジ館の前でダルに送った最初のDメールがSERNの通信傍受システムに引っ掛かり、
                                    それがラボ襲撃の引き金となったという。DメールをSERNのデータベースから削除すれば、ＳＥＲＮがタイムマシンの開発に成功しなかったβ世界線へ移ることが可能になる。
                                    だが、データベースにアクセスするにはIBN5100が不可欠であり、鈴羽はIBN5100を現在の岡部へ託すため、これから1975年へ跳ぶという。しかし、鈴羽が乗ってきたタイムマシンは雷雨によって故障しており、
                                    起動しなかった。タイムマシンを修理するためタイムリープした岡部は、ラボメンに鈴羽の正体とタイムマシンについて明かす。タイムマシンの修理をダルに一任した岡部はまゆりの提案を受け、
                                    形見のピンバッジを手に鈴羽の父親捜しを再開。ラボメンたちの惜しみない協力に感謝する鈴羽。タイムマシンの修理の目処が見えてきたそのとき、岡部のケータイに街で出会った露天商からの知らせが入る。
                                    「ピンバッジの男がわかった」と……。
                                </div>
                                <div v-if="txtbtn[0]" class="txtmorebtnbox">
                                    <Button  class="txtmorebtn" shape="circle" size="large" ghost @click="unfold"> 
                                        More 
                                        <Icon type="ios-arrow-forward" />
                                    </Button>
                                </div>
                                <div v-if="txtbtn[1]" class="txtclosebtnbox">
                                    <Button class="txtclosebtn" shape="circle" size="large" ghost @click="fold">            
                                        Close
                                        <Icon type="ios-arrow-back" />
                                    </Button>
                                </div>
                            </div>
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav15.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt16">
                            <div class="txtinside">
                                <div class="txtinsidetitle">不可逆のネクローシス</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime16':istxtbodyanime,'txtbodyanimereverse16':istxtbodyanimereverse}">
                                    露天商にピンバッジを注文したのはダルだった。鈴羽のタイムマシンは過去にしか跳べず、1975年に行けばもう戻ってこられない――そのことを知ったダルは、
                                    父親が見つからなかった場合、ウソでも鈴羽を喜ばせようとピンバッジを注文しに来たのだった。やがてタイムマシンの修理が終わり、鈴羽との別れの時が迫る。
                                    そのとき、まゆりが唐突に「鈴羽の父親はダルである」と言いだす。父娘は予想外の形で再会を果たし、鈴羽は1975年へと旅立っていった。その後、ラボに戻った岡部は、
                                    訪ねてきた天王寺裕吾から一通の手紙を受け取る。差出人は10年前に他界した“橋田鈴”という女性で、天王寺の恩人だという。その手紙には橋田鈴、つまり鈴羽が、
                                    タイムマシンの修理が不十分だったために時間跳躍のショックで記憶喪失になり、そのせいでIBN5100を入手できなかったことが切々と綴られ、
                                    「こんな人生、無意味だった」と締めくくられていた。彼女の死因は自殺だった。鈴羽に不幸な結末をもたらした、タイムマシン故障の原因が雷雨の晩に送った鈴羽を引き止めるDメールにあると理解した岡部は、
                                    それを取り消すDメールを送る。こうして8月10日以降の鈴羽との思い出や父娘の邂逅をすべて犠牲にして、世界線は変動した。橋田鈴は新たな世界線においても10年前に他界していたが、
                                    死因は病死となっていた。そして、変動後のダイバージェンスメーターの数値は1％を超えておらず、β世界線には未だ到達していないが、8月13日の20時になってもラウンダーの襲撃はなく、
                                    まゆりは死なないままだった……果たして運命は変えられたのか？
                                </div>
                                <div v-if="txtbtn[0]" class="txtmorebtnbox">
                                    <Button  class="txtmorebtn" shape="circle" size="large" ghost @click="unfold"> 
                                        More 
                                        <Icon type="ios-arrow-forward" />
                                    </Button>
                                </div>
                                <div v-if="txtbtn[1]" class="txtclosebtnbox">
                                    <Button class="txtclosebtn" shape="circle" size="large" ghost @click="fold">            
                                        Close
                                        <Icon type="ios-arrow-back" />
                                    </Button>
                                </div>
                            </div>
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav16.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt17">
                            <div class="txtinside">
                                <div class="txtinsidetitle">虚像歪曲のコンプレックス</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime17':istxtbodyanime,'txtbodyanimereverse17':istxtbodyanimereverse}">
                                    8月14日の夜、ラウンダーは過去の襲撃から一日遅れて姿を現し、まゆりはまたも命を落としてしまう。タイムリープした岡部は、
                                    これまでの経緯を紅莉栖に相談する。β世界線に行くためには、IBN5100を使ってSERNが持っている岡部たちのデータを消さなくてはならない。
                                    IBN5100を手に入れるために、これまでに送ったDメールをすべて取り消していこうという紅莉栖の仮説を元に、岡部は送ったDメールの順番で、
                                    フェイリスを捜しに向かった。そのときフェイリスは、「雷ネット・アクセスバトラーズ」の大会で負かしたヴァイラルアタッカーズに仕返しのために追われていた。
                                    岡部はフェイリスと一緒に秋葉原の街を逃げ回りながら、秋葉原から萌えを消し去ったDメールを取り消すようにと彼女を説得する。
                                    「メイクイーン＋ニャン2」があった場所でフェイリスは、自らが送ったDメールの内容を岡部に告白する。フェイリスのDメールとは、
                                    10年前の飛行機事故で亡くなったはずの彼女の父を生き返らせる……というものだったのだ。ヴァイラルアタッカーズに追い詰められて窮地に陥った岡部たちだったが、
                                    駆けつけたフェイリスの父によって間一髪救われる。フェイリスの父にIBN5100の行方を岡部がたずねると、それも娘を救うためにすでに手放してしまったという。
                                    フェイリスは、まゆりの命を救うために永い夢から醒めること決意する。かくして、フェイリスのDメールは取り消され、秋葉原は萌えの街へとその姿を取り戻したのだった。
                                </div>
                                <div v-if="txtbtn[0]" class="txtmorebtnbox">
                                    <Button  class="txtmorebtn" shape="circle" size="large" ghost @click="unfold"> 
                                        More 
                                        <Icon type="ios-arrow-forward" />
                                    </Button>
                                </div>
                                <div v-if="txtbtn[1]" class="txtclosebtnbox">
                                    <Button class="txtclosebtn" shape="circle" size="large" ghost @click="fold">            
                                        Close
                                        <Icon type="ios-arrow-back" />
                                    </Button>
                                </div>
                            </div>
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav17.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt18">
                            <div class="txtinside">
                                <div class="txtinsidetitle">自己相似のアンドロギュノス</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime18':istxtbodyanime,'txtbodyanimereverse18':istxtbodyanimereverse}">
                                    β世界線に移動するために岡部が次に取りかかったのは、るかがまだお腹にいるころの母親へ送ったDメールを取り消すことだった。
                                    るかの母親のポケベル番号を聞き出すために「Dメールを送る前のオマエは男だった……」と事実を説明する岡部だが、
                                    その話は以前の世界線での記憶がないるかを傷つけるだけだった。事の顛末を聞いたまゆりや紅莉栖から責められ、すっかり弱り果てた岡部の元にるかからメールが届く。
                                    “彼女”に会いに行った岡部は、るかから「男に戻る代わりに明日一日だけ恋人になってください」と告白されたのだ。デート経験が一度もない岡部は紅莉栖に相談するものの、
                                    具体的なプランがまとまらないまま翌朝を迎えることに。紅莉栖が用意したプランを元にマニュアル的なデートをするものの、るかとのやりとりは終始ぎこちないまま。
                                    そして、デートの途中、るかは岡部との出会いを振り返るが、それは以前の世界線でのものだった。デートが終わり、ラボに戻ってきた岡部だったが、マニュアルデートをしていた自分は本当の自分じゃないと気付き、
                                    柳林神社へ急ぐ。そして、るかは鳳凰院凶真の弟子というあるべき関係に戻り、修行を行う。「本当は男に戻りたくない」と心境を吐露するるかは、まゆりを救うために母親のポケベル番号を岡部へと手渡す。
                                    「覚えておいてください、女の子だった僕のことを」──こうしてるかのDメールは取り消され、世界線は変動した。残るDメールは、あとひとつ。
                                </div>
                                <div v-if="txtbtn[0]" class="txtmorebtnbox">
                                    <Button  class="txtmorebtn" shape="circle" size="large" ghost @click="unfold"> 
                                        More 
                                        <Icon type="ios-arrow-forward" />
                                    </Button>
                                </div>
                                <div v-if="txtbtn[1]" class="txtclosebtnbox">
                                    <Button class="txtclosebtn" shape="circle" size="large" ghost @click="fold">            
                                        Close
                                        <Icon type="ios-arrow-back" />
                                    </Button>
                                </div>
                            </div>
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav18.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt19">
                            <div class="txtinside">
                                <div class="txtinsidetitle">無限連鎖のアポトーシス</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime19':istxtbodyanime,'txtbodyanimereverse19':istxtbodyanimereverse}">
                                    Dメールを取り消していくことで1日ずつ時間がずれていくものの、まゆりが死ぬ結果に変わりなかった。まゆりはおそらく8月16日、
                                    コミマの日に死ぬ――そう、紅莉栖に告げた岡部は、まゆりを彼女に任せてDメールの送り主のひとり、桐生萌郁を捜しに向かった。
                                    萌郁がアルバイトしていた編集プロダクションから彼女が住むアパートを聞き出した岡部だったが、萌郁は8月15日にすでに自殺していた。
                                    紅莉栖からまゆりの死を知らされた岡部は、8月11日にタイムリープして萌郁の部屋を再度訪ねる。部屋にいた萌郁は、
                                    崇拝する「FB」からの連絡が途絶えたために心神喪失の状態だった。岡部は萌郁から強引に携帯電話を奪い取ると、
                                    ケータイの機種変更をやめさせるために送ったという萌郁のDメールを取り消した。しかし、「電話レンジ（仮）」の放電現象が起きたにも関わらず、
                                    世界線は変動しなかった。岡部は萌郁が機種変をしていなかった事を思い出す。萌郁のDメールはまったくウソの内容だったのだ。
                                    Dメールの本当の内容を知るために暴れる萌郁を組み伏せた岡部は、彼女の置かれた立場と悲劇的な結末を伝えた。岡部は携帯電話に残されたメールから、
                                    IBN5100を盗み出した張本人が萌郁と知り、彼女が自分自身にIBN5100の在処を伝えたDメールを取り消そうと試みる。しかし、それでもリーディング・シュタイナーは発動しなかった。
                                    頑なな萌郁を従わせるためには「FB」の携帯電話からメールするしかないと考えた岡部は、「FB」を捜し出すことを決意する。岡部が部屋を出ようとしたそのとき、萌郁はふとつぶやいた。
                                    「コインロッカー……大ビル前……IBN5100」と。
                                </div>
                                <div v-if="txtbtn[0]" class="txtmorebtnbox">
                                    <Button  class="txtmorebtn" shape="circle" size="large" ghost @click="unfold"> 
                                        More 
                                        <Icon type="ios-arrow-forward" />
                                    </Button>
                                </div>
                                <div v-if="txtbtn[1]" class="txtclosebtnbox">
                                    <Button class="txtclosebtn" shape="circle" size="large" ghost @click="fold">            
                                        Close
                                        <Icon type="ios-arrow-back" />
                                    </Button>
                                </div>
                            </div>
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav19.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt20">
                            <div class="txtinside">
                                <div class="txtinsidetitle">怨嗟断絶のアポトーシス</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime20':istxtbodyanime,'txtbodyanimereverse20':istxtbodyanimereverse}">
                                    萌郁からIBN5100の隠し場所を聞き出した岡部。しかし、紅莉栖によると、岡部がこの世界線でIBN5100を手に入れることは不可能であり、
                                    まずはラウンダーの指揮官である「FB」なる人物に接触すべきだと言う。岡部はIBN5100が隠されたコインロッカーを見張り、
                                    そこに現れた萌郁とともに運び屋が持ち出したIBN5100の後を追った。そして、追跡の途中で岡部はよく知る人物の姿を目撃する。
                                    それは「Mr.ブラウン」こと天王寺裕吾であった。IBN5100が彼の自宅を経由してSERNのあるフランス行きの飛行機に積み込まれた事実を見届けた岡部は、
                                    真相を知るために天王寺の自宅を訪ねる。岡部たちに「FB」の正体を問いただされた天王寺はこう言った――「裏切ったようだな、M4」と。
                                    「M4」とは「FB」が萌郁につけたコードネームで、ふたりだけが知る呼び名である。萌郁に送られてきたメールの文面は女性の口調であったが、
                                    天王寺こそが「FB」だったのだ。岡部たちを連れて外へ移動した天王寺は、自らがラウンダーとして働くことになった経緯を語り、取り出した拳銃で萌郁を撃つ。
                                    そして、自らのこめかみに銃口を当て、引き金を引いた。岡部が天王寺の携帯電話からDメールを送ると、リーディング・シュタイナーが発動。
                                    ようやくラボにIBN5100が存在する世界線に移動することができた。これでSERNのデータベースに記録された最初のDメールを削除すれば、まゆりが死なず、
                                    ディストピアのない未来が待つβ世界線に戻れる。だが、そのとき岡部は最初に送ったDメールの内容を思い出した。1通目のDメール、それは岡部が紅莉栖の死体を目撃したことをダルに伝えるものだった。
                                    β世界線に戻れば、牧瀬紅莉栖が死ぬ。
                                </div>
                                <div v-if="txtbtn[0]" class="txtmorebtnbox">
                                    <Button  class="txtmorebtn" shape="circle" size="large" ghost @click="unfold"> 
                                        More 
                                        <Icon type="ios-arrow-forward" />
                                    </Button>
                                </div>
                                <div v-if="txtbtn[1]" class="txtclosebtnbox">
                                    <Button class="txtclosebtn" shape="circle" size="large" ghost @click="fold">            
                                        Close
                                        <Icon type="ios-arrow-back" />
                                    </Button>
                                </div>
                            </div>
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav20.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt21">
                            <div class="txtinside">
                                <div class="txtinsidetitle">因果律のメルト</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime21':istxtbodyanime,'txtbodyanimereverse21':istxtbodyanimereverse}">
                                    β世界線に戻れば、牧瀬紅莉栖が死ぬ――その事実に気付いた岡部は、SERNへのクラッキングを中止する。それから3日後、コミマ最終日の8月17日。
                                    まゆりの死が訪れる日である。岡部はまゆりに付き合ってコミマ会場へ足を運んだ。岡部は、世界線を変えずにまゆりが生き残る方法を考えるものの、
                                    解決策が見つかることはなかった。その帰り道、秋葉原の路地を歩くふたりの前に猛スピードで走るクルマが迫る。岡部は、自分が命を投げ出せば、
                                    何らかの因果が変わると考え、自らクルマに向かっていく。だが、直前に何者かに突き飛ばされ、岡部は無事だった。代わりに倒れていたのはまゆりだった。
                                    身を挺して岡部を守ったまゆりは、彼の役に立てたと微笑みながら息を引き取った。このα世界線において、まゆりの死は避けられないものと岡部はまたも思い知らされるのであった。
                                    タイムリープしてきた岡部の憔悴しきった様子を心配した紅莉栖は、クラッキングを止めた理由を説明するように求める。岡部ははぐらかそうとするが、紅莉栖の問に答えざるを得なくなり、
                                    「あのDメールを消せば、お前が死ぬ」と真実を打ち明ける。そのとき、まゆりからの電話が鳴る。まゆりは、岡部の苦悩の原因が自分である事を察しているようであった。
                                    紅莉栖に促され、まゆりを捜しに向かった岡部は、彼女を墓地で発見する。そこで、まゆりは祖母の墓前に、最近、自分が死ぬ夢をよく見ること、ラボメンが岡部とまゆりしかいなかった頃のこと、
                                    最近岡部と話す時間が減ったこと……胸中に秘めていた想いを語っていた。その姿を物陰から見ていた岡部は、まゆりに話せるときが来たらすべてを話すと約束する。時同じくして、
                                    紅莉栖はすべての始まり場所であるラジ館へ向かっていた。
                                </div>
                                <div v-if="txtbtn[0]" class="txtmorebtnbox">
                                    <Button  class="txtmorebtn" shape="circle" size="large" ghost @click="unfold"> 
                                        More 
                                        <Icon type="ios-arrow-forward" />
                                    </Button>
                                </div>
                                <div v-if="txtbtn[1]" class="txtclosebtnbox">
                                    <Button class="txtclosebtn" shape="circle" size="large" ghost @click="fold">            
                                        Close
                                        <Icon type="ios-arrow-back" />
                                    </Button>
                                </div>
                            </div>
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav21.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt22">
                            <div class="txtinside">
                                <div class="txtinsidetitle">存在了解のメルト</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime22':istxtbodyanime,'txtbodyanimereverse22':istxtbodyanimereverse}">
                                    紅莉栖を捜していた岡部はラジ館の屋上で彼女の姿を見つける。降り出した激しい雨から館内へ逃れたふたり。そこで紅莉栖は、
                                    別の世界線での出来事――β世界線で自分が刺殺されたこと、α世界線でまゆりを救うために岡部がタイムリープを繰り返してきたこと――の記憶があると告げる。
                                    そして、紅莉栖は岡部にβ世界線に行き、まゆりを助けるようにと岡部に言う。選択を拒否した岡部はラボでタイムリープマシンを起動しようとするが、追いかけてきた紅莉栖に止められる。
                                    これ以上、タイムリープをくり返しても「1％の壁」は超えられず、まゆりの死を繰り返し目にすることで、いつか岡部の精神は壊れてしまう……紅莉栖はそう彼に諭したのだった。
                                    そして、岡部はついに決断を下す。「俺は、お前を助けられない」と。避けられない別れを前にして岡部は紅莉栖への想いを告白する。翌朝、アメリカへ帰る紅莉栖を見送ったあと、
                                    ラボに戻った岡部は、最初のDメールの消去を決行。世界が再構築される中、突然ラボのドアが開く。そこにいたのは、帰国したはずの紅莉栖だった。
                                    「私も岡部のことが……」――そう言いかけた彼女の姿は、アトラクタフィールドの移動とともに幻のように消えていった。さまざまな想いを犠牲にしてたどり着いたβ世界線。岡部は厨二病的な勝利宣言を行い、
                                    「電話レンジ（仮）」とIBN5100を処分する。すべては終わったかに見えたが、ダルの携帯電話に着信があり、電話の相手は阿万音鈴羽を名乗る。そして、岡部に今すぐラジ館の屋上に来てほしいと言う――
                                    「お願い、あたしの言うことを信じて！　第3次世界大戦を防ぐために」。
                                </div>
                                <div v-if="txtbtn[0]" class="txtmorebtnbox">
                                    <Button  class="txtmorebtn" shape="circle" size="large" ghost @click="unfold"> 
                                        More 
                                        <Icon type="ios-arrow-forward" />
                                    </Button>
                                </div>
                                <div v-if="txtbtn[1]" class="txtclosebtnbox">
                                    <Button class="txtclosebtn" shape="circle" size="large" ghost @click="fold">            
                                        Close
                                        <Icon type="ios-arrow-back" />
                                    </Button>
                                </div>
                            </div>
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav22.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt23">
                            <div class="txtinside">
                                <div class="txtinsidetitle">境界面上のシュタインズゲート</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime23':istxtbodyanime,'txtbodyanimereverse23':istxtbodyanimereverse}">
                                    ラジ館の屋上に現れた鈴羽によると、この世界線の未来では、第3次世界大戦が勃発し、多くの人々が犠牲になるという。それを回避するためには、
                                    2010年7月28日に死んだ牧瀬紅莉栖の命を救い、アトラクタフィールドの干渉を受けない唯一の世界線“シュタインズゲート”を目指さなければならない。岡部は鈴羽に協力することを決め、
                                    タイムマシンで2010年7月28日のラジ館へ跳んだ。紅莉栖の死体を発見した場所で身を潜めて待つ岡部。そこへ現れた紅莉栖は遅れてやってきた人物にタイムマシンの論文を手渡して言った――
                                    「あのね、これを読んでほしいの、パパ」。紅莉栖の父親とは、中鉢博士だったのだ。しかし、論文を読み終えた中鉢は、紅莉栖の優秀さに嫉妬し、錯乱状態で彼女の首を締めあげる。紅莉栖を助けようと飛び出した岡部だったが、
                                    もみ合いの末に中鉢のナイフで紅莉栖を刺し殺してしまった。岡部は元の時間に帰ってくるが、茫然自失のまま、立ち直ることが出来ないでいた。その時、岡部のケータイにメールが届く。その指示に従い、ニュース映像を見ると、
                                    そこにはロシアに亡命した中鉢の姿が映し出されていた。ニュースは中鉢が乗っていた飛行機の火災事故を報じており、中鉢はまゆりのメタルうーぱを掲げ、「これが金属探知機に引っかかったおかげで、論文が焼けずにすんだのだ」とコメントした。
                                    その論文は紅莉栖のものであり、第3次世界大戦勃発の元凶であったのだ。鈴羽に促されて7月28日に届いたムービーメールを見ると、そこには未来の岡部自身がいた。彼は「中鉢博士がロシアに持ち込んだタイムマシンに関する論文をこの世から葬り去ること」と
                                    「牧瀬紅莉栖を救うこと」がシュタインズゲートに到達するための条件であると告げる。紅莉栖が死んだという過去を変えずに、彼女を救うためには、「生きている紅莉栖を過去の自分に死んだと観測させる」のだと。岡部はその意味をすぐに理解し、
                                    鳳凰院凶真として復活を遂げる――「世界は、この俺の手の中にある！」
                                </div>
                                <div v-if="txtbtn[0]" class="txtmorebtnbox">
                                    <Button  class="txtmorebtn" shape="circle" size="large" ghost @click="unfold"> 
                                        More 
                                        <Icon type="ios-arrow-forward" />
                                    </Button>
                                </div>
                                <div v-if="txtbtn[1]" class="txtclosebtnbox">
                                    <Button class="txtclosebtn" shape="circle" size="large" ghost @click="fold">            
                                        Close
                                        <Icon type="ios-arrow-back" />
                                    </Button>
                                </div>
                            </div>
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav23.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt24">
                            <div class="txtinside">
                                <div class="txtinsidetitle">終わりと始まりのプロローグ</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime24':istxtbodyanime,'txtbodyanimereverse24':istxtbodyanimereverse}">
                                    「未来を司る女神作戦（オペレーション・スクルド）」の概要を理解した岡部は、ラボへ戻って未来ガジェット「サイリウム・セーバー」を用意する。
                                    この内部には血糊が仕掛けられており、紅莉栖の血に見せようと考えたのだ。タイムマシンにはあと1往復ぶんの燃料しかなく、今回のタイムトラベルが最後のチャンスになる。
                                    7月28日に跳躍した岡部は、カプセルトイが並ぶラジ館7階へ急ぎ、カプセルマシンを回した。転がり出てきたのは、まゆりが手に入れるはずだったメタルうーぱ。それを拾い上げた岡部は、
                                    紅莉栖と中鉢が出会う事件現場で身を潜めた。しかし、そこで「サイリウム・セーバー」の血糊が固まっていることに気がつく。窮地に追い込まれたものの、辛うじて血糊の代わりになるものに思い至った岡部は、
                                    驚くべき行動に出る。岡部は紅莉栖にナイフを向ける中鉢を挑発し、凶刃をその身に受けたのだった。死にものぐるいの岡部の姿に恐れをなした中鉢は、論文の入った封筒を奪って逃走する。
                                    岡部は駆け寄ってきた紅莉栖をスタンガンで気絶させると、ナイフを腹部に深くまで刺し入れた。そして、流れ出た血の上に紅莉栖を横たえさせ、自分が「観測した」紅莉栖の姿を再現したのだった。
                                    未知の世界線「シュタインズゲート」に到達した岡部は、傷が回復した後、るか、フェイリス、萌郁、まゆり、ダルにラボメンの証しであるピンバッジを渡す。ピンバッジには、この世界のどこかで生きている紅莉栖と、
                                    7年後に生まれてくる鈴羽のイニシャルも刻まれていた。ピンバッジを配り終えた岡部は、中央通りの横断歩道で紅莉栖と再会する。彼女は命の恩人にお礼を言うために秋葉原で岡部を探し続けていたのだ。
                                    紅莉栖にラボメンNo.004のピンバッジを手渡した岡部はこう言った――「これが、シュタインズゲートの選択だよ」。
                                </div>
                                <div v-if="txtbtn[0]" class="txtmorebtnbox">
                                    <Button  class="txtmorebtn" shape="circle" size="large" ghost @click="unfold"> 
                                        More 
                                        <Icon type="ios-arrow-forward" />
                                    </Button>
                                </div>
                                <div v-if="txtbtn[1]" class="txtclosebtnbox">
                                    <Button class="txtclosebtn" shape="circle" size="large" ghost @click="fold">            
                                        Close
                                        <Icon type="ios-arrow-back" />
                                    </Button>
                                </div>
                            </div>
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav24.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt25">
                            <div class="txtinside">
                                <div class="txtinsidetitle">横行跋扈のポリオマニア</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime25':istxtbodyanime,'txtbodyanimereverse25':istxtbodyanimereverse}">
                                    しばし秋葉原での穏やかな日々が過ぎた頃、岡部たちラボメンは、ひょんなことからフェイリスに誘われてアメリカへ行くことに。
                                    せっかくだからと、アメリカの研究所へ戻った紅莉栖との再会を計画するまゆりたち。数日後、ついにLAの空港に一人の狂気のマッドサイエンティストが降り立った…
                                    果たして鳳凰院凶真が、いよいよ世界を混沌に導く第一歩を踏み出すのか！？そしてやっぱり素直になれない二人の関係の行く末はいかに！？
                                </div>
                                <div v-if="txtbtn[0]" class="txtmorebtnbox">
                                    <Button  class="txtmorebtn" shape="circle" size="large" ghost @click="unfold"> 
                                        More 
                                        <Icon type="ios-arrow-forward" />
                                    </Button>
                                </div>
                                <div v-if="txtbtn[1]" class="txtclosebtnbox">
                                    <Button class="txtclosebtn" shape="circle" size="large" ghost @click="fold">            
                                        Close
                                        <Icon type="ios-arrow-back" />
                                    </Button>
                                </div>
                            </div>
                            <div class="txtnum"><img src='/src/assets/images/bs_NavSP.png'></div>
                        </div>
                    </li>
                </ul>
            </Row>
            <Row class="body_img">
                <Row class="body_slideimg">
                <Col span="15" class="slideimg_left">
                    <div class="leftimg" :style="{ transform: `translateY(${LeftUp})` }">
                    <ul class="leftimg_moveup" id="LeftimgMoveup">
                    <li v-for="leftimg_moveup in leftimgs_moveup" :key="leftimg_moveup.id">
                        <img :src="leftimg_moveup.src">
                    </li>
                    </ul>
                    </div>
                </Col>
                <Col span="6" class="slideimg_middle">
                    <Row class="midimg" :style="{ transform: `translateY(${MidUp})` }">
                        <Row class="midimg_movedown" id="midimgMoveup">
                            <img src="/src/assets/images/img_story01_02.png"/>
                            <img src="/src/assets/images/img_story02_02.png"/>
                            <img src="/src/assets/images/img_story03_02.png"/>
                            <img src="/src/assets/images/img_story04_02.png"/>
                            <img src="/src/assets/images/img_story05_02.png"/>
                            <img src="/src/assets/images/img_story06_02.png"/>
                            <img src="/src/assets/images/img_story07_02.png"/>
                            <img src="/src/assets/images/img_story08_02.png"/>
                            <img src="/src/assets/images/img_story09_02.png"/>
                            <img src="/src/assets/images/img_story10_02.png"/>
                            <img src="/src/assets/images/img_story11_02.png"/>
                            <img src="/src/assets/images/img_story12_02.png"/>
                            <img src="/src/assets/images/img_story13_02.png"/>
                            <img src="/src/assets/images/img_story14_02.png"/>
                            <img src="/src/assets/images/img_story15_02.png"/>
                            <img src="/src/assets/images/img_story16_02.png"/>
                            <img src="/src/assets/images/img_story17_02.png"/>
                            <img src="/src/assets/images/img_story18_02.png"/>
                            <img src="/src/assets/images/img_story19_02.png"/>
                            <img src="/src/assets/images/img_story20_02.png"/>
                            <img src="/src/assets/images/img_story21_02.png"/>
                            <img src="/src/assets/images/img_story22_02.png"/>
                            <img src="/src/assets/images/img_story23_02.png"/>
                            <img src="/src/assets/images/img_story24_02.png"/>
                            <img src="/src/assets/images/img_story25_02.png"/>
                        </Row>
                    </Row>
                </Col>
                <Col span="3" class="slideimg_right">
                    <div class="rightimg" :style="{ transform: `translateY(${RightUp})` }">
                        <ul class="rightimg_moveup" id="rightimgMoveup">
                            <li v-for="rightimg_moveup in rightimgs_moveup" :key="rightimg_moveup.id">
                            <img :src="rightimg_moveup.src">
                            </li>
                        </ul>
                    </div>
                </Col>
                </Row>
            </Row>
            <Row class="a_st_footer">
                <a class="num_nav">
                <Grid :border="true" :col="15" padding="0" square @click="change_st($event)">
                    <GridItem id="navItem01" class="Item"></GridItem>
                    <GridItem id="navItem02" class="Item"></GridItem>
                    <GridItem id="navItem03" class="Item"></GridItem>
                    <GridItem id="navItem04" class="Item"></GridItem>
                    <GridItem id="navItem05" class="Item"></GridItem>
                    <GridItem id="navItem06" class="Item"></GridItem>
                    <GridItem id="navItem07" class="Item"></GridItem>
                    <GridItem id="navItem08" class="Item"></GridItem>
                    <GridItem id="navItem09" class="Item"></GridItem>
                    <GridItem id="navItem10" class="Item"></GridItem>
                    <GridItem id="navItem11" class="Item"></GridItem>
                    <GridItem id="navItem12" class="Item"></GridItem>
                    <GridItem id="navItem13" class="Item"></GridItem>
                    <GridItem id="navItem14" class="Item"></GridItem>
                    <GridItem id="navItem15" class="Item"></GridItem>
                    <GridItem id="navItem16" class="Item"></GridItem>
                    <GridItem id="navItem17" class="Item"></GridItem>
                    <GridItem id="navItem18" class="Item"></GridItem>
                    <GridItem id="navItem19" class="Item"></GridItem>
                    <GridItem id="navItem20" class="Item"></GridItem>
                    <GridItem id="navItem21" class="Item"></GridItem>
                    <GridItem id="navItem22" class="Item"></GridItem>
                    <GridItem id="navItem23" class="Item"></GridItem>
                    <GridItem id="navItem24" class="Item"></GridItem>
                    <GridItem id="navItem25" class="Item"></GridItem>
                </Grid>
                </a>
            </Row>
        </Row>
    </Row>
    <!-- characters部分 -->
    <Row class="a_characters" id="a_characters">
        <Row class="a_charas_title">
        <Col span="8">
        </Col>
        <Col span="8">
        <Row class="a_c_img"></Row>
        </Col>
        <Col span="8">
        </Col>
        </Row>
        <Row class="a_charas_body"></Row>
    </Row>
    <!-- cast/staff部分 -->
    <Row class="a_cast" id="a_cast/staff">
        <Row class="acast_title">
        <Col span="8">
        </Col>
        <Col span="8">
        <div class="title_cast"></div>
        </Col>
        <Col span="8">
        </Col>
        </Row>
        <Row class="acast_body">
        <Col span="4">
        </Col>
        <Col span="8" class="acastbody_row1">
        <Row class="acast_name11">
            <span class="acastname11_left">岡部倫太郎</span>
            <span class="acastname11_mid">|</span>
            <span class="acastname11_right">宮野真守</span>
        </Row>
        <Row class="acast_name12">
            <span class="acastname12_left">椎名まゆり</span>
            <span class="acastname12_mid">|</span>
            <span class="acastname12_right">花澤香菜</span>
        </Row>
        <Row class="acast_name13">
            <span class="acastname13_left">橋田至</span>
            <span class="acastname13_mid">|</span>
            <span class="acastname13_right">関智一</span>
        </Row>
        <Row class="acast_name14">
            <span class="acastname14_left">牧瀬紅莉栖</span>
            <span class="acastname14_mid">|</span>
            <span class="acastname14_right">今井麻美</span>
        </Row>
        <Row class="acast_name15">
            <span class="acastname15_left">桐生萌郁</span>
            <span class="acastname15_mid">|</span>
            <span class="acastname15_right">後藤沙緒里</span>
        </Row>
        <!-- 预留空位 -->
        <!-- <Row class="acast_name16">
            <span class="acastname16_left">漆原るか</span>
            <span class="acastname16_mid">|</span>
            <span class="acastname16_right">小林ゆう</span>
        </Row> -->
        </Col>
        <Col span="8" class="acastbody_row1">
        <Row class="acast_name21">
            <span class="acastname21_left">阿万音鈴羽</span>
            <span class="acastname21_mid">|</span>
            <span class="acastname21_right">田村ゆかり</span>
        </Row>
        <Row class="acast_name22">
            <span class="acastname22_left">フェイリス・ニャンニャン</span>
            <span class="acastname22_mid">|</span>
            <span class="acastname22_right">桃井はるこ</span>
        </Row>
        <Row class="acast_name23">
            <span class="acastname23_left">天王寺裕吾</span>
            <span class="acastname23_mid">|</span>
            <span class="acastname23_right">寺杣昌纪</span>
        </Row>
        <Row class="acast_name24">
            <span class="acastname24_left">天王寺綯</span>
            <span class="acastname24_mid">|</span>
            <span class="acastname24_right">山本彩乃</span>
        </Row>
        <Row class="acast_name25">
            <span class="acastname25_left">漆原るか</span>
            <span class="acastname25_mid">|</span>
            <span class="acastname25_right">小林ゆう</span>
        </Row>
        <!-- 预留空位 -->
        <!-- <Row class="acast_name26">
            <span class="acastname26_left">来嶋かえで</span>
            <span class="acastname26_mid">|</span>
            <span class="acastname26_right">木野日菜</span>
        </Row> -->
        </Col>
        <Col span="4">
        </Col>
        </Row>
    </Row>
    <Row class="a_staff">
        <Row class="astaff_title">
        <Col span="8">
        </Col>
        <Col span="8">
        <div class="title_staff"></div>
        </Col>
        <Col span="8">
        </Col>
        </Row>
        <Row class="astaff_body">
        <Col span="4">
        </Col>
        <Col span="8" class="astaffbody_row1">
        <Row class="astaff_name11">
            <span class="astaffname11_left">原作</span>
            <span class="astaffname11_mid">|</span>
            <span class="astaffname11_right">志倉千代丸/Nitroplus.</span>
        </Row>
        <Row class="astaff_name12">
            <span class="astaffname12_left">監督</span>
            <span class="astaffname12_mid">|</span>
            <span class="astaffname12_right">佐藤卓哉、滨崎博嗣</span>
        </Row>
        <Row class="astaff_name13">
            <span class="astaffname13_left">シリーズ構成</span>
            <span class="astaffname13_mid">|</span>
            <span class="astaffname13_right">花田十輝</span>
        </Row>
        <Row class="astaff_name14">
            <span class="astaffname14_left">キャラクター原案</span>
            <span class="astaffname14_mid">|</span>
            <span class="astaffname14_right">huke</span>
        </Row>
        <Row class="astaff_name15">
            <span class="astaffname15_left">未来ガジェット原案</span>
            <span class="astaffname15_mid">|</span>
            <span class="astaffname15_right">SH@RP</span>
        </Row>
        <Row class="astaff_name16">
            <span class="astaffname16_left">キャラクターデザイン</span>
            <span class="astaffname16_mid">|</span>
            <span class="astaffname16_right">坂井久太</span>
        </Row>
        <Row class="astaff_name17">
            <span class="astaffname17_left">プロップデザイン</span>
            <span class="astaffname17_mid">|</span>
            <span class="astaffname17_right">中村和久<br />コレサワシゲユキ</span>
        </Row>
        <Row class="astaff_name18">
            <span class="astaffname18_left">美術設定</span>
            <span class="astaffname18_mid">|</span>
            <span class="astaffname18_right">金平和茂</span>
        </Row>
        <Row class="astaff_name19">
            <span class="astaffname19_left">色彩設計</span>
            <span class="astaffname19_mid">|</span>
            <span class="astaffname19_right">佐藤美由紀</span>
        </Row>
        <!-- 保留空位 -->
        <!-- <Row class="astaff_name110">
            <span class="astaffname110_left">色彩設計</span>
            <span class="astaffname110_mid">|</span>
            <span class="astaffname110_right">佐藤美由紀</span>
        </Row> -->
        <Row class="astaff_name111">
            <span class="astaffname111_left">オープニング主題歌</span>
            <span class="astaffname111_mid">|</span>
            <span class="astaffname111_right">「Hacking to the Gate」<br />&nbsp;歌：いとうかなこ</span>
        </Row>
        </Col>
        <Col span="8" class="astaffbody_row2">
        <Row class="astaff_name21">
            <span class="astaffname21_left">特効効果</span>
            <span class="astaffname21_mid">|</span>
            <span class="astaffname21_right">垣田由紀子</span>
        </Row>
        <Row class="astaff_name22">
            <span class="astaffname22_left">撮影監督</span>
            <span class="astaffname22_mid">|</span>
            <span class="astaffname22_right">中村圭介</span>
        </Row>
        <Row class="astaff_name23">
            <span class="astaffname23_left">美術監督</span>
            <span class="astaffname23_mid">|</span>
            <span class="astaffname23_right">衛藤功二</span>
        </Row>
        <Row class="astaff_name24">
            <span class="astaffname24_left">モデリング</span>
            <span class="astaffname24_mid">|</span>
            <span class="astaffname24_right">相馬 洋</span>
        </Row>
        <Row class="astaff_name25">
            <span class="astaffname25_left">編集</span>
            <span class="astaffname25_mid">|</span>
            <span class="astaffname25_right">後藤正浩</span>
        </Row>
        <Row class="astaff_name26">
            <span class="astaffname26_left">音響監督</span>
            <span class="astaffname26_mid">|</span>
            <span class="astaffname26_right">藤山房伸</span>
        </Row>
        <Row class="astaff_name27">
            <span class="astaffname27_left">音楽</span>
            <span class="astaffname27_mid">|</span>
            <span class="astaffname27_right">阿保 剛、村上 純</span>
        </Row>
        <Row class="astaff_name28">
            <span class="astaffname28_left">アニメーション制作</span>
            <span class="astaffname28_mid">|</span>
            <span class="astaffname28_right">WHITE FOX</span>
        </Row>
        <Row class="astaff_name29">
            <span class="astaffname29_left">製作</span>
            <span class="astaffname29_mid">|</span>
            <span class="astaffname29_right">未来ガジェット研究所</span>
        </Row>
        <!-- 保留空位 -->
        <!-- <Row class="astaff_name210">
            <span class="astaffname210_left">アニメーション制作</span>
            <span class="astaffname210_mid">|</span>
            <span class="astaffname210_right">WHITE FOX</span>
        </Row> -->
        <Row class="astaff_name211">
            <span class="astaffname211_left">エンディング主題歌</span>
            <span class="astaffname211_mid">|</span>
            <span class="astaffname211_right">「刻司ル十二ノ盟约」<br />&nbsp;歌:Zwei</span>
        </Row>
        </Col>
        <Col span="4">
        </Col>
        </Row>
    </Row>
</Row>
</template>

<script>
export default {
    name:'AlphaTimeLine',

    data(){
        return{
            hover: true, //将鼠标放在GridItem上是否有悬浮效果
            border: false, //GridItem是否有边框
            number_move: 0, //change_st(e)中使用到的移动几个图片单位
            LeftUp: "0px", //change_st(e)中使用到的左侧图片移动距离
            MidUp: "0px", //change_st(e)中使用到的中间图片移动距离
            RightUp: "0px", //change_st(e)中使用到的右侧图片移动距离
            TxtUp:"0px",//change_st(e)中使用到的文字区移动距离
            SlideimgUp: "0px", //character部分角色滑块滑动距离
            chara_num: 0, //change_chara(e)中使用到的移动图片单位
            chara_img: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //不同角色切换使用到的数组，1为true，0为false
            leftimgs_moveup:[
                {id:1, src:'/src/assets/images/img_story01_01.png'},
                {id:2, src:'/src/assets/images/img_story02_01.png'},
                {id:3, src:'/src/assets/images/img_story03_01.png'},
                {id:4, src:'/src/assets/images/img_story04_01.png'},
                {id:5, src:'/src/assets/images/img_story05_01.png'},
                {id:6, src:'/src/assets/images/img_story06_01.png'},
                {id:7, src:'/src/assets/images/img_story07_01.png'},
                {id:8, src:'/src/assets/images/img_story08_01.png'},
                {id:9, src:'/src/assets/images/img_story09_01.png'},
                {id:10, src:'/src/assets/images/img_story10_01.png'},
                {id:11, src:'/src/assets/images/img_story11_01.png'},
                {id:12, src:'/src/assets/images/img_story12_01.png'},
                {id:13, src:'/src/assets/images/img_story13_01.png'},
                {id:14, src:'/src/assets/images/img_story14_01.png'},
                {id:15, src:'/src/assets/images/img_story15_01.png'},
                {id:16, src:'/src/assets/images/img_story16_01.png'},
                {id:17, src:'/src/assets/images/img_story17_01.png'},
                {id:18, src:'/src/assets/images/img_story18_01.png'},
                {id:19, src:'/src/assets/images/img_story19_01.png'},
                {id:20, src:'/src/assets/images/img_story20_01.png'},
                {id:21, src:'/src/assets/images/img_story21_01.png'},
                {id:22, src:'/src/assets/images/img_story22_01.png'},
                {id:23, src:'/src/assets/images/img_story23_01.png'},
                {id:24, src:'/src/assets/images/img_story24_01.png'},
                {id:25, src:'/src/assets/images/img_story25_01.png'},
            ],//v-for展示左侧滑动图片
            rightimgs_moveup:[
                {id:1, src:'/src/assets/images/img_story01_03.png'},
                {id:2, src:'/src/assets/images/img_story02_03.png'},
                {id:3, src:'/src/assets/images/img_story03_03.png'},
                {id:4, src:'/src/assets/images/img_story04_03.png'},
                {id:5, src:'/src/assets/images/img_story05_03.png'},
                {id:6, src:'/src/assets/images/img_story06_03.png'},
                {id:7, src:'/src/assets/images/img_story07_03.png'},
                {id:8, src:'/src/assets/images/img_story08_03.png'},
                {id:9, src:'/src/assets/images/img_story09_03.png'},
                {id:10, src:'/src/assets/images/img_story10_03.png'},
                {id:11, src:'/src/assets/images/img_story11_03.png'},
                {id:12, src:'/src/assets/images/img_story12_03.png'},
                {id:13, src:'/src/assets/images/img_story13_03.png'},
                {id:14, src:'/src/assets/images/img_story14_03.png'},
                {id:15, src:'/src/assets/images/img_story15_03.png'},
                {id:16, src:'/src/assets/images/img_story16_03.png'},
                {id:17, src:'/src/assets/images/img_story17_03.png'},
                {id:18, src:'/src/assets/images/img_story18_03.png'},
                {id:19, src:'/src/assets/images/img_story19_03.png'},
                {id:20, src:'/src/assets/images/img_story20_03.png'},
                {id:21, src:'/src/assets/images/img_story21_03.png'},
                {id:22, src:'/src/assets/images/img_story22_03.png'},
                {id:23, src:'/src/assets/images/img_story23_03.png'},
                {id:24, src:'/src/assets/images/img_story24_03.png'},
                {id:25, src:'/src/assets/images/img_story25_03.png'},
            ],//v-for展示右侧滑动图片
            txtbtn:[1,0],//txtbtn是否显示，1为显示，0为隐藏
            istxtbodyanime:false,//istxtbodyanime是否显示
            istxtbodyanimereverse:false,//istxtbodyanimereverse是否显示
        }
    },
    methods:{
        //点击集数按钮切换不同剧集的图片和介绍文本
        change_st(e) {
        //监测各元素高度并且修改图片移动的距离
        let el_left = document.getElementById("LeftimgMoveup").children;
        // console.log(el_left[0].clientHeight);
        let el_mid = document.getElementById("midimgMoveup").children;
        // console.log(el_mid[0].clientHeight);
        let el_right = document.getElementById("rightimgMoveup").children;
        // console.log(el_right[0].clientHeight);
        let el_txt = document.getElementById("textslide").children;
        // console.log(el_txt[1].clientHeight);

        let itemid = e.target.id;
        console.log(e.target.id);
        this.number_move = parseInt(itemid.slice(7)) - 1;
        console.log(this.number_move);

        // 图片移动/文本移动
        //每个显示区域的高度
        let left_height = el_left[0].clientHeight;
        let mid_height = el_mid[0].clientHeight;
        let right_height = el_right[0].clientHeight;
        let txt_height = el_txt[1].clientHeight
        
        //不同集数对应需要移动的距离
        this.LeftUp = -left_height * this.number_move + "px";
        console.log(this.LeftUp);
        this.MidUp = mid_height * this.number_move + "px";
        console.log(this.MidUp);
        this.RightUp = -right_height * this.number_move + "px";
        console.log(this.RightUp);
        this.TxtUp = txt_height * this.number_move + "px";
        console.log(this.TxtUp);
        },

        //折叠文本
        fold(){
            // this.txtbodyheight = '13.5vw';
            this.istxtbodyanimereverse = true;
            this.istxtbodyanime = false;
            this.txtbtn[0] = 1;
            this.txtbtn[1] = 0;
        },

        //展开文本
        unfold(){
            // this.txtbodyheight = '100%';
            this.istxtbodyanime = true;
            this.istxtbodyanimereverse = false;
            this.txtbtn[0] = 0;
            this.txtbtn[1] = 1;
        },
    },
}
</script>

<style scoped>

    @import url("./AlphaTimeLine.css");

</style>