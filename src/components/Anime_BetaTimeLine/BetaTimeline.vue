<template>
<!-- beta时间线 -->
<Row class="beta_timeline">
<!-- story部分 -->
<Row class="b_story" id="b_story">
    <Row class="b_st_title">
    <Col span="8">
    </Col>
    <Col span="8">
    <Row class="b_t_img"></Row>
    </Col>
    <Col span="8">
    </Col>
    </Row>
    <Row class="b_st_body">
        <Row class="body_text">
            <ul class="textbody" id="textslide" :style="{ transform: `translateY(${TxtUp})` }">
                <li class="txtsidebg"></li>
                <li>
                    <div class="storytxt01">
                        <div class="txtinside">
                            <div class="txtinsidetitle">零化域のミッシングリンク</div>
                            <div class="txtinsidebody" :class="{'txtbodyanime01':istxtbodyanime,'txtbodyanimereverse01':istxtbodyanimereverse}">
                                いくつもの世界線を巡り、様々な可能性を“なかったこと”にしながら、大切な人たちを守ろうと足掻き続けてきた岡部。その果てに辿り着いたのは“紅莉栖とまゆりのどちらを見殺しにするか”という、
                                ふたつの選択肢だった。苦悩と煩悶の末、岡部は「β世界線」――紅莉栖が自分以外のラボメンと出会わないまま死ぬという運命を選択する。
                                そして、紅莉栖の死から4ヶ月が経った。再び大学に通い始めた岡部は、真面目に授業に出席し、テニスサークルの合コンに参加するなど、
                                平凡な日常に埋没していく。それでも心の傷は癒しきれず、ラボへ顔を出す機会も減っていった。β世界線上の未来からやってきた鈴羽は、
                                第三次世界大戦が勃発する運命を変えようと岡部を説得。しかし、彼は「世界線の改変は、人間が手を出していい領域ではない」と、運命への介入を否定する。岡部の中で、
                                いつしか白衣をまとったマッドサイエンティスト「鳳凰院凶真」の顔は失われていった。
                                そんな折、岡部は秋葉原でヴィクトル・コンドリア大のレスキネン教授が主催する、人工知能に関するセミナーに出席する。ふとしたことから、
                                レスキネン教授の助手である比屋定真帆と知り合い、壇上に上がった彼女のスピーチを聴く岡部。その内容は、「人の記憶をデータ化して保存する」という、
                                かつて紅莉栖が提唱した理論と同様のものだった。真帆やレスキネンのチームはその理論をさらに推し進め、人の記憶と感情、そして心を持つ人工知能「アマデウス」を構築していた。
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
                            <div class="txtinsidetitle">閉時曲線のエピグラフ</div>
                            <div class="txtinsidebody" :class="{'txtbodyanime02':istxtbodyanime,'txtbodyanimereverse02':istxtbodyanimereverse}">
                                秋葉原のUPXで行われたレスキネン教授のセミナーで、人の記憶や心をベースに作られた人工知能「アマデウス」のデモンストレーションが始まった。
                                レスキネンの助手兼通訳を務める真帆の記憶をベースにした「アマデウス」は、まるで本物の人間のように感情的な反応を示し、会場の人々を驚かせる。
                                セミナー終了後、会場で知り合った真帆と雑談を交わす岡部。その中で、真帆がヴィクトル・コンドリア大に在籍していた紅莉栖の先輩であることを知る。
                                ふたりが紅莉栖の思い出話に花を咲かせていると、その様子を見たレスキネンが、岡部に「“彼女”に会うこと」を提案する。その相手とは、8ヶ月前の紅莉栖の記憶をベースにしたアマデウスだった。
                                真帆やレスキネン以外にも、紅莉栖と親しかった人間がテスターになれば、「アマデウス紅莉栖」の大きな成長につながるのだという。
                                岡部が対面した「アマデウス紅莉栖」は、紛れもなく紅莉栖そのものだった。短いやりとりの中で、岡部は「アマデウス紅莉栖」に亡き紅莉栖の面影を見出していく。
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
                            <div class="txtinsidetitle">双対福音のプロトコル</div>
                            <div class="txtinsidebody" :class="{'txtbodyanime03':istxtbodyanime,'txtbodyanimereverse03':istxtbodyanimereverse}">
                                岡部が主催する「未来ガジェット研究所」や秋葉原の街並みを見てみたいと、強く希望する「アマデウス紅莉栖」。岡部は生前の紅莉栖と面識がないラボメンが出入りするラボに、
                                「アマデウス紅莉栖」を連れて行くことに難色を示すが、結局は“彼女”の熱意に根負けしてしまう。そんな折、まゆりの発案で、ラボメンやまゆりのコスプレ仲間たちを交えて、
                                サンタコスでのクリスマスパーティを開くことに。たまたまパーティのことを知った真帆やレスキネンも招かれ、久しぶりにラボに賑やかで楽しい一時が訪れる。
                                パーティの最中、「アマデウス紅莉栖」からの着信に気づき、席を外す岡部。“彼女”は岡部が、なぜ自分のことをつい「クリスティーナ」と呼んでしまったのか、その理由にこだわっていた。
                                “彼女”の追及から逃れられず、岡部は「照れくさくて素直に名前を呼べず、あえて茶化した」と本当の思い答えると、「アマデウス紅莉栖」は動揺して赤くなってしまう。
                                生前の紅莉栖そのものの反応に胸がいっぱいになる岡部だったが、その様子を見た真帆は「ここにいるのはアマデウス。牧瀬紅莉栖は死んだの」と、冷酷な現実を突きつける。
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
                            <div class="txtinsidetitle">亡失流転のソリチュード</div>
                            <div class="txtinsidebody" :class="{'txtbodyanime04':istxtbodyanime,'txtbodyanimereverse04':istxtbodyanimereverse}">
                                「アマデウス紅莉栖」は人工知能であって、紅莉栖本人ではない。死んだ紅莉栖はもう帰ってこない――。真帆から厳しい現実を突きつけられた岡部は、
                                その直後に世界線を移動した感覚「リーディング・シュタイナー」を知覚する。動揺する岡部だったが、元の世界線とほとんど違いはなく、安堵する。
                                一方、鈴羽が悩みを抱えていることを知ったダルは、父として相談に乗ることに。鈴羽によると、タイムマシンに乗って一緒にやってきた女の子が、
                                1998年の秋葉原ではぐれて以来、行方不明なのだという。その少女の名は椎名かがり。2036年の世界で戦災孤児だったところを、まゆりに引き取られた養子である。
                                行方不明になった当時は10歳だった彼女は、現在22歳。手がかりはほとんどないが、「アマデウス紅莉栖」やフェイリスなど、頼れる人脈すべてを使って捜索を始める岡部。
                                そんな中、岡部のもとへダルが協力を依頼した「専門家」がやってくる。それは、別の世界線で幾度もまゆりの命を奪った「ラウンダー」の一員、桐生萌郁だった。
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
                            <div class="txtinsidetitle">非点収差のソリチュード</div>
                            <div class="txtinsidebody" :class="{'txtbodyanime05':istxtbodyanime,'txtbodyanimereverse05':istxtbodyanimereverse}">
                                萌郁の突然の来訪に、岡部は動揺を隠せない。岡部の警戒をよそに、ダルは萌郁が編集プロダクションのライターであり、調査のプロであると紹介。
                                そして、12年前に秋葉原でいなくなった椎名かがりの捜索を依頼する。その後、ほどなくして萌郁は高い調査能力を発揮。依然としてかがりは見つからないものの、
                                岡部たち以外にも彼女を捜している人物がいることを突き止めるのだった。やがて、年の変わり目が間近に迫った頃。岡部はるかから「会ってもらいたい人がいる」と相談を受ける。
                                るかが連れてきたのは、驚くほど紅莉栖によく似た少女だった。彼女はるかの父が知人からの紹介で預かった女の子で、過去の記憶を失っているのだという。
                                様々な物事に知識を持つ岡部なら、記憶を取り戻す良い方法を知っているかもしれないと、るかは考えたのだ。そこへ、たまたまやってきたまゆりを見た少女に、大きな変化が表れる。
                                頭を抱え、頭痛を訴える少女を見た鈴羽は、思わず「お前は、かがりなのか……？」と呟くのだった。
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
                            <div class="txtinsidetitle">軌道秩序のエクリプス</div>
                            <div class="txtinsidebody" :class="{'txtbodyanime06':istxtbodyanime,'txtbodyanimereverse06':istxtbodyanimereverse}">
                                るかが連れてきた記憶喪失の少女は、鈴羽がずっと捜していたかがりだった。たとえ名前がわかっても、かがりの記憶が戻るわけではない。
                                それでも、まゆりやるかたちラボメンの温かさに触れて、不安に閉ざされたかがりの表情に笑顔が戻っていく。しかし、鈴羽の表情は浮かない。
                                行方不明になる直前のかがりが、自分に銃を突きつけ、逃走した真意を測りかねていたのだ。やがて、元旦を迎えた岡部たちは、ラボメンやまゆりのコスプレ友達、
                                綯、そして真帆たちと連れだって、柳林神社へ初詣に向かう。神社では巫女装束のまゆりやるか、かがりたちが待っていた。かがりが紅莉栖に生き写しであることに驚く真帆だったが、
                                岡部は苦々しい顔で否定。その様子に、岡部が「アマデウス紅莉栖」に心を囚われすぎていると察した真帆は、「アマデウス」のテスターを切り上げるよう諭す。ラボに移動した一行は年明けパーティを開催。
                                宴もたけなわの中、真帆はラボにいた面々に「アマデウス紅莉栖」を紹介する。本物の人間そのものの反応を示す「アマデウス紅莉栖」に驚き、珍しがるラボメンだったが、
                                唐突に「アマデウス紅莉栖」の表示が切断されてしまう。その直後、銃を携えた武装集団が、ラボのドアを破って突入してくるのだった。
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
                            <div class="txtinsidetitle">振電遷移のエクリプス</div>
                            <div class="txtinsidebody" :class="{'txtbodyanime07':istxtbodyanime,'txtbodyanimereverse07':istxtbodyanimereverse}">
                                ラボに押し入ってきた武装集団の狙いは、かがりだった。ライダースーツとフルフェイスヘルメットに身を包んだ女が、かがりを連れ去ろうとした、その時。
                                異変を察知した天王寺が現れて、覆面の男たちを一蹴。不利を悟った襲撃者は撤退した。一難去って落ち着きを取り戻した岡部は、武装集団の正体に思いを巡らせる。
                                かつて、別の世界線で襲撃してきたSERN配下の「ラウンダー」と同一犯ならば、そのボスである天王寺が救出に来るはずがない。では、“敵”は一体何者なのか……？　
                                真相を探るため、そして襲撃者からかがりを守るため、岡部は天王寺に取引を持ちかける。もしまたかがりが狙われたら、綯も危険にさらされるかもしれない。
                                そこで、お互いのため協力関係を結び、かがりを守ることを依頼。さらに鈴羽が、自分とかがりを天王寺の店でアルバイトとして雇うことを提案する。
                                守る対象を目の届くところに置いておけるし、戦闘技術に長けた天王寺と鈴羽がいれば、“敵”も容易には手出しできない。その申し出を渋々飲んだ天王寺は、
                                襲撃者たちが発した謎のコードナンバーの発音から、西側諸国の軍関係者ではないかと指摘する。一方、突然アクセス不能になった「アマデウス」は、いまだ復旧していなかった。
                                真帆によると、何者かに乗っ取られた可能性があるという。しかし真帆との通話中、岡部のスマホのコールが鳴る。それは、「アマデウス紅莉栖」からの助けを求める着信だった。
                                驚く岡部の中で、またしても「リーディングシュタイナー」が発動。世界線が変動し、我に返った岡部の目の前に立っていたのは、まぎれもなく生身の紅莉栖だった。
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
                            <div class="txtinsidetitle">二律背反のデュアル</div>
                            <div class="txtinsidebody" :class="{'txtbodyanime08':istxtbodyanime,'txtbodyanimereverse08':istxtbodyanimereverse}">
                                変動した「α世界線」で岡部は、あの頃と変わらない姿の紅莉栖と再会する。喜びの涙を流すのも束の間、もうひとつの事実に思い至り、絶望する。
                                紅莉栖とまゆりのどちらを救うのか。その究極の選択において、岡部は紅莉栖の生存を望んだ。つまり、そこは「まゆりの死」へと運命が収束していく世界。
                                事実、まゆりは夏コミマの直後、心臓発作で亡くなっていた。いつもと様子が違う岡部を見て、彼が別の世界線から来たことを見抜く紅莉栖。
                                彼女は「もうβ世界線には戻りたくない」という岡部を、ある場所へと連れて行く。そこは、半年前に亡くなったまゆりの墓だった。紅莉栖は「まゆりの死」を選択した岡部が、
                                苦しみから抜け出すことができずに、毎日ここを訪れるのを見てきた。岡部にもまゆりにも、笑顔でいてほしい。そのためにも「β世界線」へ帰るべきだと、岡部を説得する紅莉栖。
                                彼女の強い意志と優しさに触れた岡部は、紅莉栖の思いを胸に、「β世界線」へと帰還を果たす。
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
                            <div class="txtinsidetitle">永劫回帰のパンドラ</div>
                            <div class="txtinsidebody" :class="{'txtbodyanime09':istxtbodyanime,'txtbodyanimereverse09':istxtbodyanimereverse}">
                                岡部が目を覚ますと、そこは病院のベッドの上だった。紅莉栖が生きていた「α世界線」から、元の「β世界線」へと戻ってきたのだ。
                                あの日ラボにいた岡部は、突然意識を失って倒れたらしい。同じタイミングで意識を失ったフブキは、「まゆりが死んだ世界」の夢を見たという。
                                それは、「α世界線」で岡部が体験したものとまったく同じだった。「アマデウス」の乗っ取り騒動と同時に、真帆の部屋に泥棒が侵入し、
                                さらに和光のオフィスでボヤ騒ぎが発生。「アマデウス」を狙う何者かの影がチラつき始める。真帆の安全を確保するため、岡部はフェイリスに相談し、
                                セキュリティレベルの高いフェイリスの家に滞在させることに。その後、鈴羽に呼び出された岡部は、厳しい口調で詰問される。「ここは前の世界線から変わったのか？」と。
                                岡部にとっても、あの時「電話レンジ（仮）」を使っていないのに、世界線が変動した理由はわからなかった。しかし、鈴羽には心当たりがあった。それは巷で「ロシアの核実験」などと報じられている、
                                タイムマシン開発実験によるもの――アメリカとロシアによるタイムマシン開発競争からつながる「第三次世界大戦」の序章だった。もはや一刻の猶予もないと、岡部に「第三次世界大戦」を回避するため、
                                再びタイムマシンに乗るよう迫る。しかし、無闇に世界線を変動させると、取り返しのつかない結果を招く可能性がある。さらに、岡部は紅莉栖との再会を経て「β世界線」でまゆりを守り抜いていく決意を固めており、
                                鈴羽の要請を頑なに拒否する。ラボを襲った武装集団や、「アマデウス」を狙う者たちの正体と目的を模索する岡部。考えを巡らせるうちに、彼らの目的はタイムマシン開発に必要不可欠なデータ――天才・牧瀬紅莉栖が遺した、未発表の論文であることに思い至る。
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
                            <div class="txtinsidetitle">存在証明のパンドラ</div>
                            <div class="txtinsidebody" :class="{'txtbodyanime10':istxtbodyanime,'txtbodyanimereverse10':istxtbodyanimereverse}">
                                何者かの乗っ取り工作でアクセス不能だった「アマデウス紅莉栖」は、無事復旧した。アメリカへ帰国する日が決まった真帆は、日本で過ごす残り少ない日々を堪能する。
                                フェイリスや萌郁との「夜更かしシンデレラたちの秘密のオフ会」で楽しいひと時を過ごす中、小説執筆用のメモを取り始める萌郁。「自分は代わりがいくらでもいる人間」と卑下し、
                                他人に劣等感を抱く彼女の言葉を否定しながらも、真帆は自分も萌郁と同じ思いを抱き続けてきたことに思い至る。後日、日本にいるうちに一度は来てみたかったという秋葉原のパーツ街へ、岡部と共に出かける真帆。
                                子どもの頃から機械いじりが好きだったという真帆は、他ではあまりお目にかかれない基盤などのパーツに目を輝かせる。随分打ち解けた2人の様子を見た「アマデウス紅莉栖」に、岡部は真帆との仲をさらに深めるよう煽られてしまう。
                                夕暮れ時、真帆の希望で向かったのは、紅莉栖が命を落とした“最期の場所”だった。そこは岡部にとっても、心の傷の象徴とも言える場所。紅莉栖の死から半年以上経っても、
                                まだ苦しみと悲しみから抜け出せない岡部の姿に、真帆は2人が深く繋がりあった関係だったことを確信する。だからこそ彼女は、自分が紅莉栖の遺産であるノートパソコンを所持していることを打ち明けた。
                                ロックが掛かっているため起動できないが、そこには紅莉栖の研究データや論文、プライベートなメモまで様々な事柄が記録されているという。岡部はそんな真帆に警告する。そのノートパソコンは、「世界を滅亡へと導く“パンドラの箱”だ」と……。
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
                            <div class="txtinsidetitle">存在忘却のパンドラ</div>
                            <div class="txtinsidebody" :class="{'txtbodyanime11':istxtbodyanime,'txtbodyanimereverse11':istxtbodyanimereverse}">
                                紅莉栖が遺したノートパソコンを起動するため、ネットを通じて“専門家”にロック解除を依頼した真帆。その相手とは、“裏のアルバイト”でパソコンのロック解除やハッキングに手を染めているダルだった。
                                そのことを知った岡部は、ノートパソコン内にはタイムマシン開発に必要な紅莉栖の論文が残されている可能性があり、これを世に出すことは「第三次世界大戦」に繋がりかねないとして、ロックの解除を止めるよう警告する。
                                その時、論文を狙う工作員がダルの隠れ家を襲撃してくる。脱出しようとするも、真帆を人質に取られ、追いつめられる岡部。だが、論文を奪われることを恐れた他国の工作員が現れて銃撃戦になった結果、
                                双方ともに撤退。岡部たちも事なきを得るが、銃撃に晒されたノートパソコンは粉々になってしまう。フェイリスのマンションへ引き上げて落ち着きを取り戻した真帆は、岡部に本心を吐露する。
                                ノートパソコンのロック解除に躍起になっていたのは、紅莉栖が必死に隠しているものを暴くことで、自分の力を示したかったからなのかもしれない、と。だが岡部は、真帆は紅莉栖のことをずっと大切に思っており、
                                彼女の遺志を守り続けたいと考えていることを見抜いていた。数日後、真帆がレスキネンと共に帰国する時がやってきた。だが、それは真帆との別れを意味するものではなかった。「アマデウス紅莉栖」のテストで目覚ましい成果を出した岡部は、
                                レスキネンから研究チームに参加するよう誘われたのだ。再会を誓って別れた岡部は、紅莉栖の死に囚われ続けた日々から、ようやく新たな一歩を踏み出していく。
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
                            <div class="txtinsidetitle">相互再帰のマザーグース</div>
                            <div class="txtinsidebody" :class="{'txtbodyanime12':istxtbodyanime,'txtbodyanimereverse12':istxtbodyanimereverse}">
                                かつて、2036年の世界からタイムマシンに乗ってこの時代へやってきた鈴羽とかがり。世界の破滅を食い止めるため、世界線を変えようとする鈴羽に、
                                突如としてかがりは銃を向けた。世界線を変えたら、ママに会えなくなる――。そう言い残して、かがりが姿を消してから10年あまりが経過した。
                                いまだ記憶は戻らないものの、かがりは穏やかな日々の中でラボの空気になじんでいく。だが、ある時、まゆりが口ずさんだ「探し物ひとつ、星の笑う声……」という歌声に強く反応し、
                                気を失ってしまった。気がついたかがりは、その歌詞をどこかで聞いたことがあるという。かがりの記憶を取り戻す手がかりを求めて、岡部たちは歌の出所を探り始めた。
                                口ずさんだまゆり自身は、鈴羽が歌っているのを聞いて。鈴羽は生前の母――由季から。由季はお菓子教室の先生である岡部の母から。そして岡部の母は、なんと「鳳凰院凶真」を始めた頃の岡部自身から聞いたという。
                                しかし、岡部も歌のことをまったく覚えていない。手詰まりになったかと思われた時、雑司ヶ谷駅周辺の風景を見たかがりの脳内に、歌と共にかつての記憶がフラッシュバックする。
                                この時代にやってきた直後に失踪した彼女は、とある施設に軟禁されていた。だが、十代の半ば頃に脱走。徒歩で雑司ヶ谷駅周辺に辿り着いた。憔悴しきっていたかがりは、
                                思わず母・まゆりがよく歌っていた「探し物ひとつ、星の笑う声」という歌を口ずさむ。その歌は、たまたまそこに居合わせた少年時代の岡部の心に、不思議な余韻を残していたのだ。
                                ようやく記憶を取り戻したかがりは、目の前にいたまゆりに「会いたかったよ、ママ……」と、泣きながらすがりつくのだった。
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
                            <div class="txtinsidetitle">回折叙唱のマザーグース</div>
                            <div class="txtinsidebody" :class="{'txtbodyanime13':istxtbodyanime,'txtbodyanimereverse13':istxtbodyanimereverse}">
                                記憶を取り戻したかがりは、以前とは見違えるように明るくなった。まるで子供の頃に戻ったかのように、まゆりを「ママ」と呼んで甘える姿に、岡部は思わず笑みをこぼす。
                                しかし、すべての記憶が戻ったわけではない。10歳の時に、この時代へタイムトラベルした直後に鈴羽とはぐれてから、22歳で千葉の山中に倒れているところを発見されるまでの12年間の記憶は、
                                いまだに空白のまま。様々な状況を踏まえて、岡部はラボを襲った連中とかがりは何らかのつながりがあり、かがりの記憶は何者かによって意図的に消されたと推測する。
                                そんな折、岡部の依頼で調査を進めていた萌郁から報告が入る。かがりが倒れていた場所の5キロ圏内に、登記上は存在しないはずの施設が隠れるように建っているのを発見したというのだ。
                                岡部は萌郁と共に現地へ向かうが、そこはすでにもぬけの殻。しかし、その状況から岡部はかがりがここに捕らえられていたと確信する。一方、些細なことで鈴羽と言い合いになり落ち込んだかがりを元気づけようと、
                                まゆりはパーティーを企画する。その直後、パーティの準備をしていたまゆりから、かがりが失踪したという連絡が入るのだった。
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
                            <div class="txtinsidetitle">弾性限界のリコグナイズ</div>
                            <div class="txtinsidebody" :class="{'txtbodyanime14':istxtbodyanime,'txtbodyanimereverse14':istxtbodyanimereverse}">
                                かがりが失踪してから時は移り、すでに季節は夏を迎えていた。鈴羽とダルは岡部に破棄されたタイムリープマシンを再び作るため、真帆に協力を要請する。
                                だが、タイムリープマシンの開発は、紅莉栖の天才的な頭脳があったからこそ成し遂げた奇跡だと言って、真帆は容易には首を縦に振らない。
                                一方、ラボの入り口で、かがりが持っていたうーぱを拾った鈴羽の前に、ライダースーツの女が現れる。それは無くしたうーぱを回収しに来たかがりだった。
                                意外なほどの力で襲い掛かるかがり。その姿は明らかにそれまでのかがりとは違うものだった。苦戦を強いられたものの、何とかかがりを撃退した鈴羽は、
                                １２年前この時代にやってきた時点で、かがりはすでに何者かによって洗脳を受けていたのではないかという結論に至る。
                                再び鈴羽たちに説得され、真帆の心は揺らぐ。かつて紅莉栖は、岡部と共に試行錯誤を繰り返しながらタイムリープマシンを完成させた。
                                もしもタイムリープマシンの修理に成功したら、彼女に並び立てるかもしれない――。
                                真帆はそんな決意を胸に、再び日本に向けて旅立つのだった。
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
                            <div class="txtinsidetitle">漸近線のリコグナイズ</div>
                            <div class="txtinsidebody" :class="{'txtbodyanime15':istxtbodyanime,'txtbodyanimereverse15':istxtbodyanimereverse}">
                                タイムリープマシン開発を目的に再来日を果たした真帆。
                                一方、多忙を理由に、由季と連絡を取り合っていないダルを見て、ふたりの将来に不安になった鈴羽。いくら焚きつけても、言い訳をして行動しないダルに痺れを切らした彼女は、
                                由季への告白を最終目標としたデートミッションを発動させる。
                                友人たちの力を借りて「デキる男になる方法」をレクチャーされるダルだが、いまひとつ効果はない。しかし、真帆が実験的に作った自己暗示システムにより、
                                まるで別人のようになったダルは、皆が見守る中、演出されたおしゃれなデートコースで、スマートに由季をエスコート。すべては上手くいくように思えたが、いつもと違うダルの様子に戸惑った由季は、
                                肝心なところで慌てて帰ってしまう。
                                意気消沈するダルを目の当たりにして、鈴羽は深く反省する。本当は、両親が仲良くしている姿を見て、これから自分が目指そうとしている道は間違っていないという確信が欲しかったのだと。
                                鈴羽の独白を聞いて思いを新たにしたダルは、その場で由季に電話をして明日もう一度デートする約束を取り付ける。
                                飾らない普段の自分で臨んだデートはつつがなく進み、やがてクライマックス。「僕はキミに一生、萌え萌え☆キュン！だお!!!!」という、告白ともつかない言葉にも、嬉しそうな由季を見て、
                                ふたりの未来を確信する鈴羽。
                                ダルの計らいで、由季とふたりで撮った写真を大切な宝物として、鈴羽は過去へと飛ぶ決意を定める。
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
                            <div class="txtinsidetitle">無限遠点のアルタイル</div>
                            <div class="txtinsidebody" :class="{'txtbodyanime16':istxtbodyanime,'txtbodyanimereverse16':istxtbodyanimereverse}">
                                ヴィクトル・コンドリア大学への留学を目指して、勉学に打ち込む日々を送る岡部。その結果、ほとんどラボに顔を出さなくなり、まゆりは一抹の寂しさを感じていた。
                                岡部と一緒にいても、彼の心はどこか別のところを向いている。子どもの頃から七夕の「織姫と彦星」に憧れていたまゆり。しかし彼女は、自分が岡部にとっての「織姫」ではないと感じていた。
                                そんな中、ダルと真帆は、ひそかに電話レンジ（仮）の修理を試みていることを岡部に知られてしまう。過去を変えることがどんな危険性をはらんでいるか熟知しているがゆえに、
                                強い言葉で2人に詰め寄る岡部。感情が高ぶるに任せ、真帆に言葉をぶつける岡部をダルは殴ってしまう。みんな強い願いを胸に電話レンジ（仮）を直そうとしている。それなのに、
                                その思いを無視した岡部の態度が我慢ならなかったのだ。
                                紅莉栖もまゆりも死なず、第三次世界大戦も起きない世界線――「シュタインズゲート」が存在するならば、探求することを諦めてはいけないと真帆は言う。
                                試行錯誤を繰り返すたびに凄惨な運命を目の当たりにすれば、心はすり減っていくと、
                                真帆の説得を否定する岡部だったが、彼の心の内では何かが変わりつつあった。
                                しかし、岡部と真帆たちのやり取りを聞いていたまゆりは、過去の自分の行動が間違っていたのではないかと思い悩む。
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
                            <div class="txtinsidetitle">双曲平面のアルタイル</div>
                            <div class="txtinsidebody" :class="{'txtbodyanime17':istxtbodyanime,'txtbodyanimereverse17':istxtbodyanimereverse}">
                                タイムマシンには既に、1年前紅莉栖が死んだ日への片道分しか残されていない。鈴羽は、世界線を変え、第三次世界大戦を回避するため、
                                過去へ旅立つことを決心する。そんな中まゆりは、岡部が牧瀬紅莉栖を見捨てることで自らを救った事実を知る。
                                運命すらわからない道へと旅立というとする鈴羽を止めるどころか、自分もいつか必ずタイムマシンを完成させると宣言するダル。
                                そのふたりの言葉を聞いたまゆりは自らの気持ちに気づき、「鳳凰院凶真の人質をやめる」と宣言する。
                                まゆりの様子がおかしいことに気づき、ラボへと向かった岡部。その時、秋葉原一帯で局地的な携帯電話の障害が発生。また「アマデウス紅莉栖」も謎のメッセージを残し、
                                データごと消失するという出来事が起こる。まゆりの身を案じ、彼女が向かったというラジ館へと急ぐ岡部。
                                一方、まゆりは、タイムマシンで旅立とうとしていた鈴羽に１年前の８月２１日――かつて自分が岡部にすべてを諦めさせたその時へと連れて行ってくれと頼む、
                                二度と戻れないかもしれないがそれでも構わないというまゆりの決意に頷く鈴羽。
                                しかしそこに突如、武装した集団が乱入する。瞬く間に戦場と化したラジ館の屋上。そして、そこに現れたのは、ライダースーツに身を包んだかがりだった。
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
                            <div class="txtinsidetitle">並進対称のアルタイル</div>
                            <div class="txtinsidebody" :class="{'txtbodyanime18':istxtbodyanime,'txtbodyanimereverse18':istxtbodyanimereverse}">
                                血を流し倒れるまゆりの姿を見て、武装した工作員たちに襲い掛かるかがり。銃弾を受けながらも人間離れした動きで工作員たちを排除していくものの、
                                やがて力尽きてしまう。一方、まゆりの元へと急ぐ岡部の前に、レスキネン教授が現れる。彼は、「影のCIA」とも呼ばれている民間情報機関「ストラテジック・フォーカス社」の一員だったのだ。
                                12年前、レスキネンの元に現れた椎名かがりという少女。彼女は2036年に存在する、未来のレスキネン自身から洗脳を受けていたのだ。
                                かがりを通じ、未来の自分からのメッセージとタイムマシンの存在を知ったレスキネンは、彼女を再び洗脳し、タイムマシンを手に入れ「時をつかさどる力」を得るためるため計画を立てた。そしてまさに実行の時がやってきたのだ。
                                事実を知り、衝撃を受ける岡部や真帆を前に、タイムマシンを奪おうとするレスキネン。だが、銃弾を受け死んだと思われていたかがりの、命と引き換えの抵抗にあい、阻まれてしまう。
                                しかし、かがりの死に悲しみに打ちひしがれる暇もなく、岡部達の前に他国の工作員が次々に現れ、屋上は再び戦場と化してしまう。激戦の中、タイムマシンに乗り込む鈴羽とかがり。だがその直後、
                                ヘリが放ったミサイルの爆発に巻き込まれ、岡部の眼前でタイムマシンは大破してしまう。
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
                            <div class="txtinsidetitle">循環座標のアルタイル</div>
                            <div class="txtinsidebody" :class="{'txtbodyanime19':istxtbodyanime,'txtbodyanimereverse19':istxtbodyanimereverse}">
                                攻撃ヘリによってタイムマシンは破壊されたが、結局まゆりと鈴羽の遺体は見つからなかった。2人の死がまだ確定していないのならば、
                                タイムマシンへの攻撃前まで時を遡れば救える可能性はある。岡部は紅莉栖が辿り着いた解を真帆とダルに教え、タイムリープマシンをもう一度作りあげる。
                                紅莉栖の犠牲の上に成り立つこの平和を、なんとしてでも守らなければならない。そのためなら、何万回失敗してもそのたびにやり直して、すべてを救う。
                                そんな固い決意と覚悟をもって、岡部は電話レンジ2号機を起動させた。タイムリープは見事成功。岡部は７月７日の夕刻にタイムリープする。
                                ビルの屋上で戦闘が始まるまで、もう時間がない。ラボへ向かった岡部は、真帆とダルに自分が未来からタイムリープしてきたことを告げ、
                                第三次世界大戦の引き金となるタイムマシン争奪戦を回避するための対処法を伝える。そして、すぐさまラジ館屋上へ向かってまゆりたちに接触するがものの、
                                やはりレスキネンや配下の工作員が現れ、またしてもタイムマシンは破壊されてしまう。まゆりと鈴羽が乗ったタイムマシンが破壊されるのは「歴史の収束点」であり、
                                どんな手を尽くしても結果は変えられないのではないか――。そんな不安と絶望を振り払い、岡部は悲劇を回避するために再びタイムリープを敢行した――。
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
                            <div class="txtinsidetitle">盟誓のリナシメント</div>
                            <div class="txtinsidebody" :class="{'txtbodyanime20':istxtbodyanime,'txtbodyanimereverse20':istxtbodyanimereverse}">
                                タイムリープ後、岡部が目を覚ましたのは崩れかけた廃ビルの一室だった。岡部はガラス戸に映った自分が40代半ばになっていること、
                                そして部屋の外に荒廃した秋葉原の街並みが広がっていることに愕然とする。おぼつかない足取りで外に出た彼は、やってきた兵士に銃を突き付けられる。
                                その窮地を救ったのは、鈴羽だった。岡部という名を聞いて何故か驚いた鈴羽は、彼をとある施設へと連れて行く。そこで岡部は自分と同様に年齢を重ねたダルと再会し、
                                今が2036年だと教えられる。ダルの話によれば、2011年７月７日、岡部は確かにタイムリープを試みた。しかし、なぜか電話レンジ2号機は作動せず、
                                世界はタイムマシン理論を巡る戦乱の時代に突入したのだという。そこで岡部たちは破滅的な未来を回避しようと、レジスタンス組織「ワルキューレ」を設立し、
                                タイムマシンの制作に乗り出した。そして2025年、岡部は軍事組織「ストラトフォー」の手に落ち、度重なる拷問と実験によって再起不能にされ、『死亡した』とされていた。
                                しかしその後も、仲間たちの手で肉体は生かされ続け、古いPCに保存されていた岡部の記憶を脳に送り込んだことで、11年の時を越えて彼は目を覚ましたのだ。
                                通信で岡部の覚醒を知り、喜ぶフェイリスとるか。だが、喜びも束の間、2人は敵の罠にはまって窮地に陥る。るかはフェイリスや仲間たちを逃がすため、敵を引き付けながら奮闘するも負傷。
                                急いで駆け付けた岡部と再会できたるかは、満足そうな微笑みを浮かべながら岡部の腕の中で息絶えてしまう。岡部は自分が選んだ世界線の先に悲劇が待っていることを、
                                鈴羽から何度も警告されていた。だが、その「現実」がいかなるものなのかは、目の当たりにするまで本当の意味では理解していなかったと、己の愚かさを悔やむ。だが、
                                こうした「いくつもの失敗」の先には、すべてが救われる世界線「シュタインズゲート」があるはず。そう諭された岡部は悲しみを乗り越えて「シュタインズゲート」をめざす決意を改めて固めるのだった。
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
                            <div class="txtinsidetitle">結像のリナシメント</div>
                            <div class="txtinsidebody" :class="{'txtbodyanime21':istxtbodyanime,'txtbodyanimereverse21':istxtbodyanimereverse}">
                                岡部が昏睡状態に陥ってからの11年間、ずっと付きっ切りで容態を管理してきたのは「アマデウス紅莉栖」だった。これから過去へ旅立っても、
                                目覚めた時には常に彼女が側にいてくれる。心強い味方を頼りに、ラボメンたちの希望と願いを背負いながら、岡部は25年の時をさかのぼる連続タイムリープに挑む。
                                何度目かのタイムリープの後、岡部は戦闘の真っただ中で目を覚ます。それはまさに、2025年、「ストラトフォー」に拘束される直前の時間帯だった。
                                かつての自分は、逃走ルートを最短距離で移動した結果、敵に捕まったと推測した岡部。今度はあえて回り道をすることで、「敵に捕まって拷問される」という結末の回避に成功する。
                                やがて3000回ものタイムリープの果てに、ついに2011年7月7日に辿り着いた岡部。そこで彼は、高笑いをあげ、「鳳凰院凶真」の復活を高らかに宣言する。もう諦めることも、
                                妥協することも決してない。みんなの思いを力にするため、岡部は封印していたかつての自分の姿を取り戻したのだ。初めて目にする中厨二病ノリの異様なテンションにドン引きの真帆とは対照的に、
                                「凶真」の帰還を喜ぶラボメン達。そして間を置くことなく、岡部はこれから起こるラジ館での戦闘に向けて手を打ち始めた。やがて、ラジ館屋上でレスキネンと対決した、あの瞬間が訪れる。
                                かがりから未来の知識を得て、綿密な計画を立ててこの瞬間に臨んだレスキネンだったが、すべて岡部によって先手を打たれ孤立無援の状態に陥る。そして岡部は、
                                まゆりに向かって「過去へ旅立ち、シュタインズゲートへの扉を開くためのオペレーション・アークライトを完遂せよ」と指示する。悲劇は回避された……かと思われた。
                                しかし、またもやそこへ他国の攻撃ヘリが予定よりも早く出現。放たれたミサイルが屋上で大爆発を起こすのだった。
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
                            <div class="txtinsidetitle">投企のリナシメント</div>
                            <div class="txtinsidebody" :class="{'txtbodyanime22':istxtbodyanime,'txtbodyanimereverse22':istxtbodyanimereverse}">
                                何度タイムリープを重ねても、タイムマシンが破壊されてしまう。これまで、タイムマシン争奪に関わる「ストラトフォー」のレスキネン、
                                「DURPA（アメリカ国防高度研究計画局）」のレイエス、そしてロシアの諜報機関のいずれかが原因でタイムマシンは破壊されてきた。
                                岡部の計画でレスキネンとレイエスの動きは封じることができたが、残るロシアにはどう対処すべきか。岡部はダルや真帆、アマデウス紅莉栖の知恵を借りることに。
                                ロシアは亡命してきた中鉢教授から得た情報を元に、牧瀬紅莉栖、そしてアマデウスの存在にたどり着いたと推測。そこで岡部は、過去にメールを送る「Dメール」を改良した「Dライン」を使って紅莉栖の記憶データを保護し、
                                ロシアにタイムマシン技術が渡るのを阻止しようと考える。だが、巨大国家であるロシアから情報を守り抜くのは不可能に近い。そこで「アマデウス紅莉栖」は、紅莉栖の記憶を保存した直後のデータにアクセスし、
                                消去することを提案する。だがそれは、「アマデウス紅莉栖」の“存在自体をなかったことにする”ことを意味していた。これまで自分を支え続けてくれた「アマデウス紅莉栖」の消去に躊躇し、
                                煩悶する岡部。彼の心中を察した「アマデウス紅莉栖」は、深夜の秋葉原の街を見せてほしいと言う。プログラムに過ぎない自分を「ひとりの人間」として扱ってくれる。
                                そんな岡部の優しさを嬉しく思いながらも、「アマデウス紅莉栖」は未来を変える決断を下しかねている岡部の背中を押す。「自分はがオリジナルの紅莉栖を救うために存在していたのだとしたら、
                                それはとても論理的で、素敵なこと」であると。そして彼女に促され決意した岡部は、またも「紅莉栖」との別れの時を迎えることとなる。
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
                            <div class="txtinsidetitle">無限遠点のアークライト</div>
                            <div class="txtinsidebody" :class="{'txtbodyanime23':istxtbodyanime,'txtbodyanimereverse23':istxtbodyanimereverse}">
                                ついに迎えた決戦の時。ラジ館へと向かった岡部は、レスキネンに発見されてしまい、銃を突きつけられる。しかし、そこへ現れた萌郁に助けられて、
                                まゆりたちがいる屋上へと急ぐ。一方、屋上では、タイムマシンで過去へ飛ぼうとするまゆりと鈴羽の前に、かがりが立ちふさがっていた。もしも、
                                タイムマシンで過去が改変されたら、自分がまゆりと出会う未来は消えてしまうかもしれない。どんなに過酷な未来が待っていたとしても、かがりにとってまゆりとの出会いは、
                                たったひとつの大切な未来なのだ。レスキネンの指示ではなく、自らの意思で、かがりは鈴羽と壮絶な一騎打ちを開始する。だが、2人を止めるために、まゆりは身を挺して戦いに割って入った。
                                たとえ二度と帰れないとしても、過去に戻って岡部の背中を押してあげたい。そんなまゆりの強い願い心に動かされたかがりは、岡部を信じてまゆりを送り出す決意を固めた。そこへ、
                                レスキネン配下の特殊部隊が突入してくる。かがりと萌郁が応戦する中、飛来した戦闘ヘリからミサイルが放たれる。しかし、ミサイルが爆発する直前に、まゆりと鈴羽を乗せたタイムマシンが過去へ飛び立ったのを自らの目でしっかりと確認した岡部は、
                                オペレーションが達成されたことを確信。白衣をたなびかせながら、高らかに勝利を宣言する。時は流れて2025年。岡部は2010年の自分に向けて、最終ミッション「オペレーション・スクルド」を伝えるムービーメールを送った。
                                これで2010年の岡部は、まゆりからの叱咤激励と、未来の自分からのムービーメールを受け取って「世界を騙す」ための戦いに臨み、やがて「シュタインズゲート」に至るだろう。打つべき手をすべて打った岡部は、
                                タイムマシンで旅立ったまま行方不明のまゆりたちを探す最終ミッション「オペレーション・アルタイル」に乗り出す。何千年、何万年もの時を超えることになろうと、必ずやり遂げる。その決意を胸に、岡部はタイムマシンで長い旅に出るのだった。
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
                            <div class="txtinsidetitle">結晶多形のヴァレンティヌス</div>
                            <div class="txtinsidebody" :class="{'txtbodyanime24':istxtbodyanime,'txtbodyanimereverse24':istxtbodyanimereverse}">
                                アメリカへの帰国準備を進める真帆。ふとカレンダーを見ると、バレンタインデーが近いことに気づく。かつての紅莉栖とのやりとりに思いを馳せる……。
                                「アマデウス紅莉栖」は、帰国する前に岡部にチョコを渡して、秘めたる想いを伝えるよう促すが、真帆はかたくなに否定する。いつの間にかその話を聞いていたフェイリスは、
                                とある企てを思いつき、ニヤリとするのだった。その頃、天王寺から初めてのバイト代を受け取った鈴羽とかがりは、使い道について思いを巡らせていた。
                                そんな時、るかから「バレンタインデーは、大好きな人にチョコを贈って想いを伝える日」と聞き、バレンタインの風習は廃れてしまった2036年からやってきたかがりは、
                                素敵な風習があることに感銘を受けて目を輝かせる。かがりの様子を見た鈴羽は、かがりにチョコを渡すような人がいることに驚き、相手は誰なのかと訝しがる。その後、フェイリスの呼びかけで女子たちが集結。
                                みんなで手作りチョコを作る「第36回円卓チョコレート会」が開かれた。「ここで作ったチョコをお店で配れば、いい宣伝になる」というフェイリスの思惑をよそに、女子たちはチョコを作り始める。
                                しかし、真帆やカエデ、萌郁はまともに料理が作れず、たちまちキッチンは混沌と化していく。だが、そこへ救世主・るかと由季が遅れてやってくる。2人の指導で作業は軌道に乗り、形はいびつだが、
                                味はそれなりに美味しいチョコが出来上がった。綯は父・天王寺に。フブキとカエデは親友であるお互いに。萌郁はいつも世話になっているフェイリスの執事・黒木に。由季はダルに。
                                それぞれの大切な人へチョコを贈る。かがりは岡部だけでなく、まゆりやるか、るかの父、天王寺など、自分が出会った大切な人たち全員にチョコを残して、姿を消してしまった。
                                鈴羽は自分宛てに作られたかがりのチョコを口にしながら、彼女の笑顔を思い起こす。一方、紅莉栖が最期を迎えた場所には、「Dear my friend KURISU」というメッセージカードと共に、
                                真帆の手作りチョコを詰めた箱が置かれていた。
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
                    <img src="/src/assets/images/img_story01_02.png.png" />
                    <img src="/src/assets/images/img_story02_02.png.png" />
                    <img src="/src/assets/images/img_story03_02.png.png" />
                    <img src="/src/assets/images/img_story04_02.png.png" />
                    <img src="/src/assets/images/img_story05_02.png.png" />
                    <img src="/src/assets/images/img_story06_02.png.png" />
                    <img src="/src/assets/images/img_story07_02.png.png" />
                    <img src="/src/assets/images/img_story08_02.png.png" />
                    <img src="/src/assets/images/img_story09_02.png.png" />
                    <img src="/src/assets/images/img_story10_02.png.png" />
                    <img src="/src/assets/images/img_story11_02.png.png" />
                    <img src="/src/assets/images/img_story12_02.png.png" />
                    <img src="/src/assets/images/img_story13_02.png.png" />
                    <img src="/src/assets/images/img_story14_02.png.png" />
                    <img src="/src/assets/images/img_story15_02.png.png" />
                    <img src="/src/assets/images/img_story16_02.png.png" />
                    <img src="/src/assets/images/img_story17_02.png.png" />
                    <img src="/src/assets/images/img_story18_02.png.png" />
                    <img src="/src/assets/images/img_story19_02.png.png" />
                    <img src="/src/assets/images/img_story20_02.png.png" />
                    <img src="/src/assets/images/img_story21_02.png.png" />
                    <img src="/src/assets/images/img_story22_02.png.png" />
                    <img src="/src/assets/images/img_story23_02.png.png" />
                    <img src="/src/assets/images/img_story24_02.png.png" />
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
        <Row class="b_st_footer">
            <a class="num_nav">
            <Grid :border="true" :col="14" padding="0" square @click="change_st($event)">
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
            </Grid>
            </a>
        </Row>
    </Row>
