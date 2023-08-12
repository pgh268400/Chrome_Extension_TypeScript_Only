// Redefine 오류를 피하기 위해 반드시 스크립트들은 namespace로 감싸야 한다.
// content script들은 변수를 서로 공유하지 않는 듯 함.

namespace App {
  console.log("content script loaded");
  // body는 일반적으로 null이 될 수 없기 때문에 !를 붙임
  document.querySelector("body")!.style.backgroundColor = "Orange";
}
