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
                                <div class="txtinsidebody" :class="{'txtbodyanime':istxtbodyanime,'txtbodyanimereverse':istxtbodyanimereverse}">
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
                                <div class="txtinsidebody" :class="{'txtbodyanime':istxtbodyanime,'txtbodyanimereverse':istxtbodyanimereverse}">
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
                                <div class="txtinsidebody" :class="{'txtbodyanime':istxtbodyanime,'txtbodyanimereverse':istxtbodyanimereverse}">
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
                                <div class="txtinsidebody" :class="{'txtbodyanime':istxtbodyanime,'txtbodyanimereverse':istxtbodyanimereverse}">
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
                                <div class="txtinsidebody" :class="{'txtbodyanime':istxtbodyanime,'txtbodyanimereverse':istxtbodyanimereverse}">
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
                                <div class="txtinsidetitle">始まりと終わりのプロローグ</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime':istxtbodyanime,'txtbodyanimereverse':istxtbodyanimereverse}">
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
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav06.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt07">
                            <div class="txtinside">
                                <div class="txtinsidetitle">始まりと終わりのプロローグ</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime':istxtbodyanime,'txtbodyanimereverse':istxtbodyanimereverse}">
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
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav07.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt08">
                            <div class="txtinside">
                                <div class="txtinsidetitle">始まりと終わりのプロローグ</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime':istxtbodyanime,'txtbodyanimereverse':istxtbodyanimereverse}">
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
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav08.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt09">
                            <div class="txtinside">
                                <div class="txtinsidetitle">始まりと終わりのプロローグ</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime':istxtbodyanime,'txtbodyanimereverse':istxtbodyanimereverse}">
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
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav09.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt10">
                            <div class="txtinside">
                                <div class="txtinsidetitle">始まりと終わりのプロローグ</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime':istxtbodyanime,'txtbodyanimereverse':istxtbodyanimereverse}">
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
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav10.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt11">
                            <div class="txtinside">
                                <div class="txtinsidetitle">始まりと終わりのプロローグ</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime':istxtbodyanime,'txtbodyanimereverse':istxtbodyanimereverse}">
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
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav11.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt12">
                            <div class="txtinside">
                                <div class="txtinsidetitle">始まりと終わりのプロローグ</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime':istxtbodyanime,'txtbodyanimereverse':istxtbodyanimereverse}">
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
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav12.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt13">
                            <div class="txtinside">
                                <div class="txtinsidetitle">始まりと終わりのプロローグ</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime':istxtbodyanime,'txtbodyanimereverse':istxtbodyanimereverse}">
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
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav13.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt14">
                            <div class="txtinside">
                                <div class="txtinsidetitle">始まりと終わりのプロローグ</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime':istxtbodyanime,'txtbodyanimereverse':istxtbodyanimereverse}">
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
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav14.png'></div>
                        </div>
                    </li>
                    <li>   
                        <div class="storytxt15">
                            <div class="txtinside">
                                <div class="txtinsidetitle">始まりと終わりのプロローグ</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime':istxtbodyanime,'txtbodyanimereverse':istxtbodyanimereverse}">
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
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav15.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt16">
                            <div class="txtinside">
                                <div class="txtinsidetitle">始まりと終わりのプロローグ</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime':istxtbodyanime,'txtbodyanimereverse':istxtbodyanimereverse}">
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
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav16.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt17">
                            <div class="txtinside">
                                <div class="txtinsidetitle">始まりと終わりのプロローグ</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime':istxtbodyanime,'txtbodyanimereverse':istxtbodyanimereverse}">
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
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav17.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt18">
                            <div class="txtinside">
                                <div class="txtinsidetitle">始まりと終わりのプロローグ</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime':istxtbodyanime,'txtbodyanimereverse':istxtbodyanimereverse}">
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
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav18.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt19">
                            <div class="txtinside">
                                <div class="txtinsidetitle">始まりと終わりのプロローグ</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime':istxtbodyanime,'txtbodyanimereverse':istxtbodyanimereverse}">
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
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav19.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt20">
                            <div class="txtinside">
                                <div class="txtinsidetitle">始まりと終わりのプロローグ</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime':istxtbodyanime,'txtbodyanimereverse':istxtbodyanimereverse}">
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
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav20.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt21">
                            <div class="txtinside">
                                <div class="txtinsidetitle">始まりと終わりのプロローグ</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime':istxtbodyanime,'txtbodyanimereverse':istxtbodyanimereverse}">
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
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav21.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt22">
                            <div class="txtinside">
                                <div class="txtinsidetitle">始まりと終わりのプロローグ</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime':istxtbodyanime,'txtbodyanimereverse':istxtbodyanimereverse}">
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
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav22.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt23">
                            <div class="txtinside">
                                <div class="txtinsidetitle">始まりと終わりのプロローグ</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime':istxtbodyanime,'txtbodyanimereverse':istxtbodyanimereverse}">
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
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav23.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt24">
                            <div class="txtinside">
                                <div class="txtinsidetitle">始まりと終わりのプロローグ</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime':istxtbodyanime,'txtbodyanimereverse':istxtbodyanimereverse}">
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
                            <div class="txtnum"><img src='/src/assets/images/bs_Nav24.png'></div>
                        </div>
                    </li>
                    <li>
                        <div class="storytxt25">
                            <div class="txtinside">
                                <div class="txtinsidetitle">始まりと終わりのプロローグ</div>
                                <div class="txtinsidebody" :class="{'txtbodyanime':istxtbodyanime,'txtbodyanimereverse':istxtbodyanimereverse}">
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
            txtbodyheight:"13.5vw",
            txtbtn:[1,0],
            istxtbodyanime:false,
            istxtbodyanimereverse:false,
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