</Row>
<!-- characters部分 -->
<Row class="b_characters" id="b_characters">
    <Row class="b_charas_title">
    <Col span="8">
    </Col>
    <Col span="8">
    <Row class="b_c_img"></Row>
    </Col>
    <Col span="8">
    </Col>
    </Row>
    <Row class="b_charas_body">
    <Row class="charas_text"></Row>
    <Row class="charas_cut">
        <Row class="charas_main">
        <Row class="float_img_whole">
            <Row class="float_top_img">
            <Row class="float_chara1" v-if="chara_img[0]">
                <div class="float_chara_1_1">
                    <img src="/src/assets/images/img_charamain01_1.png.png" />
                </div>
                <div class="float_chara_1_2">
                    <img src="/src/assets/images/img_charamain01_2.png.png" />
                </div>
                <div class="float_chara_1_3">
                    <img src="/src/assets/images/img_charamain01_3.png.png" />
                </div>
                <div class="float_chara_txt">
                    <img src="/src/assets/images/charactertext01.svg" />
                </div>
            </Row>
            <Row class="float_chara2" v-if="chara_img[1]">
                <div class="float_chara_2_1">
                    <img src="/src/assets/images/img_charamain02_1.png.png" />
                </div>
                <div class="float_chara_2_2">
                    <img src="/src/assets/images/img_charamain02_2.png.png" />
                </div>
                <div class="float_chara_2_3">
                    <img src="/src/assets/images/img_charamain02_3.png.png" />
                </div>
                <div class="float_chara_txt">
                    <img src="/src/assets/images/charactertext02.svg" />
                </div>
            </Row>
            <Row class="float_chara3" v-if="chara_img[2]">
                <div class="float_chara_3_1">
                    <img src="/src/assets/images/img_charamain03_1.png.png" />
                </div>
                <div class="float_chara_3_2">
                    <img src="/src/assets/images/img_charamain03_2.png.png" />
                </div>
                <div class="float_chara_3_3">
                    <img src="/src/assets/images/img_charamain03_3.png.png" />
                </div>
                <div class="float_chara_txt">
                    <img src="/src/assets/images/charactertext03.svg" />
                </div>
            </Row>
            <Row class="float_chara4" v-if="chara_img[3]">
                <div class="float_chara_4_1">
                    <img src="/src/assets/images/img_charamain04_1.png.png" />
                </div>
                <div class="float_chara_4_2">
                    <img src="/src/assets/images/img_charamain04_2.png.png" />
                </div>
                <div class="float_chara_4_3">
                    <img src="/src/assets/images/img_charamain04_3.png.png" />
                </div>
                <div class="float_chara_txt">
                    <img src="/src/assets/images/charactertext04.svg" />
                </div>
            </Row>
            <Row class="float_chara5" v-if="chara_img[4]">
                <div class="float_chara_5_1">
                    <img src="/src/assets/images/img_charamain05_1.png.png" />
                </div>
                <div class="float_chara_5_2">
                    <img src="/src/assets/images/img_charamain05_2.png.png" />
                </div>
                <div class="float_chara_5_3">
                    <img src="/src/assets/images/img_charamain05_3.png.png" />
                </div>
                <div class="float_chara_txt">
                    <img src="/src/assets/images/charactertext05.svg" />
                </div>
            </Row>
            <Row class="float_chara6" v-if="chara_img[5]">
                <div class="float_chara_6_1">
                    <img src="/src/assets/images/img_charamain06_1.png.png" />
                </div>
                <div class="float_chara_6_2">
                    <img src="/src/assets/images/img_charamain06_2.png.png" />
                </div>
                <div class="float_chara_6_3">
                    <img src="/src/assets/images/img_charamain06_3.png.png" />
                </div>
                <div class="float_chara_txt">
                    <img src="/src/assets/images/charactertext06.svg" />
                </div>
            </Row>
            <Row class="float_chara7" v-if="chara_img[6]">
                <div class="float_chara_7_1">
                    <img src="/src/assets/images/img_charamain07_1.png.png" />
                </div>
                <div class="float_chara_7_2">
                    <img src="/src/assets/images/img_charamain07_2.png.png" />
                </div>
                <div class="float_chara_7_3">
                    <img src="/src/assets/images/img_charamain07_3.png.png" />
                </div>
                <div class="float_chara_txt">
                    <img src="/src/assets/images/charactertext07.svg" />
                </div>
            </Row>
            <Row class="float_chara8" v-if="chara_img[7]">
                <div class="float_chara_8_1">
                    <img src="/src/assets/images/img_charamain08_1.png.png" />
                </div>
                <div class="float_chara_8_2">
                    <img src="/src/assets/images/img_charamain08_2.png.png" />
                </div>
                <div class="float_chara_8_3">
                    <img src="/src/assets/images/img_charamain08_3.png.png" />
                </div>
                <div class="float_chara_txt">
                    <img src="/src/assets/images/charactertext08.svg" />
                </div>
            </Row>
            <Row class="float_chara9" v-if="chara_img[8]">
                <div class="float_chara_9_1">
                    <img src="/src/assets/images/img_charamain09_1.png.png" />
                </div>
                <div class="float_chara_9_2">
                    <img src="/src/assets/images/img_charamain09_2.png.png" />
                </div>
                <div class="float_chara_9_3">
                    <img src="/src/assets/images/img_charamain09_3.png.png" />
                </div>
                <div class="float_chara_txt">
                    <img src="/src/assets/images/charactertext09.svg" />
                </div>
            </Row>
            <Row class="float_chara10" v-if="chara_img[9]">
                <div class="float_chara_10_1">
                    <img src="/src/assets/images/img_charamain10_1.png.png" />
                </div>
                <div class="float_chara_10_2">
                    <img src="/src/assets/images/img_charamain10_2.png.png" />
                </div>
                <div class="float_chara_10_3">
                    <img src="/src/assets/images/img_charamain10_3.png.png" />
                </div>
                <div class="float_chara_txt">
                    <img src="/src/assets/images/charactertext10.svg" />
                </div>
            </Row>
            <Row class="float_chara11" v-if="chara_img[10]">
                <div class="float_chara_11_1">
                    <img src="/src/assets/images/img_charamain11_1.png.png" />
                </div>
                <div class="float_chara_11_2">
                    <img src="/src/assets/images/img_charamain11_2.png.png" />
                </div>
                <div class="float_chara_11_3">
                    <img src="/src/assets/images/img_charamain11_3.png.png" />
                </div>
                <div class="float_chara_txt">
                    <img src="/src/assets/images/charactertext11.svg" />
                </div>
            </Row>
            <Row class="float_chara12" v-if="chara_img[11]">
                <div class="float_chara_12_1">
                    <img src="/src/assets/images/img_charamain12_1.png.png" />
                </div>
                <div class="float_chara_12_3">
                    <img src="/src/assets/images/img_charamain12_2.png.png" />
                </div>
                <div class="float_chara_txt">
                    <img src="/src/assets/images/charactertext12.svg" />
                </div>
            </Row>
            <Row class="float_chara13" v-if="chara_img[12]">
                <div class="float_chara_13_1">
                    <img src="/src/assets/images/img_charamain13_1.png.png" />
                </div>
                <div class="float_chara_13_2">
                    <img src="/src/assets/images/img_charamain13_2.png.png" />
                </div>
                <div class="float_chara_13_3">
                    <img src="/src/assets/images/img_charamain13_3.png.png" />
                </div>
                <div class="float_chara_txt">
                    <img src="/src/assets/images/charactertext13.svg" />
                </div>
            </Row>
            <Row class="float_chara14" v-if="chara_img[13]">
                <div class="float_chara_14_1">
                    <img src="/src/assets/images/img_charamain14_1.png.png" />
                </div>
                <div class="float_chara_14_2">
                    <img src="/src/assets/images/img_charamain14_2.png.png" />
                </div>
                <div class="float_chara_14_3">
                    <img src="/src/assets/images/img_charamain14_3.png.png" />
                </div>
                <div class="float_chara_txt">
                    <img src="/src/assets/images/charactertext14.svg" />
                </div>
            </Row>
            <Row class="float_chara15" v-if="chara_img[14]">
                <div class="float_chara_15_1">
                    <img src="/src/assets/images/img_charamain15_1.png.png" />
                </div>
                <div class="float_chara_15_2">
                    <img src="/src/assets/images/img_charamain15_2.png.png" />
                </div>
                <div class="float_chara_15_3">
                    <img src="/src/assets/images/img_charamain15_3.png.png" />
                </div>
                <div class="float_chara_txt">
                    <img src="/src/assets/images/charactertext15.svg" />
                </div>
            </Row>
            <Row class="float_chara16" v-if="chara_img[15]">
                <div class="float_chara_16_1">
                    <img src="/src/assets/images/img_charamain16_1.png.png" />
                </div>
                <div class="float_chara_16_2">
                    <img src="/src/assets/images/img_charamain16_2.png.png" />
                </div>
                <div class="float_chara_16_3">
                    <img src="/src/assets/images/img_charamain16_3.png.png" />
                </div>
                <div class="float_chara_txt">
                    <img src="/src/assets/images/charactertext16.svg" />
                </div>
            </Row>
            </Row>
            <Row class="float_bg_img">
            <Row class="float_bg_img1">
                <img src="/src/assets/images/bg_story01.png" />
            </Row>
            <Row class="float_bg_img2">
                <img src="/src/assets/images/bg_story02.png" />
            </Row>
            <Row class="float_bg_img3">
                <img src="/src/assets/images/bg_story03.png" />
            </Row>
            </Row>
        </Row>
        <Row class="slide_img_whole">
            <Col span="18">
            </Col>
            <Col span="3" class="slide_img_col">
            <div class="slide_img" :style="{ transform: `translateY(${SlideimgUp})` }">
            <img src="/src/assets/images/img_charabg01.png.png" id="SlideImg01" />
            <img src="/src/assets/images/img_charabg02.png.png" id="SlideImg02" />
            <img src="/src/assets/images/img_charabg03.png.png" id="SlideImg03" />
            <img src="/src/assets/images/img_charabg04.png.png" id="SlideImg04" />
            <img src="/src/assets/images/img_charabg05.png.png" id="SlideImg05" />
            <img src="/src/assets/images/img_charabg06.png.png" id="SlideImg06" />
            <img src="/src/assets/images/img_charabg07.png.png" id="SlideImg07" />
            <img src="/src/assets/images/img_charabg08.png.png" id="SlideImg08" />
            <img src="/src/assets/images/img_charabg09.png.png" id="SlideImg09" />
            <img src="/src/assets/images/img_charabg10.png.png" id="SlideImg10" />
            <img src="/src/assets/images/img_charabg11.png.png" id="SlideImg11" />
            <img src="/src/assets/images/img_charabg12.png.png" id="SlideImg12" />
            <img src="/src/assets/images/img_charabg13.png.png" id="SlideImg13" />
            <img src="/src/assets/images/img_charabg14.png.png" id="SlideImg14" />
            <img src="/src/assets/images/img_charabg15.png.png" id="SlideImg15" />
            <img src="/src/assets/images/img_charabg16.png.png" id="SlideImg16" />
            </div>
            </Col>
            <Col span="3">
            </Col>
        </Row>
        </Row>
    </Row>
    <Row class="charas_footer">
        <Row class="charas_nav">
        <Row class="char_row1">
            <Col span="3" class="char_item01">
            <a @click="change_chara($event)" id="CharItem1">
            <img src="/src/assets/images/img_charaft01.png" />
            </a>
            </Col>
            <Col span="3" class="char_item02">
            <a @click="change_chara($event)" id="CharItem2">
            <img src="/src/assets/images/img_charaft02.png" />
            </a>
            </Col>
            <Col span="3" class="char_item03">
            <a @click="change_chara($event)" id="CharItem3">
            <img src="/src/assets/images/img_charaft03.png" />
            </a>
            </Col>
            <Col span="3" class="char_item04">
            <a @click="change_chara($event)" id="CharItem4">
            <img src="/src/assets/images/img_charaft04.png" />
            </a>
            </Col>
            <Col span="3" class="char_item05">
            <a @click="change_chara($event)" id="CharItem5">
            <img src="/src/assets/images/img_charaft05.png" />
            </a>
            </Col>
            <Col span="3" class="char_item06">
            <a @click="change_chara($event)" id="CharItem6">
            <img src="/src/assets/images/img_charaft06.png" />
            </a>
            </Col>
            <Col span="3" class="char_item07">
            <a @click="change_chara($event)" id="CharItem7">
            <img src="/src/assets/images/img_charaft07.png" />
            </a>
            </Col>
            <Col span="3" class="char_item08">
            <a @click="change_chara($event)" id="CharItem8">
            <img src="/src/assets/images/img_charaft08.png" /> </a></Col>
        </Row>
        <Row class="char_row2">
            <Col span="3" class="char_item09">
            <a @click="change_chara($event)" id="CharItem9">
            <img src="/src/assets/images/img_charaft09.png" />
            </a>
            </Col>
            <Col span="3" class="char_item10">
            <a @click="change_chara($event)" id="CharItem10">
            <img src="/src/assets/images/img_charaft10.png" />
            </a>
            </Col>
            <Col span="3" class="char_item11">
            <a @click="change_chara($event)" id="CharItem11">
            <img src="/src/assets/images/img_charaft11.png" />
            </a>
            </Col>
            <Col span="3" class="char_item12">
            <a @click="change_chara($event)" id="CharItem12">
            <img src="/src/assets/images/img_charaft12.png" />
            </a>
            </Col>
            <Col span="3" class="char_item13">
            <a @click="change_chara($event)" id="CharItem13">
            <img src="/src/assets/images/img_charaft13.png" />
            </a>
            </Col>
            <Col span="3" class="char_item14">
            <a @click="change_chara($event)" id="CharItem14">
            <img src="/src/assets/images/img_charaft14.png" />
            </a>
            </Col>
            <Col span="3" class="char_item15">
            <a @click="change_chara($event)" id="CharItem15">
            <img src="/src/assets/images/img_charaft15.png" />
            </a>
            </Col>
            <Col span="3" class="char_item16">
            <a @click="change_chara($event)" id="CharItem16">
            <img src="/src/assets/images/img_charaft16.png" />
            </a>
            </Col>
        </Row>
        </Row>
    </Row>
    </Row>
