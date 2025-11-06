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
