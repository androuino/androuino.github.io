document.body.onload = addElement();
var isTranslatedToJapanese = false;
var menuHome = document.getElementById('menuHome');
var menuMyProjects = document.getElementById('menuProjects');
var menuSkillSet = document.getElementById('menuSkillSet');
var menuContact = document.getElementById('menuContact');
var menuTranslate = document.getElementById('menuTranslate');
var lineBreak = document.createElement('br');

var myFullpage = new fullpage('#fullpage', {
  verticalCentered: false,
  anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4', 'anchor5'],
  menu: '#menu',
  continuousVertical: true,
  sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#8AA3EF', '#334a5b'],
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: false,
  navigationPosition: 'right',
  navigationTooltips: ['Home', 'About Me', 'My Projects', 'Skill Set', 'Contact'],
  slidesNavigation: true,
  normalScrollElements: '.scrollable-element',
  responsiveWidth: 900,
  parallax: false,
  parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
  afterLoad: function(anchorLink, index) {
    console.log("afterLoad");
    //console.log(anchorLink);
    console.log(index);
    if (index.index == 3) {
      console.log("Play the animation");
      jQuery(document).ready(function() {
      	jQuery('.skillbar').each(function() {
      		jQuery(this).find('.skillbar-bar').animate({
      			width:jQuery(this).attr('data-percent')
      		}, 3000);
      	});
      });
    } else {

    }
  },
  onLeave: function(index, nextIndex, direction) {
    console.log("onLeave");
    //console.log(index.anchor);
    //console.log(nextIndex.anchor);
    //console.log(direction);
    jQuery(document).ready(function() {
      jQuery('.skillbar').each(function() {
        jQuery(this).find('.skillbar-bar').animate({
          width:0
        }, 100);
      });
    });
  },
  css3: false
});