</Row>
<!-- cast/staff部分 -->
<Row class="b_cast" id="b_cast/staff">
    <Row class="bcast_title">
    <Col span="8">
    </Col>
    <Col span="8">
    <div class="title_cast"></div>
    </Col>
    <Col span="8">
    </Col>
    </Row>
    <Row class="bcast_body">
    <Col span="4">
    </Col>
    <Col span="8" class="bcastbody_row1">
    <Row class="bcast_name11">
        <span class="bcastname11_left">岡部倫太郎</span>
        <span class="bcastname11_mid">|</span>
        <span class="bcastname11_right">宮野真守</span>
    </Row>
    <Row class="bcast_name12">
        <span class="bcastname12_left">椎名まゆり</span>
        <span class="bcastname12_mid">|</span>
        <span class="bcastname12_right">花澤香菜</span>
    </Row>
    <Row class="bcast_name13">
        <span class="bcastname13_left">橋田至</span>
        <span class="bcastname13_mid">|</span>
        <span class="bcastname13_right">関智一</span>
    </Row>
    <Row class="bcast_name14">
        <span class="bcastname14_left">牧瀬紅莉栖</span>
        <span class="bcastname14_mid">|</span>
        <span class="bcastname14_right">今井麻美</span>
    </Row>
    <Row class="bcast_name15">
        <span class="bcastname15_left">桐生萌郁</span>
        <span class="bcastname15_mid">|</span>
        <span class="bcastname15_right">後藤沙緒里</span>
    </Row>
    <Row class="bcast_name16">
        <span class="bcastname16_left">漆原るか</span>
        <span class="bcastname16_mid">|</span>
        <span class="bcastname16_right">小林ゆう</span>
    </Row>
    <Row class="bcast_name17">
        <span class="bcastname17_left">フェイリス・ニャンニャン</span>
        <span class="bcastname17_mid">|</span>
        <span class="bcastname17_right">桃井はるこ</span>
    </Row>
    <Row class="bcast_name18">
        <span class="bcastname18_left">阿万音鈴羽</span>
        <span class="bcastname18_mid">|</span>
        <span class="bcastname18_right">田村ゆかり</span>
    </Row>
    </Col>
    <Col span="8" class="bcastbody_row1">
    <Row class="bcast_name21">
        <span class="bcastname21_left">比屋定真帆</span>
        <span class="bcastname21_mid">|</span>
        <span class="bcastname21_right">矢作紗友里</span>
    </Row>
    <Row class="bcast_name22">
        <span class="bcastname22_left">椎名かがり</span>
        <span class="bcastname22_mid">|</span>
        <span class="bcastname22_right">潘めぐみ</span>
    </Row>
    <Row class="bcast_name23">
        <span class="bcastname23_left">阿万音由季</span>
        <span class="bcastname23_mid">|</span>
        <span class="bcastname23_right">田村ゆかり</span>
    </Row>
    <Row class="bcast_name24">
        <span class="bcastname24_left">天王寺綯</span>
        <span class="bcastname24_mid">|</span>
        <span class="bcastname24_right">山本彩乃</span>
    </Row>
    <Row class="bcast_name25">
        <span class="bcastname25_left">中瀬克美</span>
        <span class="bcastname25_mid">|</span>
        <span class="bcastname25_right">本多真梨子</span>
    </Row>
    <Row class="bcast_name26">
        <span class="bcastname26_left">来嶋かえで</span>
        <span class="bcastname26_mid">|</span>
        <span class="bcastname26_right">木野日菜</span>
    </Row>
    <Row class="bcast_name27">
        <span class="bcastname27_left">アレクシス・レスキネン</span>
        <span class="bcastname27_mid">|</span>
        <span class="bcastname27_right">上田燿司</span>
    </Row>
    <Row class="bcast_name28">
        <span class="bcastname28_left">ジュディ・レイエス</span>
        <span class="bcastname28_mid">|</span>
        <span class="bcastname28_right">にしむら まや</span>
    </Row>
    </Col>
    <Col span="4">
    </Col>
    </Row>
