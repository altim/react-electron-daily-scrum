var Config = (function(){
    config = {
        'username' : '{{username}}'
    };

    return {
        getUsername : function(){
            return config.username;
        }
    }
})();

module.exports = Config;