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



document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("shareBtn");

  btn.addEventListener("click", async () => {
    const data = {
      title: document.title,
      text: "링크 공유합니다!",
      url: location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(data);
      } catch (err) {
        console.log("공유 취소 또는 오류:", err);
      }
    } else {
      // 지원 안 되는 브라우저에서는 링크 복사만 실행
      await navigator.clipboard.writeText(location.href);
      alert("지원되지 않는 브라우저입니다.\n링크가 복사되었습니다!");
    }
  });
});

