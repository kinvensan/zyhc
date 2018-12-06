<template>
<!-- uiView: header -->
  <div class="view_header" style="">
    <div class="w-header">
        <!--顶部导航-->
        <div class="w-1200"><a class="logo" ui-sref="index" href="/index"><img src="./../../../images/yt888/logo.png"></a></div>
        <div class="head">
            <div class="w-1200">
                <div class="top-nav clearfix">
                    <ul>
                        <li><a ui-sref="vip" class="clearCache" href="/index/vip"> <i></i>VIP俱乐部</a></li>
                        <li><a ng-href="https://yt2018dh.com" target="_blank" class="fastestRoute" href="https://yt2018dh.com"> <i></i>亚投导航</a></li>
                        <li><a class="informationSection" ui-sref="cooperation" href="/index/agent/cooperation" target="_blank"> <i></i>代理加盟</a></li>
                    </ul>
                </div>
                <!--login登录框-->
                <!-- ngIf: !logined --><div class="login ng-scope" ng-if="!logined">
                    <div class="login-l"><span> <i></i> </span><span>您是会员吗?</span></div>
                    <div class="login-con">
                        <!--<a ui-sref="register" href="javascript:void (0);">注册</a><i style="color: #ECA954;">/</i>-->
                        <a href="javascript:void (0);" ng-click="textError='';myModel('.loginModal')">登 录</a>
                    </div>
                    <div class="login-r" ui-sref="register" href="/index/register"></div>
                    <!--<div class="login_btn">-->
                    <!--<a ui-sref="register" href=""><i class="login_i absolute"></i>-->
                    <!--<span>注  册</span>-->
                    <!--</a>-->
                    <!--</div>-->
                    <!--<form autocomplete="off" name="$parent.loginForm" ng-submit="headerLogin()">-->
                    <!--<div class="login_in_height">-->
                    <!--&lt;!&ndash;<span class="absolute text">验证码</span>&ndash;&gt;-->
                    <!--&lt;!&ndash;<div class="kuai absolute"></div>&ndash;&gt;-->
                    <!--<div class="yzm">-->
                    <!--<input type="text" class="fl" key-enter ng-model="$parent.verifyCode" required-->
                    <!--ng-focus="changeInput()" name="yzm" placeholder="验证码" autocomplete="off" tabindex="3"-->
                    <!--style="font-size: 14px;">-->
                    <!--<a ng-show="yzmShow" class="verifyimage" ng-click="changeInput(true)"><img-->
                    <!--ng-src="{{verifyimage+'?u='+uuid}}"></a>-->
                    <!--</div>-->
                    <!--<a href="" class="btn fl submit" type="submit" ng-click="headerLogin()"-->
                    <!--style="padding-top: 3px;height: 27px;width: 100%;margin-right: 0;">登录</a>-->
                    <!--&lt;!&ndash;<a ui-sref="forgetPassword" class="btn fl " style="height: 27px;width: 45%;line-height: 15px;margin-right: 0;margin-left: 6px;background-color: gray;">忘记密码</a>&ndash;&gt;-->
                    <!--&lt;!&ndash;<a href="" class="forget fl"><span ui-sref="passport">忘记密码？</span></a>&ndash;&gt;-->
                    <!--</div>-->
                    <!--<div class="login_in_height" style="position: relative;">-->
                    <!--<i class="user absolute"></i>-->
                    <!--<input type="text" class="myInput" key-enter placeholder="用户名"-->
                    <!--required name="userName" ng-model="$parent.userName"-->
                    <!--autocomplete="off"-->
                    <!--style="padding-left: 25px;font-size: 14px;" tabindex="1">-->
                    <!--&lt;!&ndash;<a ui-sref="forgetPassword" style="position: absolute;top: 1px;right: 1px;width: 48px;height:24px;line-height: 24px;text-align: center;text-decoration: none;border-left: 1px solid #ffffff;">忘记?</a>&ndash;&gt;-->
                    <!--<i class="password absolute"></i>-->
                    <!--<input type="password" key-enter class=" myInput"-->
                    <!--placeholder="密码" ng-model="$parent.password" required-->
                    <!--name="password" autocomplete="off"-->
                    <!--style="padding-left: 25px;font-size: 14px;"-->
                    <!--tabindex="2">-->
                    <!--<a ui-sref="forgetPassword"-->
                    <!--style="position: absolute;top: 30px;right: 1px;width: 48px;height:24px;line-height: 24px;text-align: center;text-decoration: none;border-left: 1px solid #ffffff;">忘记?</a>-->
                    <!--</div>-->
                    <!--</form>-->
                </div><!-- end ngIf: !logined -->
                <!--登录后-->
                <!-- ngIf: logined -->
            </div>
        </div>
        <!--导航-->
        <div class="w-1200">
            <div class=" header clearfix">
                <ul>
                    <li ng-class="{'nav_active':$location.path()=='/index'}"><a ui-sref="index" href="/index"></a></li>
                    <li ui-sref-active="nav_active" ng-class="{'nav_active':$location.path()=='/index/live'}" style="background-position-x: -111px;">
                        <!-- ngIf: isCasinoAllowed&&liveAllTypes.length --><a href="" ng-if="isCasinoAllowed&amp;&amp;liveAllTypes.length" ng-click="goGameOrRoom('live',liveAllTypes)" class="ng-scope" style=""></a><!-- end ngIf: isCasinoAllowed&&liveAllTypes.length -->
                        <div class="header-nav-list">
                            <ul class="header-nav-list-ul">
                                <!-- ngRepeat: data in liveAllTypes --><li class="header-nav-list-li ng-scope" ng-repeat="data in liveAllTypes" style=""><a ng-click="playGame(data)" class="ng-binding">AG视讯</a></li><!-- end ngRepeat: data in liveAllTypes --><li class="header-nav-list-li ng-scope" ng-repeat="data in liveAllTypes"><a ng-click="playGame(data)" class="ng-binding">GD视讯</a></li><!-- end ngRepeat: data in liveAllTypes --><li class="header-nav-list-li ng-scope" ng-repeat="data in liveAllTypes"><a ng-click="playGame(data)" class="ng-binding">OG视讯</a></li><!-- end ngRepeat: data in liveAllTypes --><li class="header-nav-list-li ng-scope" ng-repeat="data in liveAllTypes"><a ng-click="playGame(data)" class="ng-binding">申博视讯</a></li><!-- end ngRepeat: data in liveAllTypes --><li class="header-nav-list-li ng-scope" ng-repeat="data in liveAllTypes"><a ng-click="playGame(data)" class="ng-binding">欧博视讯</a></li><!-- end ngRepeat: data in liveAllTypes --><li class="header-nav-list-li ng-scope" ng-repeat="data in liveAllTypes"><a ng-click="playGame(data)" class="ng-binding">EB视讯</a></li><!-- end ngRepeat: data in liveAllTypes -->
                            </ul>
                        </div>
                    </li>
                    <li ui-sref-active="nav_active" ng-class="{'nav_active':$location.path()=='/index/sportsCompetition'}" style="background-position-x: -220px;">
                        <a ui-sref="sportsCompetition" href="/index/sportsCompetition"></a>
                        <div class="header-nav-list" style="display: none;">
                            <ul class="header-nav-list-ul">
                                <!-- ngRepeat: data in sportsAllTypes | orderBy:'Id' --><li class="header-nav-list-li ng-scope" ng-repeat="data in sportsAllTypes | orderBy:'Id'" style="">
                                    <!--<a ng-click='playGame(data)'>{{data.Name.replace("CMD","亚投")}}</a>-->
                                    <a ng-click="playGame(data)" class="ng-binding">CMD体育</a>
                                    <!--<a ng-click='playGame(data)'>亚投体育</a>-->
                                </li><!-- end ngRepeat: data in sportsAllTypes | orderBy:'Id' --><li class="header-nav-list-li ng-scope" ng-repeat="data in sportsAllTypes | orderBy:'Id'">
                                    <!--<a ng-click='playGame(data)'>{{data.Name.replace("CMD","亚投")}}</a>-->
                                    <a ng-click="playGame(data)" class="ng-binding">电子竞技</a>
                                    <!--<a ng-click='playGame(data)'>亚投体育</a>-->
                                </li><!-- end ngRepeat: data in sportsAllTypes | orderBy:'Id' --><li class="header-nav-list-li ng-scope" ng-repeat="data in sportsAllTypes | orderBy:'Id'">
                                    <!--<a ng-click='playGame(data)'>{{data.Name.replace("CMD","亚投")}}</a>-->
                                    <a ng-click="playGame(data)" class="ng-binding">虚拟体育</a>
                                    <!--<a ng-click='playGame(data)'>亚投体育</a>-->
                                </li><!-- end ngRepeat: data in sportsAllTypes | orderBy:'Id' --><li class="header-nav-list-li ng-scope" ng-repeat="data in sportsAllTypes | orderBy:'Id'">
                                    <!--<a ng-click='playGame(data)'>{{data.Name.replace("CMD","亚投")}}</a>-->
                                    <a ng-click="playGame(data)" class="ng-binding">AG体育</a>
                                    <!--<a ng-click='playGame(data)'>亚投体育</a>-->
                                </li><!-- end ngRepeat: data in sportsAllTypes | orderBy:'Id' -->
                            </ul>
                        </div>
                    </li>
                    <li ui-sref-active="nav_active" style="background-position-x: -330px;">
                        <!-- ngIf: isGameAllowed&&casinoAllTypes.length --><a ui-sref="game" ng-if="isGameAllowed&amp;&amp;casinoAllTypes.length" class="ng-scope" href="/index/game" style=""></a><!-- end ngIf: isGameAllowed&&casinoAllTypes.length -->
                        <div class="header-nav-list" style="display: none;">
                            <ul class="header-nav-list-ul">
                                <!-- ngRepeat: data in casinoAllTypes --><li class="header-nav-list-li ng-scope" ng-repeat="data in casinoAllTypes" style=""><a ng-click="goGameType('game',data,$index)" class="ng-binding">AG电子</a></li><!-- end ngRepeat: data in casinoAllTypes --><li class="header-nav-list-li ng-scope" ng-repeat="data in casinoAllTypes"><a ng-click="goGameType('game',data,$index)" class="ng-binding">SG电子</a></li><!-- end ngRepeat: data in casinoAllTypes --><li class="header-nav-list-li ng-scope" ng-repeat="data in casinoAllTypes"><a ng-click="goGameType('game',data,$index)" class="ng-binding">VT电子</a></li><!-- end ngRepeat: data in casinoAllTypes --><li class="header-nav-list-li ng-scope" ng-repeat="data in casinoAllTypes"><a ng-click="goGameType('game',data,$index)" class="ng-binding">PP电子</a></li><!-- end ngRepeat: data in casinoAllTypes --><li class="header-nav-list-li ng-scope" ng-repeat="data in casinoAllTypes"><a ng-click="goGameType('game',data,$index)" class="ng-binding">TTG电子</a></li><!-- end ngRepeat: data in casinoAllTypes --><li class="header-nav-list-li ng-scope" ng-repeat="data in casinoAllTypes"><a ng-click="goGameType('game',data,$index)" class="ng-binding">HB电子</a></li><!-- end ngRepeat: data in casinoAllTypes --><li class="header-nav-list-li ng-scope" ng-repeat="data in casinoAllTypes"><a ng-click="goGameType('game',data,$index)" class="ng-binding">申博电子</a></li><!-- end ngRepeat: data in casinoAllTypes --><li class="header-nav-list-li ng-scope" ng-repeat="data in casinoAllTypes"><a ng-click="goGameType('game',data,$index)" class="ng-binding">CQ9电子</a></li><!-- end ngRepeat: data in casinoAllTypes --><li class="header-nav-list-li ng-scope" ng-repeat="data in casinoAllTypes"><a ng-click="goGameType('game',data,$index)" class="ng-binding">PT电子</a></li><!-- end ngRepeat: data in casinoAllTypes -->
                            </ul>
                        </div>
                    </li>
                    <li ui-sref-active="nav_active" style="background-position-x: -440px;" class="nav_active">
                        <!-- ngIf: isLotteryAllowed&&lotteryAllTypes.length --><a ui-sref="lottery" href="/index/lottery" ng-if="isLotteryAllowed&amp;&amp;lotteryAllTypes.length" class="ng-scope" style=""></a><!-- end ngIf: isLotteryAllowed&&lotteryAllTypes.length -->
                        <div class="header-nav-list" style="display: none;">
                            <ul class="header-nav-list-ul">
                                <li class="header-nav-list-li"><a ng-click="playGame({ProviderId: 25, ProviderGameCode: &quot;14&quot;, Language: &quot;zhCN&quot;,&quot;Platform&quot;:1})">六合彩</a></li>
                                <li class="header-nav-list-li"><a ng-click="playGame({ProviderId: 25, ProviderGameCode: &quot;8&quot;, Language: &quot;zhCN&quot;,&quot;Platform&quot;:1})">北京PK10</a></li>
                                <li class="header-nav-list-li"><a ng-click="playGame({ProviderId: 25, ProviderGameCode: &quot;3&quot;, Language: &quot;zhCN&quot;,&quot;Platform&quot;:1})">重庆时时彩</a></li>
                                <li class="header-nav-list-li"><a ng-click="playGame({ProviderId: 25, ProviderGameCode: &quot;5&quot;, Language: &quot;zhCN&quot;,&quot;Platform&quot;:1})">天津时时彩</a></li>
                                <li class="header-nav-list-li"><a ng-click="playGame({ProviderId: 25, ProviderGameCode: &quot;9&quot;, Language: &quot;zhCN&quot;,&quot;Platform&quot;:1})">江苏快三</a></li>
                                <li class="header-nav-list-li"><a ng-click="playGame({ProviderId: 25, ProviderGameCode: &quot;6&quot;, Language: &quot;zhCN&quot;,&quot;Platform&quot;:1})">广东11选5</a></li>
                            </ul>
                        </div>
                    </li>
                    <li ui-sref-active="nav_active" style="background-position-x: -550px;">
                        <!--ng-click='playGame({"ProviderId":23,"ProviderGameCode":"0","Language":"zhCN","View":"v1","TemplateName":"purple","Platform":1})'-->
                        <!-- ngIf: isCardAllowed&&cardAllTypes.length --><a ui-sref="card" ng-if="isCardAllowed&amp;&amp;cardAllTypes.length" class="ng-scope" href="/index/card" style=""></a><!-- end ngIf: isCardAllowed&&cardAllTypes.length -->
                        <div class="header-nav-list" style="display: none;">
                            <ul class="header-nav-list-ul">
                                <!-- ngRepeat: data in cardAllTypes --><li class="header-nav-list-li ng-scope" ng-repeat="data in cardAllTypes" style=""><a ng-click="playGame(data)" class="ng-binding">KY棋牌</a></li><!-- end ngRepeat: data in cardAllTypes -->
                            </ul>
                        </div>
                    </li>
                    <li ui-sref-active="nav_active" style="background-position-x: -660px;">
                        <!-- ngIf: isGameAllowed&&fishAllTypes.length --><a ui-sref="fish" ng-if="isGameAllowed&amp;&amp;fishAllTypes.length" class="ng-scope" href="/index/fish" style=""></a><!-- end ngIf: isGameAllowed&&fishAllTypes.length -->
                        <div class="header-nav-list" style="display: none;">
                            <ul class="header-nav-list-ul">
                                <!-- ngRepeat: data in fishAllTypes --><li class="header-nav-list-li ng-scope" ng-repeat="data in fishAllTypes" style=""><a ng-click="playGame(data)" class="ng-binding">PT捕鱼</a></li><!-- end ngRepeat: data in fishAllTypes --><li class="header-nav-list-li ng-scope" ng-repeat="data in fishAllTypes"><a ng-click="playGame(data)" class="ng-binding">AG捕鱼</a></li><!-- end ngRepeat: data in fishAllTypes --><li class="header-nav-list-li ng-scope" ng-repeat="data in fishAllTypes"><a ng-click="playGame(data)" class="ng-binding">CQ9捕鱼</a></li><!-- end ngRepeat: data in fishAllTypes -->
                            </ul>
                        </div>
                    </li>
                    <li ui-sref-active="nav_active" style="background-position-x: -770px;"><a ui-sref="promotions" href="/index/promotions"></a></li>
                    <!--<li ui-sref-active="nav_active"><a ui-sref="preferentialHall" ui-sref-opts="{reload:true}">活动大厅 <span>ACTIVITY</span></a></li>-->
                    <!--<li><a  ui-sref="mobile" ui-sref-active="nav_active">手机投注</a></li>-->
                    <!--<li><a>赞助西甲</a></li>-->
                    <li ui-sref-active="nav_active" style="background-position-x: -880px;"><a ng-click="openNewWindow(basesetList.PcService.Value,'user')"></a></li>
                </ul>
            </div>
        </div>
    </div>

    <!--登录弹框-->
    <div class="my-modal loginModal" style="display: block;">
        <div class="cd-popup" role="alert">
            <div class="cd-popup-container">
                <a href="javascript:void (0);" class="cd-popup-close myModalClose"></a>
                <div class="myModal-header">
                    <div class="title"><img src="../../../images/yt888/modal/login-title.png" alt=""></div>
                </div>
                <div class="header-button-line"></div>
                <div class="myModal-body">
                    <form class="form-horizontal ng-pristine ng-invalid ng-invalid-required" autocomplete="off" name="$parent.loginModalForm" novalidate="" ng-submit="modalLogin()">
                        <div class="form-group" style="position: relative;">
                            <label class="userName-icon" for="userName"></label>
                            <input class="form-control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required" id="userName" tabindex="1" autofocus="" type="text" ng-model="$parent.userNameModal" ng-focus="changeModalInput()" required="" name="userName" placeholder="请输入您的账号">
                            <!--<a ui-sref="forgetPassword" style="position: absolute;top: 3px;right: 1px;width: 42px;height:31px;line-height: 31px;text-align: center;text-decoration: none;border-left: 1px solid #575757;color: #666666;" data-dismiss="modal" aria-hidden="true">忘记?</a>-->
                        </div>
                        <div class="form-group">
                            <label class="password-icon" for="password"> </label>
                            <input class="form-control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required" tabindex="2" type="password" ng-model="$parent.passwordModal" ng-focus="changeModalInput()" id="password" required="" name="password" placeholder="请输入您的密码">
                            <!--<a ui-sref="forgetPassword"-->
                            <!--style="position: absolute;top: 3px;right: 1px;width: 42px;height:31px;line-height: 31px;text-align: center;text-decoration: none;border-left: 1px solid #575757;color: #666666;"-->
                            <!--data-dismiss="modal" aria-hidden="true">忘记?</a>-->
                        </div>
                        <div class="form-group yzm">
                            <label class="yzm-icon" for="yzm"></label>
                            <input class="form-control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required" tabindex="3" type="text" ng-model="$parent.verifyCodeModal" required="" id="yzm" ng-focus="changeModalInput(true)" name="yzm" placeholder="请输入验证码">
                            <a class="verifyimage " ng-click="changeInput(true)"><img ng-src="/d/m/verifyimage?u=7eb46e" src="/d/m/verifyimage?u=7eb46e"></a>
                        </div>
                        <div class="form-group loginError red">
                            <!-- ngIf: $parent.loginModalForm.$invalid&&submit -->
                            <!-- ngIf: !$parent.loginModalForm.$invalid&&textError -->
                        </div>
                        <div class="form-group clearfix">
                            <button tabindex="4" class="login-btn btn" type="submit">登录</button>
                            <!--<button ui-sref="register" class="register pull-right">立即注册</button>-->
                        </div>
                        <div class="clearfix form-group" style="color: #ffffff;">
                            <span style="float: left; margin-top: 5px;">忘记密码？请联系
                            <a class="text-info  myModalClose" title="忘记密码" href="" style="color: yellow;" ng-click="openNewWindow(basesetList.PcService.Value,'user')">在线客服</a></span>
                            <a ui-sref="register" style="float: right;margin-top: 5px;color: #ffffff;" class="text-info myModalClose" title="立即注册" href="/index/register">注册</a>
                        </div>
                    </form>
                </div>
                <!-- ngIf: modalLoginLoading -->
            </div>
        </div>
    </div>

    <!--滚动消息公告弹框-->
    <div class="my-modal userPopModal" style="display: block;">
        <div class="cd-popup" role="alert">
            <div class="cd-popup-container">
                <a href="javascript:void (0);" class="cd-popup-close myModalClose"></a>
                <div class="myModal-header">
                    <h3 class="modal-title lb ng-binding"></h3>
                    <!-- <button type="button" class="close"  data-dismiss="modal" >
                         <span aria-hidden="true">&times;</span>
                     </button>-->
                </div>
                <div class="myMmodal-body neirong">
                    <div class="text ng-binding"></div>
                </div>
                <div class="myMmodal-footer clearfix">
                    <div class="pull-left alreadyRead"><input type="checkbox" ng-model="alreadyRead" class="ng-pristine ng-untouched ng-valid ng-empty">勾选为已读，下次登录将不会再显示此登录框内容
                    </div>
                    <div class="pull-right">
                        <!-- ngIf: allUserPopups.length-1!=iNow --><a href="#" class="btn btn-purple ps-r ng-scope" ng-click="nextUserPopups(alreadyRead,userPopups.Id)" ng-if="allUserPopups.length-1!=iNow">下一条</a><!-- end ngIf: allUserPopups.length-1!=iNow -->
                        <!-- ngIf: allUserPopups.length-1==iNow -->
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--系统提示弹框-->
    <div class="my-modal allErrorModal" style="display: block;">
        <div class="cd-popup" role="alert">
            <div class="cd-popup-container">
                <a href="javascript:void (0);" class="cd-popup-close myModalClose"></a>
                <div class="myModal-header">
                    <div class="title"><img src="../../../images/yt888/modal/notice-title.png" alt=""></div>
                </div>
                <div class="header-button-line"></div>
                <div class="myModal-body">
                    <p class="text ng-binding"></p>
                </div>
                <div class="myModal-footer">
                    <a href="" class="btn myModalClose">确定</a>
                </div>
            </div>
        </div>
    </div>
    <!--领奖提示弹框-->
    <div class="my-modal prizeModal" style="display: block;">
        <div class="cd-popup" role="alert">
            <div class="cd-popup-container">
                <!--<a href="javascript:void (0);" class="cd-popup-close myModalClose"></a>-->

                <div class="myModal-body">
                    <div class="content">
                        <span class="ng-binding"></span>
                        <span class="money ng-binding"></span>
                        <span class="ng-binding"></span>
                    </div>
                </div>
                <div class="myModal-footer">
                    <a href="" class="btn myModalClose"></a>
                </div>
            </div>
        </div>
    </div>

    <!--提示去绑定银行卡-->
    <div class="my-modal blankModal" style="display: block;">
        <div class="cd-popup" role="alert">
            <div class="cd-popup-container">
                <a href="javascript:void (0);" class="cd-popup-close myModalClose"></a>
                <div class="myModal-header">
                    <div class="title"><img src="../../../images/yt888/modal/notice-title.png" alt=""></div>
                </div>
                <div class="header-button-line"></div>
                <div class="myModal-body">
                    <h3>您的账号未绑定银行卡，无法进行取款操作!</h3>
                    <div class="button-wrap"></div>
                </div>
                <div class="myModal-footer">
                    <a class="btn" ng-click="gotofr('bankTab')">立即去绑定~</a>
                </div>
            </div>
        </div>
    </div>

    <!--稽核详细弹出框-->
    <div class="my-modal auditModal" style="display: block;">
        <div class="cd-popup" role="alert">
            <div class="cd-popup-container">
                <a href="javascript:void (0);" class="cd-popup-close myModalClose"></a>
                <!--<div class="myModal-header">-->
                    <!--<div class="title"><img src="../../../images/yt888/modal/notice-title.png" alt=""></div>-->
                <!--</div>-->
                <!--<div class="header-button-line"></div>-->
                <div class="myModal-body">
                    <form class="ng-pristine ng-valid" action="" name="auditModalForm">
                        <div class="form-group clearfix" style="margin-top: 5px;">
                            <div class="col-sm-4 " style="padding-left: 0;">
                                <div class="form-inline">
                                    <label class="control-label ">
                                        <input type="checkbox" class="form-control ng-pristine ng-untouched ng-valid ng-not-empty" value="1" name="auditModalStatus" ng-model="auditModalStatus1" ng-change="changeAuditModalStatus()">未通过
                                    </label>
                                    <label class="control-label ">
                                        <input type="checkbox" class="form-control ng-pristine ng-untouched ng-valid ng-empty" value="0" name="auditModalStatus" ng-model="auditModalStatus2" ng-change="changeAuditModalStatus()">已通过
                                    </label>
                                    <div class="search-btn" style="display: inline-block;margin-left: 5px;" ng-click="getTurnoverauditlist()">刷新</div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class=" text-left">
                                <p>自上次出款后的首次入账之后的稽核</p>
                            </div>
                        </div>
                    </form>
                    <table class="table table-bordered table-condensed">
                        <thead>
                        <tr>
                            <th class="text-center">稽核开始时间</th>
                            <th class="text-center">入款金额</th>
                            <th class="text-center">入款稽核</th>
                            <th class="text-center">行政费用</th>
                            <th class="text-center">优惠金额</th>
                            <th class="text-center">优惠稽核</th>
                            <th class="text-center">优惠扣除</th>
                            <th class="text-center">稽核状态</th>
                        </tr>
                        </thead>
                        <!-- ngIf: drinfo.Data.length -->
                        <tbody><!-- ngIf: !drinfo.Data.length --><tr ng-if="!drinfo.Data.length" class="ng-scope">
                            <td colspan="8">
                                <div class="nodata text-center" style="padding: 20px;height: 290px;">
                                    <!--<img src="./images/nodata.png" alt="">-->
                                    <!--<p>暂无任何内容哦~</p>-->
                                    <p class="red" style="margin-top: 100px;"><span class="glyphicon glyphicon-warning-sign" style="font-size:40px;color: #f3c61a"></span> 暂无任何内容哦~</p>
                                </div>
                            </td>
                        </tr><!-- end ngIf: !drinfo.Data.length -->
                    </tbody></table>
                </div>
                <div class="myPager">
                    <ul boundary-links="true" first-text="首页" last-text="尾页" previous-text="<" next-text=">" uib-pagination="" max-size="4" force-ellipses="true" total-items="drinfo.Total" items-per-page="10" ng-model="drinfoPageNow" ng-change="getTurnoverauditlist()" class="ng-pristine ng-untouched ng-valid ng-isolate-scope pagination ng-not-empty" role="menu"><!-- ngIf: ::boundaryLinks --><li role="menuitem" ng-if="::boundaryLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-first ng-scope disabled"><a href="" ng-click="selectPage(1, $event)" ng-disabled="noPrevious()||ngDisabled" uib-tabindex-toggle="" class="ng-binding" disabled="disabled" tabindex="-1">首页</a></li><!-- end ngIf: ::boundaryLinks -->
