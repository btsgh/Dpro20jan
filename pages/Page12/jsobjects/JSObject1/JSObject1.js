export default {
	welcome: `Ahoy there! Welcome to our group! How are you doing? While you explore, here's a link to the new member paperwork:
`,
	renewal: `A friendly reminder that your membership is about to expire. Please renew your subscriptions at:
`,
	thankyou: `Thank you for supporting our group! Your membership has been renewed.
`,
	onOpen: () => {
		storeValue('msgName',appsmith.store.msgName || 'welcome')
	}
	
	
	

}
