
function handleAlertClick({careType , scaleValue}) {
    if (careType === 'water') {
        switch (scaleValue) {
            case 1:
                alert("This plant needs a little water");
                break;
            case 2:
                alert("This plant needs a normal water");
                break;
            default:
                alert("This plant needs lot of water");
                break;
        }
    }
    else {
        switch (scaleValue) {
            case 1:
                alert("This plant needs a little light");
                break;
            case 2:
                alert("This plant needs a normal light");
                break;
            default:
                alert("This plant needs lot of light");
                break;
        }
    }
}

function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3]

    const scaleType = careType === 'light' ? '☀️' : '💧'

    return (
        <div onClick={() => handleAlertClick({careType, scaleValue})}>
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}

export default CareScale