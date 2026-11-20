(function(){
  var data = {"syncTime":"2026-11-20 14:35","convs":[{"id":"012b6894-2e81-44de-a00d-a54e062faf7b","title":"请先完整阅读当前工作目录下的 `CONTEXT_dream_sk...","turn_count":11,"update_time":"2026-11-20 14:35"},{"id":"63c5224e-ccd2-4b7c-a7be-65dceb2a5583","title":"Session 63c5224e-ccd2-4b7c-a7be-65dceb2a5583","turn_count":1,"update_time":"2026-11-20 13:41"},{"id":"81c6ea62-a7d6-4654-9025-dbc8579c0d8f","title":"Session 81c6ea62-a7d6-4654-9025-dbc8579c0d8f","turn_count":1,"update_time":"2026-11-20 13:40"},{"id":"9ed4bc5b-6a06-48b4-b7f7-6a59faa0884d","title":"Session 9ed4bc5b-6a06-48b4-b7f7-6a59faa0884d","turn_count":1,"update_time":"2026-11-20 13:40"},{"id":"9cbc4c7b-38fb-45c4-94b0-16f969eaa0e1","title":"Session 9cbc4c7b-38fb-45c4-94b0-16f969eaa0e1","turn_count":1,"update_time":"2026-11-20 13:40"},{"id":"95edef4d-7bb6-4fc4-8d7d-e09d8a27ef4a","title":"Session 95edef4d-7bb6-4fc4-8d7d-e09d8a27ef4a","turn_count":1,"update_time":"2026-11-20 13:40"},{"id":"7489c4f3-dd43-4782-ba24-4c7be4646657","title":"你现在接手一个已经跑通多期成品的本科生科普 PPT 动画视频制作...","turn_count":12,"update_time":"2026-11-19 21:40"},{"id":"e1773243-aef7-4f34-b155-503d9687d82a","title":"你现在需要全面升级我自己的科普视频 PPT 制作 Skill。我...","turn_count":8,"update_time":"2026-11-19 20:02"},{"id":"c9eb2bf0-fed1-4de6-965b-944c2745224d","title":"请挂载 @.agent/rules/optics-tutor.m...","turn_count":15,"update_time":"2026-11-19 14:58"},{"id":"f4ffdcb7-d524-471a-a991-b7406a3854b2","title":"我正在继续升级本地的同济双模型 MCP 红队探针（目前为 v3....","turn_count":34,"update_time":"2026-11-19 14:20"},{"id":"6a890e8e-7d88-4ac0-8276-e1d6adfd70ef","title":"帮我检查一下我的sakuracat是不是最新版的，你去官网查看一...","turn_count":9,"update_time":"2026-11-19 14:03"},{"id":"da7dc122-9a62-456a-8fa7-d160f9691968","title":"Session da7dc122-9a62-456a-8fa7-d160f9691968","turn_count":4,"update_time":"2026-11-19 14:02"},{"id":"bb1e7994-b052-407c-8be9-f5c7c55e9456","title":"我想知道antigravity的对话该怎么分享，因为我尝试了co...","turn_count":15,"update_time":"2026-11-18 10:48"},{"id":"8e491cda-d9db-4417-a196-9fe1a9a1b942","title":"你现在是我的首席状态架构师与 Windows 自动化工程专家。请...","turn_count":14,"update_time":"2026-11-18 10:41"},{"id":"eb9e76bb-d249-4dbf-b935-cb9e2f53e3b9","title":"基本情况与地理状态：现居浙江温州，与在上海读研的你处于异地恋状态...","turn_count":10,"update_time":"2026-11-17 19:00"},{"id":"85bfe033-2bb0-4cfd-8e2a-98b94a08605c","title":"Unknown: Agent execution termina...","turn_count":10,"update_time":"2026-11-17 18:41"},{"id":"222deb6b-4c6e-4154-b587-357f3d17da1e","title":"请严格按 中的指令执行配置。写入完成后，向我输出简短部署报告，包...","turn_count":8,"update_time":"2026-11-17 12:04"},{"id":"e6d7cdfe-dd95-493b-8474-27bf6721a647","title":"我刚刚新建了一个项目，是根据zemax文件夹建的，但是我不知道按...","turn_count":4,"update_time":"2026-11-15 11:39"},{"id":"cafe9681-e78c-45dd-9866-5dfeeacf7425","title":"这是我的背景。我建了一个Zemax文件夹是因为我在之后打算可以学...","turn_count":2,"update_time":"2026-11-15 11:24"},{"id":"c0f340d4-8f08-43e4-a09b-e83d54aabc7e","title":"检查一下我电脑上的deepseek harness的skill，...","turn_count":15,"update_time":"2026-11-13 14:13"},{"id":"bab10e4d-18f2-4057-835d-a823662b83aa","title":"我使用学校的api连接了deepseek的最新模型v4.1fla...","turn_count":22,"update_time":"2026-11-11 15:35"},{"id":"ff410536-ea4e-4c07-bf35-c830fb27226d","title":"这是我和gemini的对话，其实是关于我目前的背景，可以供你了解...","turn_count":11,"update_time":"2026-11-09 16:29"},{"id":"aee43892-ac3d-45ec-b86d-2843da81a054","title":"我想在这里记录我的光路学习历程，目前是第一次学习，我是同济大学的...","turn_count":11,"update_time":"2026-11-06 14:31"}]};
  var badge = document.getElementById('syncBadge');
  if (badge && data.syncTime) { badge.textContent = '自动同步更新: ' + data.syncTime; }
  var list = document.getElementById('convList');
  if (!list) { return; }
  var activeId = document.body.getAttribute('data-conv-id') || '';
  var prefix = document.body.getAttribute('data-base-prefix') || './';
  var pageTurns = document.body.getAttribute('data-turn-count') || '';
  var pageUpdate = document.body.getAttribute('data-update-time') || '';
  var isIndex = document.body.getAttribute('data-is-index') === '1';
  var isWeb = (window.location.protocol !== 'file:');
  function makeVer(c) { return c.turn_count + '_' + String(c.update_time || '').replace(/[^0-9]/g, ''); }
  if (isWeb && data.convs.length > 0) {
    var targetConv = null;
    var targetPath = null;
    if (isIndex) {
      var topC = data.convs[0];
      if (topC.id !== activeId || String(topC.turn_count) !== pageTurns || topC.update_time !== pageUpdate) {
        targetConv = topC; targetPath = './c/' + topC.id + '.html';
      }
    } else {
      for (var k = 0; k < data.convs.length; k++) {
        if (data.convs[k].id === activeId) {
          if (String(data.convs[k].turn_count) !== pageTurns || data.convs[k].update_time !== pageUpdate) {
            targetConv = data.convs[k]; targetPath = window.location.pathname;
          }
          break;
        }
      }
    }
    if (targetConv && targetPath) {
      var gk = 'ag_r_' + targetConv.id + '_' + makeVer(targetConv);
      try {
        if (window.sessionStorage && !sessionStorage.getItem(gk)) {
          sessionStorage.setItem(gk, '1');
          window.location.replace(targetPath + '?v=' + encodeURIComponent(makeVer(targetConv)));
          return;
        }
      } catch (e) {}
    }
  }
  var frag = document.createDocumentFragment();
  for (var i = 0; i < data.convs.length; i++) {
    var c = data.convs[i];
    var a = document.createElement('a');
    a.className = (c.id === activeId) ? 'conv-item active' : 'conv-item';
    a.href = prefix + c.id + '.html' + (isWeb ? ('?v=' + encodeURIComponent(makeVer(c))) : '');
    var t = document.createElement('div');
    t.className = 'conv-title';
    t.textContent = c.title;
    var m = document.createElement('div');
    m.className = 'conv-meta';
    var s1 = document.createElement('span');
    s1.textContent = c.turn_count + ' msgs';
    var s2 = document.createElement('span');
    s2.textContent = c.update_time;
    m.appendChild(s1); m.appendChild(s2);
    a.appendChild(t); a.appendChild(m);
    frag.appendChild(a);
  }
  list.innerHTML = '';
  list.appendChild(frag);
})();
