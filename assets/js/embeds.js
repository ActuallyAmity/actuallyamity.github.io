class Twitch {
  static embedStream(targetId = 'twitch-embed') {
    const target =
      targetId instanceof Element
        ? targetId
        : document.getElementById(targetId);

    !target && console.error(`[Twitch]: Element not found`);

    const dataSrc = target.getAttribute('data-src');

    // Append Site._currentURL to satify Twitch Embed requirement for a parent referrer
    if (dataSrc) target.src = dataSrc + window.location.origin.split('//')[1];
  }
}

const EMBED_ID = 'youtube-embed';
const YouTube = new FlowTheme.EmbedHelper.YouTube(
  'UCQ9nP4I7Ql3o-9jmMPd2I2A',
  EMBED_ID
);

FlowTheme.lazy('twitch-embed', 30, Twitch.embedStream);

YouTube.fetchVideoData().then((data) => {
  FlowTheme.lazy(EMBED_ID, 30, data.mostRecent.embed());
});
