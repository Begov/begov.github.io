const _0x8c14=['error','click','checked','<span\x20class=\x22span-content\x22>','json','#apply','#update','stringify','&format=mp3&lang=ru-RU&speed=0.9&emotion=neutral&speaker=','.span-content','onclick','input','disabled','innerHTML','https://models.dobro.ai/gpt2/medium/','#generator','textContent','</span>','POST','length','addEventListener','#close','span','forEach','querySelector','createElement','onloadeddata','replies','.content','remove','value','#audio-play','https://apihost.ru/php/whatsapp.php?text=','Вы\x20должны\x20выбрать\x20один\x20из\x20вариантов','play','classList','then','add','application/json;charset=utf-8','prompt','src','&nbsp','show','querySelectorAll','.input-radio','#vk-banner','Подождите\x20немного'];(function(_0x26c5a1,_0x8c146){const _0x565149=function(_0x968f73){while(--_0x968f73){_0x26c5a1['push'](_0x26c5a1['shift']());}};_0x565149(++_0x8c146);}(_0x8c14,0x107));const _0x5651=function(_0x26c5a1,_0x8c146){_0x26c5a1=_0x26c5a1-0x0;let _0x565149=_0x8c14[_0x26c5a1];return _0x565149;};let generator=document[_0x5651('0x2b')](_0x5651('0x22')),update=document[_0x5651('0x2b')](_0x5651('0x19')),vkBanner=document[_0x5651('0x2b')](_0x5651('0x11')),close=document['querySelector'](_0x5651('0x28')),apply=document[_0x5651('0x2b')](_0x5651('0x18')),choiceBlock=document[_0x5651('0x2b')]('#choice-block'),audio=document[_0x5651('0x2b')]('#audio'),audioPlay=document[_0x5651('0x2b')](_0x5651('0x3')),content=document['querySelector'](_0x5651('0x0'));let data={'prompt':'','length':0x1e,'num_samples':0x1};function getGeneratorString(){data[_0x5651('0xb')]=content['textContent'];sendData(data)[_0x5651('0x8')](_0x27fa9e=>{let _0x3a2716=document[_0x5651('0x2c')](_0x5651('0x29'));content[_0x5651('0x20')]+=_0x5651('0x16')+_0x27fa9e[_0x5651('0x2e')]+_0x5651('0x24');content[_0x5651('0x20')]+=_0x5651('0xd');if(update[_0x5651('0x1f')]!=![])update['disabled']=![];});}function sendData(_0x16f258){return fetch(_0x5651('0x21'),{'method':_0x5651('0x25'),'headers':{'Content-type':_0x5651('0xa')},'body':JSON[_0x5651('0x1a')](_0x16f258)})[_0x5651('0x8')](_0x4beaa1=>_0x4beaa1[_0x5651('0x17')]());}function updateData(){let _0x421c53=document['querySelectorAll'](_0x5651('0x1c'));span=_0x421c53[_0x421c53[_0x5651('0x26')]-0x1];if(_0x421c53[_0x5651('0x26')]>0x0){span[_0x5651('0x23')]='';data['prompt']=content[_0x5651('0x23')];sendData(data)['then'](_0x104634=>{span['textContent']=_0x104634['replies'];});}else update[_0x5651('0x1f')]=!![];}generator[_0x5651('0x27')](_0x5651('0x14'),getGeneratorString);update['addEventListener'](_0x5651('0x14'),updateData);content[_0x5651('0x27')](_0x5651('0x1e'),()=>{if(update[_0x5651('0x1f')]==![])update[_0x5651('0x1f')]=!![];if(content['textContent']!='')audioPlay['disabled']=![];else audioPlay[_0x5651('0x1f')]=!![];});audioPlay[_0x5651('0x27')]('click',()=>{choiceBlock[_0x5651('0x7')][_0x5651('0x9')](_0x5651('0xe'));});apply['addEventListener'](_0x5651('0x14'),()=>{let _0x99e417=document[_0x5651('0xf')](_0x5651('0x10'));let _0x419db7=![];_0x99e417[_0x5651('0x2a')](_0x573abb=>{if(_0x573abb[_0x5651('0x15')]){_0x419db7=!![];audio[_0x5651('0xc')]=_0x5651('0x4')+content[_0x5651('0x23')]+_0x5651('0x1b')+_0x573abb[_0x5651('0x2')];audio[_0x5651('0x2d')]=function(){audio[_0x5651('0x6')]();};choiceBlock[_0x5651('0x7')][_0x5651('0x1')](_0x5651('0xe'));chips('success',_0x5651('0x12'));return;}});if(!_0x419db7)chips(_0x5651('0x13'),_0x5651('0x5'));});setTimeout(()=>{vkBanner[_0x5651('0x7')][_0x5651('0x9')](_0x5651('0xe'));},0x4e20);close[_0x5651('0x1d')]=()=>{vkBanner[_0x5651('0x7')][_0x5651('0x1')](_0x5651('0xe'));};