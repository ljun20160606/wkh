import { VALUE } from "./consts";

const interval = 'interval';
const mode = 'mode';
const min = 'min';
const kg = 'kg';
const coin = 'coin';

chrome.storage.sync.get({
    [mode]: VALUE,
    [min]: 0.1,
    [kg]: false,
    [interval]: 5,
    [coin]: 0.1
}, function (result) {
    $("#mode").val(result.mode);
    $("#min").val(result.min);
    $("#kg").val(result.kg);
    $("#interval").val(result.interval);
    $('#coin').val(result.coin);
});

const DoUpdate = () => {
    console.log("update");
    chrome.storage.sync.set({
        [interval]: $('#interval').val(),
        [mode]: $("#mode").val(),
        [min]: $("#min").val(),
        [kg]: $("#kg").val(),
        [coin]: $("#coin").val()
    }, function (result) {
        console.log(result)
    })
};

$("input").change(DoUpdate);
$("#update").click(DoUpdate);