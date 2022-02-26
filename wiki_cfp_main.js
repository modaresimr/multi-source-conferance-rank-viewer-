
wiki_fetcher = require('./wiki_cfp_fetcher.js');
cats = ['computer science', 'data management', 'reliability', 'artificial intelligence', 'philosophy', 'web services', 'engineering', 'formal methods', 'data analytics', 'machine learning', 'chemistry', 'smart grid', 'security', 'informatics', 'religion', 'education', 'network security', 'agents', 'software engineering', 'sensor networks', 'nursing', 'data mining', 'agriculture', 'anthropology', 'information technology', 'medical', 'services', 'communications', 'parallel computing', 'medical imaging', 'robotics', 'high performance computing', 'music', 'big data', 'information', 'information system', 'cloud computing', 'materials science', 'VLSI', 'networking', 'cloud', 'ehealth', 'management', 'sustainable development', 'theory', 'signal processing', 'information management', 'text mining', 'image processing', 'internet', 'multi-agent systems', 'technology', 'power', 'linked data', 'NLP', 'civil engineering', 'mobility', 'business', 'computer architecture', 'cancer', 'multimedia', 'cyber security', 'knowledge representation', 'energy', 'learning', 'cardiology', 'economics', 'industrial engineering', 'workshop', 'control', 'visualization', 'development', 'computer vision', 'AI', 'software architecture', 'computing', 'culture', 'speech', 'mechanical engineering', 'social networks', 'computer security', 'humanities', 'innovation', 'ambient intelligence', 'bioinformatics', 'blockchain', 'technologies', 'automation', 'teaching', 'chemical', 'databases', 'cryptography', 'e-education', 'information systems', 'social media', 'safety', 'environment', 'politics', 'e-health', 'communication', 'marketing', 'public health', 'internet of things', 'programming languages', 'ethics', 'social sciences', 'wireless networks', 'augmented reality', 'wireless', 'network', 'conferences', 'electronics', 'physics', 'fuzzy systems', 'information retrieval', 'mobile computing', 'tourism', 'intelligent systems', 'language', 'transportation', 'computational intelligence', 'sociology', 'graphics', 'manufacturing', 'ubiquitous computing', 'recommender systems', 'healthcare', 'electrical', 'chemical engineering', 'IOT', 'wireless communications', 'analytics', 'networks', 'computer networks', 'entrepreneurship', 'privacy', 'computational linguistics', 'wireless communication', 'materials', 'biometrics', 'international relations', 'science', 'neural networks', 'GIS', 'nanotechnology', 'biomedical', 'environmental sciences', 'literature', 'mechanical', 'parallel processing', 'simulation', 'virtual reality', 'nutrition', 'biotechnology', 'pervasive computing', 'dependability', 'computer', 'cybersecurity', 'performance', 'e-learning', 'knowledge discovery', '5G', 'semantic web', 'sensors', 'design automation', 'electrical engineering', 'arts', 'photonics', 'linguistics', 'electronics engineering', 'business intelligence', 'modeling', 'circuits', 'compilers', 'mechatronics', 'e-commerce', 'social', 'renewable energy', 'modelling', 'ecology', 'computer engineering', 'verification', 'social computing', 'social science', 'logic', 'logistics', 'pattern recognition', 'power engineering', 'grid computing', 'HCI', 'health informatics', 'climate change', 'embedded systems', 'smart cities', 'pediatrics', 'architecture', 'research', 'molecular biology', 'computer graphics', 'art', 'digital forensics', 'algorithms', 'computational biology', 'programming', 'software', 'neuroscience', 'film', 'health', 'wireless sensor networks', 'operating systems', 'conference', 'human-computer interaction', 'remote sensing', 'web', 'telecommunications', 'environmental', 'natural language processing', 'higher education', 'leadership', 'psychology', 'statistics', 'collaboration', 'information security', 'e-business', 'neurology', 'sustainability', 'software testing', 'trainings', 'finance', 'HPC', 'information theory', 'systems', 'evolutionary computation', 'digital humanities', 'interdisciplinary', 'media', 'edge computing', 'data science', 'power electronics', 'elearning', 'history', 'cognitive science', 'popular culture', 'distributed systems', 'semantics', 'industry', 'biomedical engineering', 'business management', 'measurement', 'biology', 'database', 'ontologies', 'design', 'trust', 'complexity', 'systems engineering', 'cyber-physical systems', 'ECONOMIC', 'mathematics', 'pedagogy', 'optics', 'information science', 'games', 'oncology', 'knowledge management', 'life sciences', 'civil', 'distributed computing', 'aerospace', 'middleware', 'medicine', 'electron devices', 'multidisciplinary', 'law', 'knowledge engineering', 'industrial electronics', 'environmental engineering', 'ICT', 'telecommunication', 'applications', 'theoretical computer science', 'data', 'deep learning', 'political science', 'green computing', 'mobile', 'society', 'applied science', 'optimization', 'ontology', 'english', 'cultural studies', 'human computer interaction', 'psychiatry', 'soft computing', 'testing', 'IT']
// cats = ['computer science', 'artificial intelligence', 'engineering', 'formal methods', 'data analytics', 'machine learning', 'informatics', 'software engineering', 'sensor networks', 'data mining', 'information technology', 'medical', 'services', 'communications', 'robotics', 'high performance computing', 'music', 'big data', 'information', 'information system', 'cloud computing', 'materials science', 'VLSI', 'networking', 'cloud', 'ehealth', 'management', 'sustainable development', 'theory', 'signal processing', 'information management', 'text mining', 'image processing', 'internet', 'multi-agent systems', 'technology', 'power', 'linked data', 'NLP', 'civil engineering', 'mobility', 'business', 'computer architecture', 'cancer', 'multimedia', 'cyber security', 'knowledge representation', 'energy', 'learning', 'cardiology', 'economics', 'industrial engineering', 'workshop', 'control', 'visualization', 'development', 'computer vision', 'AI', 'software architecture', 'computing', 'culture', 'speech', 'mechanical engineering', 'social networks', 'computer security', 'humanities', 'innovation', 'ambient intelligence', 'bioinformatics', 'blockchain', 'technologies', 'automation', 'teaching', 'chemical', 'databases', 'cryptography', 'e-education', 'information systems', 'social media', 'safety', 'environment', 'politics', 'e-health', 'communication', 'marketing', 'public health', 'internet of things', 'programming languages', 'ethics', 'social sciences', 'wireless networks', 'augmented reality', 'wireless', 'network', 'conferences', 'electronics', 'physics', 'fuzzy systems', 'information retrieval', 'mobile computing', 'tourism', 'intelligent systems', 'language', 'transportation', 'computational intelligence', 'sociology', 'graphics', 'manufacturing', 'ubiquitous computing', 'recommender systems', 'healthcare', 'electrical', 'chemical engineering', 'IOT', 'wireless communications', 'analytics', 'networks', 'computer networks', 'entrepreneurship', 'privacy', 'computational linguistics', 'wireless communication', 'materials', 'biometrics', 'international relations', 'science', 'neural networks', 'GIS', 'nanotechnology', 'biomedical', 'environmental sciences', 'literature', 'mechanical', 'parallel processing', 'simulation', 'virtual reality', 'nutrition', 'biotechnology', 'pervasive computing', 'dependability', 'computer', 'cybersecurity', 'performance', 'e-learning', 'knowledge discovery', '5G', 'semantic web', 'sensors', 'design automation', 'electrical engineering', 'arts', 'photonics', 'linguistics', 'electronics engineering', 'business intelligence', 'modeling', 'circuits', 'compilers', 'mechatronics', 'e-commerce', 'social', 'renewable energy', 'modelling', 'ecology', 'computer engineering', 'verification', 'social computing', 'social science', 'logic', 'logistics', 'pattern recognition', 'power engineering', 'grid computing', 'HCI', 'health informatics', 'climate change', 'embedded systems', 'smart cities', 'pediatrics', 'architecture', 'research', 'molecular biology', 'computer graphics', 'art', 'digital forensics', 'algorithms', 'computational biology', 'programming', 'software', 'neuroscience', 'film', 'health', 'wireless sensor networks', 'operating systems', 'conference', 'human-computer interaction', 'remote sensing', 'web', 'telecommunications', 'environmental', 'natural language processing', 'higher education', 'leadership', 'psychology', 'statistics', 'collaboration', 'information security', 'e-business', 'neurology', 'sustainability', 'software testing', 'trainings', 'finance', 'HPC', 'information theory', 'systems', 'evolutionary computation', 'digital humanities', 'interdisciplinary', 'media', 'edge computing', 'data science', 'power electronics', 'elearning', 'history', 'cognitive science', 'popular culture', 'distributed systems', 'semantics', 'industry', 'biomedical engineering', 'business management', 'measurement', 'biology', 'database', 'ontologies', 'design', 'trust', 'complexity', 'systems engineering', 'cyber-physical systems', 'ECONOMIC', 'mathematics', 'pedagogy', 'optics', 'information science', 'games', 'oncology', 'knowledge management', 'life sciences', 'civil', 'distributed computing', 'aerospace', 'middleware', 'medicine', 'electron devices', 'multidisciplinary', 'law', 'knowledge engineering', 'industrial electronics', 'environmental engineering', 'ICT', 'telecommunication', 'applications', 'theoretical computer science', 'data', 'deep learning', 'political science', 'green computing', 'mobile', 'society', 'applied science', 'optimization', 'ontology', 'human computer interaction', 'soft computing', 'IT']
// cats=['IT']
old_wiki_cfp = require("./wiki-cfp-full.json")
const fs = require('fs');
// $.get('wiki_cfp_fetcher.js', data => {
//     eval(data);
wiki_fetcher.fetch(old_wiki_cfp, cats, res => {
    // console.log(JSON.stringify(res));

    
    fs.writeFileSync('wiki-cfp-full.json', JSON.stringify(res));
    res2 = {}
    Object.keys(res).forEach(p => {
        res[p].call = '';
        if (new Date(res[p].submission_deadline) > Date.now())
            res2[p]=res[p]
    })
    
    fs.writeFileSync('wiki-cfp.json', JSON.stringify(res2));
    // console.log('completely finished')
})
// })

