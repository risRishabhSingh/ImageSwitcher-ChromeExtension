let input_box
document.querySelector("#handleCLick").addEventListener("click", () => {
    input_box = document.querySelector("#input_box").value
    handleclick(input_box)
})

async function handleclick() {
    let [tab] = await chrome.tabs.query({ active : true})
    chrome.scripting.executeScript({
        target: {tabId : tab.id},
        func: (input_boxValue) => {
            let imgchange = document.querySelectorAll("img")
            imgchange.forEach((item) => {
                if(input_boxValue){
                    item.src = input_boxValue
                }else{
                    null
                }
            })
        },
        args: [input_box],
    })
}
 