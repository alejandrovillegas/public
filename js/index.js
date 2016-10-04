(function(){
    var Utils = {
        calculateAndSetTotal : function() {
            /* Estos totales son en MB */
            var totalSocialNetworks = App.$slSocialNetworks.slider("value") * conventions.socialNetworks;
            var totalWhatsAppOther = App.$slWhatsappOthers.slider("value") * conventions.whatsappOther;
            var totalStreamingMusic = App.$slStreamingMusic.slider("value") * conventions.streamingMusic;
            var totalStreamingVideo = App.$slStreamingVideo.slider("value") * conventions.streamingVideo;
            var totalEmails = App.$slEmails.slider("value") * conventions.email;
            var totalNavigation = App.$slNavigation.slider("value") * conventions.navigation;
            var totalAppDownloads = App.$slAppDownloads.slider("value") * conventions.appDownloads;
        
            var totalMB = totalSocialNetworks + totalWhatsAppOther + totalStreamingMusic + totalStreamingVideo + totalEmails + totalNavigation + totalAppDownloads; 
            var totalGB = totalMB / 1024;

            /* Se deja el numero con solo dos decimas y rendoneadas */
            totalGB = parseFloat(Math.round(totalGB * 100) / 100).toFixed(2);
            
            App.$totalGigas.html(totalGB);

            
        }
    }

    var App = {
        init : function() {
            this.cacheElements();
            this.bindEvents();
        },
        cacheElements : function() {
            this.$slSocialNetworks = $("#sl-social-networks");
            this.$slWhatsappOthers = $("#sl-whatsapp-others");
            this.$slStreamingMusic = $("#sl-streaming-music");
            this.$slStreamingVideo = $("#sl-streaming-video");
            this.$slEmails = $("#sl-emails");
            this.$slNavigation = $("#sl-navigation");
            this.$slAppDownloads = $("#sl-app-downloads");

            this.$totalSocialNetworks = $("#total-social-networks");
            this.$totalWhatsappOthers = $("#total-whatsapp-others");
            this.$totalStreamintMusic = $("#total-streaming-music");
            this.$totalStreamingVideo = $("#total-streaming-video");
            this.$totalEmails = $("#total-emails");
            this.$totalNavigation = $("#total-navigation");
            this.$totalAppDownloads = $("#total-app-downloads");
            
            this.$totalGigas = $("#total-gigas");
        },
        bindEvents : function() {
            this.$slSocialNetworks.slider({
                range: "min",
                max: maxValues.socialNetworks,
                animate: true,
                slide: function(e, ui) {
                    App.$totalSocialNetworks.html(ui.value);
                },
                change: Utils.calculateAndSetTotal
            });
            this.$slWhatsappOthers.slider({
                range: "min",
                max: maxValues.whatsappOther,
                animate: true,
                slide: function(e, ui) {
                    App.$totalWhatsappOthers.html(ui.value);
                },
                change: Utils.calculateAndSetTotal
            });
            this.$slStreamingMusic.slider({
                range: "min",
                max: maxValues.streamingMusic,
                animate: true,
                slide: function(e, ui) {
                    App.$totalStreamintMusic.html(ui.value);
                },
                change: Utils.calculateAndSetTotal
            });
            this.$slStreamingVideo.slider({
                range: "min",
                max: maxValues.streamingVideo,
                animate: true,
                slide: function(e, ui) {
                    App.$totalStreamingVideo.html(ui.value);
                },
                change: Utils.calculateAndSetTotal
            });
            this.$slEmails.slider({
                range: "min",
                max: maxValues.email,
                animate: true,
                slide: function(e, ui) {
                    App.$totalEmails.html(ui.value);
                },
                change: Utils.calculateAndSetTotal
            });
            this.$slNavigation.slider({
                range: "min",
                max: maxValues.navigation,
                animate: true,
                slide: function(e, ui) {
                    App.$totalNavigation.html(ui.value);
                },
                change: Utils.calculateAndSetTotal
            });
            this.$slAppDownloads.slider({
                range: "min",
                max: maxValues.appDownloads,
                animate: true,
                slide: function(e, ui) {
                    App.$totalAppDownloads.html(ui.value);
                },
                change: Utils.calculateAndSetTotal
            });
        }
    };

    App.init();
})();