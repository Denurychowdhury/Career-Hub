

const getAppliedjobs = () => {
    const newapply = localStorage.getItem('applied-job')
    if (newapply) {
        return JSON.parse(newapply)
    }
    return [];
}
 

const SaveJobapplication = id => {
    const savedapplication = getAppliedjobs()
    const exists = savedapplication.find(jobId=> jobId === id)
    if (!exists) {
        savedapplication.push(id)
        localStorage.setItem('applied-job',JSON.stringify(savedapplication))
    }
}

export { SaveJobapplication, getAppliedjobs };
