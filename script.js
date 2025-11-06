// === D-데이 카운트다운 ===
(function(){
  try{
    const el = document.getElementById("countdown");
    const target = new Date(`${window.WEDDING_DATE}T13:00:00+09:00`); // 필요시 시간 변경
    function tick(){
      const now = new Date();
      const diff = target - now;
      if(diff <= 0){ el.textContent = "오늘 함께해요 ✨"; return; }
      const d = Math.floor(diff / (1000*60*60*24));
      el.textContent = `D-${d}`;
    }
    tick();
    setInterval(tick, 60*1000);
  }catch(e){}
})();



// === Web Share API ===
(function(){
  const btn = document.getElementById("shareBtn");
  if(!btn) return;
  btn.addEventListener("click", async () => {
    const shareData = {
      title: "제 1회 무야호 커플 체육대회",
      text: "탁구&볼링&고기",
      url: location.href
    };
    if(navigator.share){
      try{ await navigator.share(shareData); } catch(e){}
    }else{
      // 지원 안 되는 브라우저 대응: 주소 복사
      try{
        await navigator.clipboard.writeText(location.href);
        btn.textContent = "링크 복사됨!";
        setTimeout(()=> (btn.textContent = "링크 공유"), 1200);
      }catch(e){}
    }
  });
})();

