var flag = 1;

var id = 0;
var dataData = ["telencephalon, the most highly developed and anterior part of the forebrain; consisting chiefly of the cerebral hemispheres.",
    "mesencephalon, The mesencephalon or midbrain is a part of the brain stem. It is associated with vision; hearing; motor control; sleep/wake; arousal (alertness); and temperature regulation.",
    "midbrain, a small central part of the brainstem; developing from the middle of the primitive or embryonic brain.",
    "prosencephalon, the anterior part of the brain, including the cerebral hemispheres; the thalamus, and the hypothalamus.", 
    "rhombencephalon, The hindbrain or rhombencephalon is a developmental categorization of portions of the central nervous system in vertebrates.It includes the medulla, pons, and cerebellum.Together they support vital bodily processes.",
    "neural, relating to a nerve or the nervous system",
    "diencephalon, the caudal (posterior) part of the forebrain, containing the epithalamus, thalamus, hypothalamus, and ventral thalamus and the third ventricle.",
    "ectoderm, the outermost layer of cells or tissue of an embryo in early development, or the parts derived from this, which include the epidermis, nerve tissue, and nephridia.",
    "thalamus, either of two masses of grey matter lying between the cerebral hemispheres on either side of the third ventricle, relaying sensory information and acting as a centre for pain perception.",
    "hypothalamus, a region of the forebrain below the thalamus which coordinates both the autonomic nervous system and the activity of the pituitary, controlling body temperature, thirst, hunger, and other homeostatic systems, and involved in sleep and emotional activity.",
    "forebrain, the anterior part of the brain, including the cerebral hemispheres, the thalamus, and the hypothalamus.",
    "vesicles, a small fluid-filled bladder, sac, cyst, or vacuole within the body.",
    "ventricle, a hollow part or cavity in an organ.",
    "embryonic, relating to an embryo"]

function randomId() {
    var length = dataData.length;
    id = Math.floor(Math.random() * length);
}

function next() {
    randomId();
    flag = 0;
    toFront();
}

function toFront() {
    if (flag === 1) {
        var answer = dataData[id].split(", ")[1];
        document.getElementById('term').innerHTML = "Answer: " + answer;
        flag = 0;
    } else {
        var question = dataData[id].split(", ")[0];
        document.getElementById('term').innerHTML = "Question: " + question;
        flag = 1;
    }
}

function showAnswer(input) {
    var question = input.split(", ")[0];
    var answer = input.split(", ")[1];
    document.getElementById("textbox").innerHTML = question;
    document.getElementById("answerbox").innerHTML = answer;
}

function setdefault() {
   
    document.getElementById("textbox").innerHTML = "";
    document.getElementById("answerbox").innerHTML = "";
}