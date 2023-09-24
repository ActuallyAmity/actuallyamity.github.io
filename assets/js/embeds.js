FlowTheme.lazy('youtube-embed', 30, () => {
  new FlowTheme.EmbedHelper.YouTube('UCQ9nP4I7Ql3o-9jmMPd2I2A', 'youtube-embed')
    .fetchVideoData()
    .then((data) => data.mostRecent.embed());
});

FlowTheme.lazy('twitch-embed', 30, (targetId = 'twitch-embed') => {
  const target =
    targetId instanceof Element ? targetId : document.getElementById(targetId);

  !target && console.error(`[Twitch]: Element not found`);

  const dataSrc = target.getAttribute('data-src');
  // Append Site._currentURL to satify Twitch Embed requirement for a parent referrer
  if (dataSrc) target.src = dataSrc + window.location.origin.split('//')[1];
});
