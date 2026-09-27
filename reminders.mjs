export const reminderKeys=['cooking','preparation','expiry','shoppingFirst','shoppingSecond'];
export function readReminderForm(form){
 const times={},enabled={all:form.get('allEnabled')==='on'};
 for(const key of reminderKeys){const value=form.get(key);if(typeof value!=='string'||!/^([01]\d|2[0-3]):[0-5]\d$/.test(value))throw Error('Invalid time');times[key]=value;enabled[key]=form.get(key+'Enabled')==='on';}
 return {times,enabled};
}