</Row>
<Row class="b_staff">
    <Row class="bstaff_title">
    <Col span="8">
    </Col>
    <Col span="8">
    <div class="title_staff"></div>
    </Col>
    <Col span="8">
    </Col>
    </Row>
    <Row class="bstaff_body">
    <Col span="4">
    </Col>
    <Col span="8" class="bstaffbody_row1">
    <Row class="bstaff_name11">
        <span class="bstaffname11_left">原作</span>
        <span class="bstaffname11_mid">|</span>
        <span class="bstaffname11_right">志倉千代丸/MAGES.</span>
    </Row>
    <Row class="bstaff_name12">
        <span class="bstaffname12_left">監督</span>
        <span class="bstaffname12_mid">|</span>
        <span class="bstaffname12_right">川村賢一</span>
    </Row>
    <Row class="bstaff_name13">
        <span class="bstaffname13_left">シリーズ構成</span>
        <span class="bstaffname13_mid">|</span>
        <span class="bstaffname13_right">花田十輝</span>
    </Row>
    <Row class="bstaff_name14">
        <span class="bstaffname14_left">シナリオ監修</span>
        <span class="bstaffname14_mid">|</span>
        <span class="bstaffname14_right">林 直孝、松原達也、<br />西村卓也、安本 了</span>
    </Row>
    <Row class="bstaff_name15">
        <span class="bstaffname15_left">キャラクター原案</span>
        <span class="bstaffname15_mid">|</span>
        <span class="bstaffname15_right">huke</span>
    </Row>
    <Row class="bstaff_name16">
        <span class="bstaffname16_left">未来ガジェット原案</span>
        <span class="bstaffname16_mid">|</span>
        <span class="bstaffname16_right">SH@RP</span>
    </Row>
    <Row class="bstaff_name17">
        <span class="bstaffname17_left">キャラクターデザイン</span>
        <span class="bstaffname17_mid">|</span>
        <span class="bstaffname17_right">稲吉智重</span>
    </Row>
    <Row class="bstaff_name18">
        <span class="bstaffname18_left">プロップデザイン</span>
        <span class="bstaffname18_mid">|</span>
        <span class="bstaffname18_right">稲吉朝子、灯夢、<br />コレサワシゲユキ</span>
    </Row>
    <Row class="bstaff_name19">
        <span class="bstaffname19_left">美術設定</span>
        <span class="bstaffname19_mid">|</span>
        <span class="bstaffname19_right">灯夢、コレサワシゲユキ</span>
    </Row>
    <Row class="bstaff_name110">
        <span class="bstaffname110_left">美術監督</span>
        <span class="bstaffname110_mid">|</span>
        <span class="bstaffname110_right">小髙 猛</span>
    </Row>
    <Row class="bstaff_name111">
        <span class="bstaffname111_left">色彩設計</span>
        <span class="bstaffname111_mid">|</span>
        <span class="bstaffname111_right">佐藤美由紀</span>
    </Row>
    <Row class="bstaff_name112">
        <span class="bstaffname112_left">オープニング主題歌</span>
        <span class="bstaffname112_mid">|</span>
        <span class="bstaffname112_right">「ファティマ」<br />
        歌：いとうかなこ</span>
    </Row>
    </Col>
    <Col span="8" class="bstaffbody_row2">
    <Row class="bstaff_name21">
        <span class="bstaffname21_left">特効監修</span>
        <span class="bstaffname21_mid">|</span>
        <span class="bstaffname21_right">谷口久美子</span>
    </Row>
    <Row class="bstaff_name22">
        <span class="bstaffname22_left">撮影監督</span>
        <span class="bstaffname22_mid">|</span>
        <span class="bstaffname22_right">塩川智幸</span>
    </Row>
    <Row class="bstaff_name23">
        <span class="bstaffname23_left">３Ｄディレクター</span>
        <span class="bstaffname23_mid">|</span>
        <span class="bstaffname23_right">ヨシダミキ</span>
    </Row>
    <Row class="bstaff_name24">
        <span class="bstaffname24_left">モデリング</span>
        <span class="bstaffname24_mid">|</span>
        <span class="bstaffname24_right">相馬 洋</span>
    </Row>
    <Row class="bstaff_name25">
        <span class="bstaffname25_left">編集</span>
        <span class="bstaffname25_mid">|</span>
        <span class="bstaffname25_right">須藤 瞳</span>
    </Row>
    <Row class="bstaff_name26">
        <span class="bstaffname26_left">音響監督</span>
        <span class="bstaffname26_mid">|</span>
        <span class="bstaffname26_right">山口貴之</span>
    </Row>
    <Row class="bstaff_name27">
        <span class="bstaffname27_left">音楽</span>
        <span class="bstaffname27_mid">|</span>
        <span class="bstaffname27_right">阿保 剛、信澤宣明、日向 萌</span>
    </Row>
    <Row class="bstaff_name28">
        <span class="bstaffname28_left">音楽プロデューサー</span>
        <span class="bstaffname28_mid">|</span>
        <span class="bstaffname28_right">金谷雄文</span>
    </Row>
    <Row class="bstaff_name29">
        <span class="bstaffname29_left">音楽制作</span>
        <span class="bstaffname29_mid">|</span>
        <span class="bstaffname29_right">MAGES.</span>
    </Row>
    <Row class="bstaff_name210">
        <span class="bstaffname210_left">アニメーション制作</span>
        <span class="bstaffname210_mid">|</span>
        <span class="bstaffname210_right">WHITE FOX</span>
    </Row>
    <Row class="bstaff_name211">
        <span class="bstaffname211_left">製作</span>
        <span class="bstaffname211_mid">|</span>
        <span class="bstaffname211_right">未来ガジェット研究所</span>
    </Row>
    <Row class="bstaff_name212">
        <span class="bstaffname212_left">エンディング主題歌</span>
        <span class="bstaffname212_mid">|</span>
        <span class="bstaffname212_right">「LAST GAME」<br />歌:Zwei</span>
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
    name:"BetaTimeLine",

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
                {id:1, src:'/src/assets/images/img_story01_01.png.png'},
                {id:2, src:'/src/assets/images/img_story02_01.png.png'},
                {id:3, src:'/src/assets/images/img_story03_01.png.png'},
                {id:4, src:'/src/assets/images/img_story04_01.png.png'},
                {id:5, src:'/src/assets/images/img_story05_01.png.png'},
                {id:6, src:'/src/assets/images/img_story06_01.png.png'},
                {id:7, src:'/src/assets/images/img_story07_01.png.png'},
                {id:8, src:'/src/assets/images/img_story08_01.png.png'},
                {id:9, src:'/src/assets/images/img_story09_01.png.png'},
                {id:10, src:'/src/assets/images/img_story10_01.png.png'},
                {id:11, src:'/src/assets/images/img_story11_01.png.png'},
                {id:12, src:'/src/assets/images/img_story12_01.png.png'},
                {id:13, src:'/src/assets/images/img_story13_01.png.png'},
                {id:14, src:'/src/assets/images/img_story14_01.png.png'},
                {id:15, src:'/src/assets/images/img_story15_01.png.png'},
                {id:16, src:'/src/assets/images/img_story16_01.png.png'},
                {id:17, src:'/src/assets/images/img_story17_01.png.png'},
                {id:18, src:'/src/assets/images/img_story18_01.png.png'},
                {id:19, src:'/src/assets/images/img_story19_01.png.png'},
                {id:20, src:'/src/assets/images/img_story20_01.png.png'},
                {id:21, src:'/src/assets/images/img_story21_01.png.png'},
                {id:22, src:'/src/assets/images/img_story22_01.png.png'},
                {id:23, src:'/src/assets/images/img_story23_01.png.png'},
                {id:24, src:'/src/assets/images/img_story24_01.png.png'},
            ],//v-for展示左侧滑动图片
            rightimgs_moveup:[
                {id:1, src:'/src/assets/images/img_story01_03.png.png'},
                {id:2, src:'/src/assets/images/img_story02_03.png.png'},
                {id:3, src:'/src/assets/images/img_story03_03.png.png'},
                {id:4, src:'/src/assets/images/img_story04_03.png.png'},
                {id:5, src:'/src/assets/images/img_story05_03.png.png'},
                {id:6, src:'/src/assets/images/img_story06_03.png.png'},
                {id:7, src:'/src/assets/images/img_story07_03.png.png'},
                {id:8, src:'/src/assets/images/img_story08_03.png.png'},
                {id:9, src:'/src/assets/images/img_story09_03.png.png'},
                {id:10, src:'/src/assets/images/img_story10_03.png.png'},
                {id:11, src:'/src/assets/images/img_story11_03.png.png'},
                {id:12, src:'/src/assets/images/img_story12_03.png.png'},
                {id:13, src:'/src/assets/images/img_story13_03.png.png'},
                {id:14, src:'/src/assets/images/img_story14_03.png.png'},
                {id:15, src:'/src/assets/images/img_story15_03.png.png'},
                {id:16, src:'/src/assets/images/img_story16_03.png.png'},
                {id:17, src:'/src/assets/images/img_story17_03.png.png'},
                {id:18, src:'/src/assets/images/img_story18_03.png.png'},
                {id:19, src:'/src/assets/images/img_story19_03.png.png'},
                {id:20, src:'/src/assets/images/img_story20_03.png.png'},
                {id:21, src:'/src/assets/images/img_story21_03.png.png'},
                {id:22, src:'/src/assets/images/img_story22_03.png.png'},
                {id:23, src:'/src/assets/images/img_story23_03.png.png'},
                {id:24, src:'/src/assets/images/img_story24_03.png.png'},
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

        //点击不同人物头像切换人物图片和介绍文本
        change_chara(e) {
        let chara_slide = document.getElementById("SlideImg01");
        //打印单张图片高度
        // console.log(chara_slide.clientHeight);

        let charaitem = e.target.id;
        console.log(e);
        console.log(charaitem);
        this.chara_num = parseInt(charaitem.slice(8)) - 1;
        console.log(this.chara_num);

        this.SlideimgUp = chara_slide.clientHeight * this.chara_num + "px";
        // console.log(this.SlideimgUp);

        this.chara_img = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.chara_img[this.chara_num] = 1;
        },
    },
}
</script>

<style scoped>

    @import url("./BetaTimeLine.css");

</style>