<!-- ngIf: ::directionLinks --><li role="menuitem" ng-if="::directionLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-prev ng-scope disabled"><a href="" ng-click="selectPage(page - 1, $event)" ng-disabled="noPrevious()||ngDisabled" uib-tabindex-toggle="" class="ng-binding" disabled="disabled" tabindex="-1">&lt;</a></li><!-- end ngIf: ::directionLinks -->
<!-- ngRepeat: page in pages track by $index --><li role="menuitem" ng-repeat="page in pages track by $index" ng-class="{active: page.active,disabled: ngDisabled&amp;&amp;!page.active}" class="pagination-page ng-scope active"><a href="" ng-click="selectPage(page.number, $event)" ng-disabled="ngDisabled&amp;&amp;!page.active" uib-tabindex-toggle="" class="ng-binding">1</a></li><!-- end ngRepeat: page in pages track by $index -->
<!-- ngIf: ::directionLinks --><li role="menuitem" ng-if="::directionLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-next ng-scope disabled"><a href="" ng-click="selectPage(page + 1, $event)" ng-disabled="noNext()||ngDisabled" uib-tabindex-toggle="" class="ng-binding" disabled="disabled" tabindex="-1">&gt;</a></li><!-- end ngIf: ::directionLinks -->
<!-- ngIf: ::boundaryLinks --><li role="menuitem" ng-if="::boundaryLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-last ng-scope disabled"><a href="" ng-click="selectPage(totalPages, $event)" ng-disabled="noNext()||ngDisabled" uib-tabindex-toggle="" class="ng-binding" disabled="disabled" tabindex="-1">尾页</a></li><!-- end ngIf: ::boundaryLinks -->
</ul>
                </div>
                <!--<div class="myModal-footer" >-->
                    <!--<a href="" class="btn myModalClose"> 确定 </a>-->
                <!--</div>-->
            </div>
        </div>
    </div>

    <!--转账进游戏弹框-->
    <div class="my-modal goGamePopModal" style="display: block;">
        <div class="cd-popup" role="alert">
            <div class="cd-popup-container">
                <a href="javascript:void (0);" class="cd-popup-close myModalClose"></a>
                <div class="myModal-header">
                    <div class="title"><img src="../../../images/yt888/modal/Into-account-title.png" alt=""></div>
                </div>
                <div class="header-button-line"></div>
                <div class="myModal-body">
                    <form action="##" class="ng-pristine ng-valid">
                        <div class="group">
                            <span class="title">转出：</span>
                            <div class="input-group">
                                <span class="input-group-addon">我的钱包</span>
                                <input ng-model="transformModalData.blance" class="form-control form-inline ng-pristine ng-untouched ng-valid ng-empty" readonly="" disabled="">
                                <!--<span class="input-group-addon" ng-click="gotoUrl('deposit')">去存款</span>-->
                                <a href="/user/accountCenter/depositTab" class="btn btn-sm btn-go myModalClose" ui-sref="depositTab">去存款</a>
                            </div>
                        </div>
                        <div class="group">
                            <span class="title">转入：</span>
                            <div class="input-group">
                                <span class="input-group-addon ng-binding"></span>
                                <input ng-model="lottery.Balance" control-keyup="" class="form-control form-inline ng-pristine ng-untouched ng-valid ng-empty" readonly="" disabled="">
                            </div>
                        </div>
                        <div class="group">
                            <span class="title">金额：</span>
                            <div class="input-group" style="background: transparent;">
                                <!--<span class="input-group-addon">￥</span>-->
                                <input ng-model="$parent.price" name="transformModelPrice" control-keyup="" key-enter="" class="form-control form-inline ng-pristine ng-untouched ng-valid ng-empty" placeholder="请输入金额" style="width: 365px;background: transparent;border-bottom: 1px solid #ADB4C1;">
                            </div>
                        </div>
                        <div style="height: 27px;margin-top: -10px;margin-bottom: 10px;font-size: 12px;">
                            <div class="form-group error red ng-binding ng-hide" ng-show="errorInfo">
                                <span class="glyphicon glyphicon-exclamation-sign"></span> 
                            </div>
                        </div>
                        <div class="form-group clearfix" style="width: 419px;margin-left: -15px;padding-bottom: 10px;">
                            <a class="btn toGame submit" ng-click="toGame(lottery.ProviderId,$parent.price)" style="margin-left: 0px;">确认转账</a>
                            <a class="btn gotoLotteryHtml" ng-click="gotoLotteryHtml(null,lottery.ProviderId)" style="margin-left: 38px;">进入游戏</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>
<script>
export default {
  data() {
    copyright:'lotterywd.com'
  }
}
</script>
<style lang="sass" scoped>
.view-header {
  .w-header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1030;
    width: 100%;
    background: url(~/assets/images/header_bg.png) no-repeat center;
  }
  .logo {
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
  }
  a {
    text-decoration: none !important;
    color: white;
    cursor: pointer;
  }
}
</style>