/*
English language set
*/
var en_us = {
  menuHome:             "Home",
  menuAboutMe:          "About Me",
  menuProjects:         "My Project",
  menuSkillSet:         "Skill Set",
  menuContact:          "Contact",
  menuTranslate:        "Japanese(日本語)",
  h1Name:               "Welcome to my page<br>Keep scrolling",
  h1AboutMe:            "Who am I?",
  bio:                  "My name is Josaped Moreno short for Sem.",
  introduction:         "I'm a software developer based in the Land of the Rising Sun, Japan. "+
                        "I graduated college from the beautiful country of the Philippines, yes I am a Filipino :D. "+
                        "I really enjoy solving real-world problems using software development, I always think of making things easy and "+
                        "eventually do it with purpose so that I will not waste my time doing things that in the end is useless, but of course "+
                        "I am not afraid to fail because failure has always been my way of developing my character and skills. "+
                        "I love being in a group of people, collaborate with them, learn from their experiences and most importantly is creating a connection with them. "+
                        "I also love serving the Church where I go every Sunday which I voluntarily offer my skills in "+
                        "software development to support the creative team in terms of technicality.",
  pNativeAndroidApp:    "For the Native Android App Development, I usually work with Kotlin. I normally follow the MVVM architecture components but there are also others like MVC and MVP. "+
                        "I do unit testing to test if the codes work fine. "+
                        "I also integrate other frameworks like Dagger2, Retrofit, RxJava, Gson and many more. "+
                        "When it comes to database, I normally use Firebase or Room Persistent local database but I am not limited only to these tools. "+
                        "For the front-end, I usually work with Javascript, HTML5, and CSS. When it comes to the back-end, I also work with Javascript (MySql, MariaDB), Java and Groovy. "+
                        "For Embedded programming, I work with C and C++ as firmware, Arduino, Raspberry Pi as hardware modules. "+
                        "For hybrid applications, I work with Flutter and Cordova. "+
                        "For deeplearning frameworks, I am very familiar with Darknet that is written in C and C++. I normally use Linux whenever I do training or compiling the library. "+
                        "I am very confident using Linux, Ubuntu in particular. I know some of the bash commands and I have been using Unix systems for more than 5 years now. ",
  h1SoftwareDeveloper:  "I'm a Software Developer",
  h1MyProjects:         "These are things I did so far",
  pDescription:         "Scroll to left or right",
  pDonkeyCarDesc:       "This project is a self-driving car using the Raspberry Pi microcomputer. "+
                        "The project was discontinued because of a lack of training for the AI model. "+
                        "Though I'd like to continue this project in the future.",
  pBitflyerDesc:        "I made this project using Java language. "+
                        "It was created to be an automatic trading bot using Bitflyer's API. ",
  pPrinterDesc:         "I made this project by myself. "+
                        "I created this to serve as my tool to create a lot of things. "+
                        "Until now this printer has been so helpful to me to speed up my prototyping and testing. ",
  pAndrouinoDesc:       "This is my first Native Android application I did 4 years ago. "+
                        "The purpose of the app is to control the car via Bluetooth and WiFi connections. ",
  pDSLRRemoteDesc:      "This is my second Native Android app which is also released on Google Play Store after Androuino "+
                        "but it was delisted by Google because I haven't got the chance to update the codebase to comply with "+
                        "Google's new policy. I created this app for the purpose of a remote trigger for Canon, Nikon, Sony, and "+
                        "other popular DSLR cameras.",
  pEPCWriterDesc:       "This project is done by a team that I am part of. "+
                        "This is the first project assigned to me from the previous company I have worked for. "+
                        "The purpose of this app is to write and read RFID tags/cards via Bluetooth connection. ",
  pDPSTCUDesc:          "This project is done by a team that I have been part of. "+
                        "This is actually the second native Android app we have developed. "+
                        "The purpose of this app is to act as a monitor for the daily operation in various car manufacturing plants in Japan. "+
                        "The company is planning to expand its sales of this system domestically. "+
                        "If you want to check how good this project is, please visit https://inspeedia.com/ for more info.",
  pIntelliBoxDesc:      "This project has done by me and my amazing friend Lepe who is my Project Leader."+
                        "We've made this project internally and for many personal reasons. "+
                        "By the time we are developing an AI project and we needed a tool for labeling the dataset in preparation for training an AI model, "+
                        "we decided to develop our own labeling tool that meets our needs for the project we are doing and we ended up developing this IntelliBox.",
  pDarknet4jDesc:       "If you ever want to try Deep Learning and happens to be using the Darknet Framework in C and use it in Java, "+
                        "I have good news for you because there is an available wrapper that would help you put a bridge between two languages. "+
                        "Please check the link below to find out more.",
  pDL4jUIDesc:          "There's nothing so special actually why I did this project. "+
                        "My main purpose why I did this is because I wanted a UI to test the AI model right after the training in a graphical way. "+
                        "The DeepLearning Framework I use for training the model is the DeepLearning4j, please check www.deeplearning4j.org for more information. "+
                        "Anyway, please check the link below. This is open-source so you can do whatever you want.",
  pTireIDDesc:          "This project is very complex. This is an AI project which is still in progress. "+
                        "This is a collaboration project between me and my project leader when I was working in Inspeedia. "+
                        "I should say this is the most challenging project I have ever experienced in my career as a developer. "+
                        "We've used the Darknet framework and Groovy for this project then we used JNA/JNI to bridge the Java and C.",
  pWebAmbulanceDesc:    "This is a web system used by authorized Toyota ambulance personnel only. "+
                        "We've used HTML5, CSS, and JavaScript for front-end, "+
                        "Java for the back-end. The link is: https://himedic.toyota-cd.co.jp/business.html",
  pPWPresenterDesc:     "This is my personal project. "+
                        "If you are familiar with the OpenLP(https://openlp.org/), this system is similar to that. "+
                        "Yes, this is a Worship presentation system that I wrote with pure Kotlin. "+
                        "This is a multiplatform application and can play video background and loop it infinitely with stable RAM usage. "+
                        "It can also display 3 versions of Bible verses at once. "+
                        "At the moment, you can switch between 2 languages which are English and Japanese.",
  pTalkAppDesc:         "This too is my personal project. "+
                        "This is a native Android app written in Kotlin. "+
                        "I am sorry If I couldn't tell you some details about this project. "+
                        "I am just hoping that I could release this project anytime soon in Google Play Store and App Store.",
  pWebRTCDesc:          "I am just happy that I was able to get familiar with WebRTC. "+
                        "Because of this, I was able to start doing my Talk App Android project.",
  h1SkillSet:           "What are my skills?",
  h1Contact:            "Let me know your thoughts and send it to morenojosaped@gmail.com",
  name:                 "Name",
  email:                "Email",
  comment:              "Message",
  resume:               "Resume",
  pEndGreetings:        "Thanks for visiting",
  projects:              [
                          '', // 0
                          'Donkey Car', // 1
                          'Bitflyer Bitcoin FX Bot (Java)', // 2
                          'DIY 3D Printer', // 3
                          'Androuino (Native Android Java)', // 4
                          'DSLR Remote Trigger (Native Android Java)(Delisted)', // 5
                          'Android-EPC-Writer (Native Android Kotlin)', // 6
                          'DPS-TCU (Native Android Kotlin)', // 7
                          'IntelliBox (Groovy)', // 8
                          'Darknet4J (Java)', // 9
                          'DeepLearning4J UI (Java)', // 10
                          'Tire-ID Computer Vision (Groovy, C)', // 11
                          'Toyota Ambulance System (Web App)', // 12
                          'P&W Presenter (Kotlin)', // 13
                          'Talk (Native Android Kotlin)', // 14
                          'WebRTC Server' // 15
                        ]
}

