<LoginForm>
<form class="platform-form platform-form-login" onsubmit={ login }>
    <input type="hidden" name="goback" class="form-order-return" value="0">
    <input type="hidden" name="lotto_csrf_token" value="a877ec934ad4630bed4202beed96fa66525de5ba21e053648bd919c7c00e468717c31f4e13545fe9fdf010bb276c2e72d2d8bed9a1c72e665e2b38e44b879443">
    <div class="platform-alert platform-alert-error hidden-normal">
        <p><span class="fa fa-exclamation-circle"></span> Wrong credentials! Please try again.</p> 
    </div>
    <p class="text-center">
        Don't have an account? <a href="#" class="popup-signup">Sign up</a>.    </p>

    <div class="form-group">
        <input type="email" autocomplete="email" required="" value={loginName} class="form-control" id="inputLoginEmail" name="login_name" placeholder="Your e-mail address">
    </div>
    <div class="form-group">
        <input type="password" required="" autocomplete="current-password" class="form-control" id="inputLoginPassword" name="password" placeholder="Your password" value={password}>
    </div>
    <div class="checkbox">
        <label><input type="checkbox" name="remember" value="1"> Remember me        </label>
    </div>
        <div class="platform-form-btn">
        <button type="submit" class="btn btn-primary btn-lg btn-mobile-large">
            login        </button>
    </div>
    <div class="form-help text-center">
        <a href="#" class="btn-lost popup-lostpassword">
            Forgotten password        </a>
    </div>
    <div class="clearfix"></div>
</form>
<script>
    login(e) {
        e.preventDefault();
        axios.post('/user/login', {
            login_name: this.loginName,
            password: this.password
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
</script>
</LoginForm>