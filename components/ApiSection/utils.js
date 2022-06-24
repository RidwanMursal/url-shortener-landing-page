// Helper function called by fetch url to change the link state and handle errors
const addLink = (response, validInput, setValidInput, shortenedLinks, setShortenedLinks, setInput) => {
    console.log(response)
    if (response.ok) {
      if (!validInput.isValid) setValidInput({isValid:true, message:""})
      const {result} = response
      setShortenedLinks([
        ...shortenedLinks, 
        {longLink: result.original_link, shortLink: result.full_short_link}
      ])
      setInput("")
    }else {
      setValidInput({isValid:false, message: "Not a Valid Link"})
    }
  }

// Checks if input is empty and fetches url using the url shortener api
const fetchUrl = async (validInput, setValidInput, shortenedLinks, setShortenedLinks, input, setInput) => {
    if (input === "") {
      setValidInput({isValid:false, message:"please input a link"})
      //alert("please add a link")
    }else {
      //console.log(input, "in link")
      const request = await fetch(`https://api.shrtco.de/v2/shorten?url=${input}`)
      const shortenedLink = await request.json()
      addLink(shortenedLink, validInput, setValidInput, shortenedLinks, setShortenedLinks, setInput)
    }
}

export {fetchUrl, addLink}