/*
Japanese language set
*/
var jp_jp = {
  menuHome:             "ホーム",
  menuAboutMe:          "私について",
  menuProjects:         "私のプロジェクト",
  menuSkillSet:         "スキルセット",
  menuContact:          "連絡先",
  menuTranslate:        "英語(English)",
  h1Name:               "私のページにようこそ<br>スクロールし続けます",
  h1AboutMe:            "私は誰？",
  bio:                  "私の名前はセムの略称ジョサペド・モレノです。",
  introduction:          "私は日本の朝日の国に拠点を置くソフトウェア開発者です。"+
                        "私はフィリピンの美しい国から大学を卒業しました、はい、私はフィリピン人です：D。"+
                        "ソフトウェア開発を使用して実際の問題を解決することを本当に楽しんでいます。物事を簡単にして、"+
                        "最終的には役に立たないことをするために時間を無駄にしないように、最終的には目的を持ってそれを行いますが、もちろん"+
                        "失敗は常に私の性格とスキルを伸ばすための私の方法なので、失敗することを恐れません。"+
                        "私は人々のグループにいることが大好きで、彼らと協力し、彼らの経験から学び、最も重要なことは彼らとのつながりを作ることです。"+
                        "毎週日曜日に教会に奉仕することも大好きです。私はソフトウェア開発のスキルを自発的に提供し、技術的な面でクリエイティブチームをサポートします。",
  pNativeAndroidApp:    "ネイティブAndroidアプリ開発では、通常Kotlinを使用します。 私は通常MVVMアーキテクチャコンポーネントに従いますが、MVCやMVPなどもあります。"+
                        "ユニットテストを行って、コードが正常に機能するかどうかをテストします。"+
                        "Dagger2、Retrofit、RxJava、Gsonなど、他のフレームワークも統合しています。"+
                        "データベースに関しては、通常FirebaseまたはRoom Persistentローカルデータベースを使用しますが、これらのツールだけに限定されません。"+
                        "フロントエンドの場合、私は通常、JavaScript、HTML5、およびCSSを使用します。 バックエンドに関しては、Javascript（MySql、MariaDB）、Java、Groovyも使用しています。"+
                        "組み込みプログラミングでは、ファームウェアとしてCおよびC ++、ハードウェアモジュールとしてArduino、Raspberry Piを使用しています。"+
                        "ハイブリッドアプリケーションの場合、私はFlutterとCordovaを使用しています。"+
                        "ディープラーニングフレームワークについては、CおよびC ++で記述されたDarknetに非常に精通しています。 ライブラリをトレーニングまたはコンパイルするときはいつもLinuxを使用しています。"+
                        "特にLinux、Ubuntuを使用すると確信しています。 私はbashコマンドのいくつかを知っており、UNIXシステムを5年以上使用しています。",
  h1SoftwareDeveloper:  "私はソフトウェア開発者です",
  h1MyProjects:         "私のプロジェクト",
  pDescription:         "左または右にスクロールします",
  pDonkeyCarDesc:       "このプロジェクトは、Raspberry Piマイコンを使用した自動運転車です。"+
                        "AIモデルのトレーニングが不足していたため、プロジェクトは中止されました。"+
                        "今後もこのプロジェクトを続けていきたいですが。",
  pBitflyerDesc:        "このプロジェクトはJava言語を使用して作成しました。"+
                        "これは、BitflyerのAPIを使用した自動取引ボットとして作成されました。",
  pPrinterDesc:         "このプロジェクトは自分で作りました。"+
                        "私はこれを作成して、多くのことを作成するためのツールとして使用しました。"+
                        "今までこのプリンタは、プロトタイピングとテストをスピードアップするのにとても役立ちました。",
  pAndrouinoDesc:       "これは、4年前に行った最初のネイティブAndroidアプリケーションです。"+
                        "アプリの目的は、BluetoothおよびWiFi接続を介して車を制御することです。",
  pDSLRRemoteDesc:      "これは、Androuinoに続いてGoogle Playストアでリリースされた2番目のネイティブAndroidアプリですが、"+
                        "Googleの新しいポリシーに準拠するようにコードベースを更新する機会がなかったため、Googleから除外されました。"+
                        "このアプリは、キヤノン、ニコン、ソニー、その他の人気のデジタル一眼レフカメラのリモートトリガーを目的として作成しました。",
  pEPCWriterDesc:       "このプロジェクトは私が参加しているチームによって行われます。"+
                        "これは、以前勤務していた会社から割り当てられた最初のプロジェクトです。"+
                        "このアプリの目的は、Bluetooth接続を介してRFIDタグ/カードを読み書きすることです。",
  pDPSTCUDesc:          "このプロジェクトは、私が参加しているチームによって行われます。"+
                        "これは、実際に私たちが開発した2番目のネイティブAndroidアプリです。"+
                        "このアプリの目的は、日本のさまざまな自動車製造工場の日常業務のモニターとして機能することです。"+
                        "同社はこのシステムの国内販売を拡大する計画である。"+
                        "このプロジェクトの良さを確認したい場合は、https：//inspeedia.com/にアクセスして詳細を確認してください。",
  pIntelliBoxDesc:      "このプロジェクトは、私と私のプロジェクトリーダーであるすばらしい友人Lepeさんによって行われました。"+
                        "私たちはこのプロジェクトを社内で、そして多くの個人的な理由で作りました。"+
                        "AIプロジェクトを開発しているときに、AIモデルのトレーニングに備えてデータセットにラベルを付けるツールが必要でした。"+
                        "私たちは現在行っているプロジェクトのニーズを満たす独自のラベル付けツールを開発することを決め、このIntelliBoxを開発することになりました。",
  pDarknet4jDesc:       "ディープラーニングを試したいときに、CでDarknet Frameworkを使用していて、Javaでそれを使用している場合は、"+
                        "2つの言語間の架け橋となるラッパーがあるので、良いお知らせがあります。"+
                        "詳細については、以下のリンクを確認してください。",
  pDL4jUIDesc:          "私がこのプロジェクトをやった理由はそれほど特別ではありません。"+
                        "これを行った主な目的は、トレーニングの直後にグラフィカルな方法でAIモデルをテストするUIが必要だったからです。"+
                        "モデルのトレーニングに使用するDeepLearning FrameworkはDeepLearning4jです。詳細については、www.deeplearning4j.orgを確認してください。"+
                        "とにかく、下のリンクをチェックしてください。 これはオープンソースなので、好きなことができます。",
  pTireIDDesc:          "このプロジェクトは非常に複雑です。 これは現在進行中のAIプロジェクトです。"+
                        "これは、インスピードアで働いていたときの、私と私のプロジェクトリーダーのコラボレーションプロジェクトです。"+
                        "これは、開発者としての私のキャリアの中で、これまでに経験したことのない最も挑戦的なプロジェクトです。"+
                        "このプロジェクトでは、DarknetフレームワークとGroovyを使用してから、JNA / JNIを使用してJavaとCをブリッジしました。",
  pWebAmbulanceDesc:    "これは、認定されたトヨタの救急隊員のみが使用するWebシステムです。"+
                        "フロントエンドにはHTML5、CSS、JavaScriptを使用しましたが、"+
                        "バックエンド用のJava。リンクはhttps://himedic.toyota-cd.co.jp/business.htmlです。",
  pPWPresenterDesc:     "これは私の個人的なプロジェクトです。"+
                        "OpenLP（https://openlp.org/）に精通している場合、このシステムはそれに似ています。"+
                        "はい、これは私が純粋なKotlinで作成した礼拝プレゼンテーションシステムです。"+
                        "これはマルチプラットフォームアプリケーションであり、安定したRAM使用量でビデオのバックグラウンドを再生して無限にループできます。"+
                        "また、聖書の3つのバージョンを同時に表示することもできます。"+
                        "現時点では、英語と日本語の2つの言語を切り替えることができます。",
  pTalkAppDesc:         "これはKotlinで書かれたネイティブのAndroidアプリです。"+
                        "このプロジェクトの詳細をお伝えできなかった場合は、申し訳ありません。"+
                        "このプロジェクトをGoogle PlayストアとApp Storeですぐにリリースできることを願っています。",
  pWebRTCDesc:          "WebRTCに慣れてよかったです。"+
                        "このため、トークアプリAndroidプロジェクトを始めることができました。",
  h1SkillSet:           "私のスキルは何ですか？",
  h1Contact:            "あなたの考えを教えて、morenojosaped @ gmail.comに送信してください",
  name:                 "名",
  email:                "E-mail",
  comment:              "メッセージ",
  resume:               "日本の履歴書",
  pEndGreetings:        "訪問してくれてありがとうございます",
  projects:              [
                          '', // 0
                          'ロバカー', // 1
                          'Bitflyer Bitcoin FX Bot (Java)', // 2
                          'DIY 3Dプリンター', // 3
                          'Androuino（ネイティブAndroid Java）', // 4
                          'DSLRリモートトリガー（ネイティブAndroid Java）（上場廃止）', // 5
                          'Android-EPC-Writer（ネイティブAndroid Kotlin）', // 6
                          'DPS-TCU（ネイティブAndroid Kotlin）', // 7
                          'IntelliBox (Groovy)', // 8
                          'Darknet4J (Java)', // 9
                          'DeepLearning4J UI (Java)', // 10
                          'Tire-ID Computer Vision (Groovy, C)', // 11
                          'トヨタ救急車システム（Webアプリ）', // 12
                          'P＆Wプレゼンター（Kotlin）', // 13
                          'トーク（ネイティブAndroid Kotlin）', // 14
                          'WebRTCサーバー' // 15
                        ]
}

var lang = en_us;
translate(lang);

//fullpage_api.parallax.init();
//fullpage_api.parallax.setOption('type', 'cover');

/*
Event listener for clicking the translate menu button
*/
menuTranslate.addEventListener('click', function(e) {
  if (menuTranslate.textContent === "Japanese(日本語)") {
    lang = jp_jp;
    console.log(lang.name);
  } else {
    lang = en_us;
    console.log(lang.name);
  }
  translate(lang);
});

/*
This is to dynamically add the projects
*/
function addElement() {
  var currentDiv = document.getElementById('section2');
  var projects = [
    '', // 0
    'Donkey Car', // 1
    'Bitflyer Exchange UI (Java)', // 2
    'DIY 3D Printer', // 3
    'Androuino (Native Android Java)', // 4
    'DSLR Remote Trigger (Native Android Java)(Delisted)', // 5
    'Android-EPC-Writer (Native Android Kotlin)', // 6
    'DPS-TCU (Native Android Kotlin)', // 7
    'IntelliBox (Groovy)', // 8
    'Darknet4J (Java)', // 9
    'DeepLearning4J (Java)', // 10
    'Tire-ID Computer Vision (Groovy, C)', // 11
    'Toyota Ambulance System (Web App)', // 12
    'P&W Presenter (Kotlin)', // 13
    'Talk (Native Android Kotlin)', // 14
    'WebRTC Server' // 15
  ];

  // create a new jsdelivr
  for (var i = 0; i < projects.length; i++) {
    var newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'slide');
    newDiv.setAttribute('data-anchor', 'slide' + i);
    newDiv.setAttribute('id', 'slide' + i);
    newDiv.setAttribute('style', 'background-color: #323232;');
    var parallax = document.createElement('div');
    parallax.setAttribute('class', 'fp-bg');
    newDiv.appendChild(parallax);
    var newHeader = document.createElement('H1');

    if (i === 0) {
      newHeader.setAttribute('id', 'h1MyProjects');
      var headerContent = document.createTextNode("");
      var paragraph = document.createElement('p');
      paragraph.setAttribute('id', 'pDescription');
      var paragraphContent = document.createTextNode("");
      newHeader.appendChild(headerContent);
      paragraph.appendChild(paragraphContent);
      newDiv.appendChild(newHeader);
      newDiv.appendChild(paragraph);
    } else {
      // add some content
      newHeader.setAttribute('id', 'projectTitle' + i);
      newHeader.setAttribute('style', 'font-size: 4vw;');
      var videoDiv = document.createElement('div');
      var description = document.createElement('p');
      description.setAttribute('class', 'pSlideDesc');

      switch (i) {
        case 1:
          var video = document.createElement('iframe');
          video.setAttribute('width', '560');
          video.setAttribute('height', '315');
          video.setAttribute('id', 'myVideo');
          video.src = "https://www.youtube.com/embed/qjr1DOP52KQ";
          video.setAttribute('frameborder', '3');
          //video.setAttribute('allowfullscreen data-autoplay', String.Empty);
          videoDiv.appendChild(newHeader);
          videoDiv.appendChild(video);

          description.setAttribute('id', 'pDonkeyCarDesc');
          var content = document.createTextNode("");
          description.appendChild(content);
          videoDiv.appendChild(description);
          break;
        case 2:
          videoDiv.appendChild(newHeader);
          description.setAttribute('id', 'pBitflyerDesc');
          var content2 = document.createTextNode("");
          description.appendChild(content2);
          videoDiv.appendChild(description);
          break;
        case 3:
          videoDiv.appendChild(newHeader);
          description.setAttribute('id', 'pPrinterDesc');
          var content3 = document.createTextNode("");
          description.appendChild(content3);
          videoDiv.appendChild(description);
          break;
        case 4:
          var video4 = document.createElement('iframe');
          video4.setAttribute('width', '560');
          video4.setAttribute('height', '315');
          video4.setAttribute('id', 'myVideo');
          video4.src = "https://www.youtube.com/embed/jLLGzFdoYm0";
          video4.setAttribute('frameborder', '3');
          //video.setAttribute('allowfullscreen data-autoplay', String.Empty);
          newDiv.appendChild(newHeader);
          videoDiv.appendChild(video4);

          description.setAttribute('id', 'pAndrouinoDesc');
          var content = document.createTextNode("");
          description.appendChild(content);
          videoDiv.appendChild(description);
          var link = document.createElement('a');
          link.setAttribute('target', '_blank');
          link.setAttribute('style', 'color: white; position: absolute; bottom: 50px;');
          link.href = "https://gitlab.com/androuino/androuino";
          var text = document.createTextNode("Source code");
          link.appendChild(text);
          videoDiv.appendChild(link);
          break;
        case 5:
          videoDiv.appendChild(newHeader);
          description.setAttribute('id', 'pDSLRRemoteDesc');
          var content = document.createTextNode("");
          description.appendChild(content);
          videoDiv.appendChild(description);
          break;
        case 6:
          videoDiv.appendChild(newHeader);
          description.setAttribute('id', 'pEPCWriterDesc');
          var content = document.createTextNode("");
          description.appendChild(content);
          videoDiv.appendChild(description);
          break;
        case 7:
          videoDiv.appendChild(newHeader);
          description.setAttribute('id', 'pDPSTCUDesc');
          var content = document.createTextNode("");
          description.appendChild(content);
          videoDiv.appendChild(description);
          break;
        case 8:
          videoDiv.appendChild(newHeader);
          description.setAttribute('id', 'pIntelliBoxDesc');
          var content = document.createTextNode("");
          description.appendChild(content);
          videoDiv.appendChild(description);
          var link = document.createElement('a');
          link.setAttribute('target', '_blank');
          link.setAttribute('style', 'color: white; position: absolute; bottom: 50px;');
          link.href = "https://gitlab.com/intellisrc/intellibox";
          var text = document.createTextNode("Source code");
          link.appendChild(text);
          videoDiv.appendChild(link);
          break;
        case 9:
          videoDiv.appendChild(newHeader);
          description.setAttribute('id', 'pDarknet4jDesc');
          var content = document.createTextNode("");
          description.appendChild(content);
          videoDiv.appendChild(description);
          var link = document.createElement('a');
          link.setAttribute('target', '_blank');
          link.setAttribute('style', 'color: white; position: absolute; bottom: 50px;');
          link.href = "https://gitlab.com/intellisrc/darknet4j";
          var text = document.createTextNode("Source code");
          link.appendChild(text);
          videoDiv.appendChild(link);
          break;
        case 10:
          videoDiv.appendChild(newHeader);
          description.setAttribute('id', 'pDL4jUIDesc');
          var content = document.createTextNode("");
          description.appendChild(content);
          videoDiv.appendChild(description);
          var link = document.createElement('a');
          link.setAttribute('target', '_blank');
          link.setAttribute('style', 'color: white; position: absolute; bottom: 50px;');
          link.href = "https://github.com/androuino/deeplearning4jui";
          var text = document.createTextNode("Source code");
          link.appendChild(text);
          videoDiv.appendChild(link);
          break;
        case 11:
          videoDiv.appendChild(newHeader);
          description.setAttribute('id', 'pTireIDDesc');
          var content = document.createTextNode("");
          description.appendChild(content);
          videoDiv.appendChild(description);
          break;
        case 12:
          videoDiv.appendChild(newHeader);
          description.setAttribute('id', 'pWebAmbulanceDesc');
          var content = document.createTextNode("");
          description.appendChild(content);
          videoDiv.appendChild(description);
          break;
        case 13:
          videoDiv.appendChild(newHeader);
          description.setAttribute('id', 'pPWPresenterDesc');
          var content = document.createTextNode("");
          description.appendChild(content);
          videoDiv.appendChild(description);
          break;
        case 14:
          videoDiv.appendChild(newHeader);
          description.setAttribute('id', 'pTalkAppDesc');
          var content = document.createTextNode("");
          description.appendChild(content);
          videoDiv.appendChild(description);
          break;
        case 15:
          videoDiv.appendChild(newHeader);
          description.setAttribute('id', 'pWebRTCDesc');
          var content = document.createTextNode("");
          description.appendChild(content);
          videoDiv.appendChild(description);
          break;
        default:
          videoDiv.appendChild(description);
          videoDiv.appendChild(newHeader);
      }

      // add the text node to the newly created div
      newDiv.appendChild(videoDiv);
    }
    currentDiv.appendChild(newDiv);
  }
}

/*
This function download the resume based on the language
*/
function downloadResume() {
  // TODO: implement this part to download resume
  if (lang == en_us) {
    console.log("Downloading english resume");
    var element = document.createElement('a');
    element.setAttribute('href', 'assets/Josaped Moreno.pdf');
    element.setAttribute('download', '');
    element.setAttribute('target', '_blank');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  } else {
    console.log("Downloading japanese resume");
    console.log("Downloading english resume");
    var element = document.createElement('a');
    element.setAttribute('href', 'assets/ジョサペド モレノ.pdf');
    element.setAttribute('download', '');
    element.setAttribute('target', '_blank');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
}

function translate(lang) {
  isTranslatedToJapanese = true;
  menuHome.innerHTML = lang.menuHome;
  menuAboutMe.innerHTML = lang.menuAboutMe;
  menuProjects.innerHTML = lang.menuProjects;
  menuSkillSet.innerHTML = lang.menuSkillSet;
  menuContact.innerHTML = lang.menuContact;
  menuTranslate.innerHTML = lang.menuTranslate;
  document.getElementById("h1Name").innerHTML = lang.h1Name;
  document.getElementById("h1SoftwareDeveloper").innerHTML = lang.h1SoftwareDeveloper;
  document.getElementById("bio").innerHTML = lang.bio;
  document.getElementById("introduction").innerHTML = lang.introduction;
  document.getElementById("pNativeAndroidApp").innerHTML = lang.pNativeAndroidApp;
  document.getElementById("h1MyProjects").innerHTML = lang.h1MyProjects;
  document.getElementById("pDescription").innerHTML = lang.pDescription;
  document.getElementById("h1SkillSet").innerHTML = lang.h1SkillSet;
  document.getElementById("h1Contact").innerHTML = lang.h1Contact;
  document.getElementById("h1AboutMe").innerHTML = lang.h1AboutMe;
  document.getElementById("name").placeholder = lang.name;
  document.getElementById("email").placeholder = lang.email;
  document.getElementById("comment").placeholder = lang.comment;
  document.getElementById("resume").innerHTML = lang.resume;
  document.getElementById("pEndGreetings").innerHTML = lang.pEndGreetings;
  document.getElementById("pDonkeyCarDesc").innerHTML = lang.pDonkeyCarDesc;
  document.getElementById("pBitflyerDesc").innerHTML = lang.pBitflyerDesc;
  document.getElementById("pPrinterDesc").innerHTML = lang.pPrinterDesc;
  document.getElementById("pAndrouinoDesc").innerHTML = lang.pAndrouinoDesc;
  document.getElementById("pDSLRRemoteDesc").innerHTML = lang.pDSLRRemoteDesc;
  document.getElementById("pEPCWriterDesc").innerHTML = lang.pEPCWriterDesc;
  document.getElementById("pDPSTCUDesc").innerHTML = lang.pDPSTCUDesc;
  document.getElementById("pIntelliBoxDesc").innerHTML = lang.pIntelliBoxDesc;
  document.getElementById("pDarknet4jDesc").innerHTML = lang.pDarknet4jDesc;
  document.getElementById("pDL4jUIDesc").innerHTML = lang.pDL4jUIDesc;
  document.getElementById("pTireIDDesc").innerHTML = lang.pTireIDDesc;
  document.getElementById("pWebAmbulanceDesc").innerHTML = lang.pWebAmbulanceDesc;
  document.getElementById("pPWPresenterDesc").innerHTML = lang.pPWPresenterDesc;
  document.getElementById("pTalkAppDesc").innerHTML = lang.pTalkAppDesc;
  document.getElementById("pWebRTCDesc").innerHTML = lang.pWebRTCDesc;
  for (var i = 1; i < lang.projects.length; i++) {
    console.log("changing the title of project projectTitle = " + lang.projects[i]);
    var headerContent = document.createTextNode(lang.projects[i]);
    document.getElementById("projectTitle" + i).innerHTML = "";
    document.getElementById("projectTitle" + i).appendChild(headerContent);
  }
}
