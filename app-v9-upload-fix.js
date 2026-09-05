(() => {
  const input = document.querySelector('#photoInput');
  const choose = document.querySelector('#chooseBtn');
  const drop = document.querySelector('#dropZone');
  const workspace = document.querySelector('#workspace');
  const canvas = document.querySelector('#previewCanvas');
  const ctx = canvas?.getContext('2d', { willReadFrequently: true });
  const nameEl = document.querySelector('#fileName');
  const metaEl = document.querySelector('#imageMeta');
  const newPhoto = document.querySelector('#newPhotoBtn');

  if (!input || !choose || !canvas || !ctx) return;

  let opening = false;

  function resetState() {
    input.value = '';
    if (workspace) workspace.classList.add('hidden');
    if (drop) drop.classList.remove('hidden');
    if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = 0;
    canvas.height = 0;
    if (nameEl) nameEl.textContent = '—';
    if (metaEl) metaEl.textContent = '—';
    if (typeof aircraftDetection !== 'undefined') aircraftDetection = null;
    if (typeof detectedReg !== 'undefined') detectedReg = '';
    document.querySelector('#continueWrap')?.classList.add('hidden');
    document.querySelector('#aircraftDetails')?.classList.add('hidden');
    document.querySelector('#registrationValue') && (document.querySelector('#registrationValue').textContent = '—');
    document.querySelector('#registrationPill') && (document.querySelector('#registrationPill').textContent = 'READY');
    document.querySelector('#registrationStatus') && (document.querySelector('#registrationStatus').textContent = 'Upload a photo to start registration reading.');
    document.querySelector('#registrationFill') && (document.querySelector('#registrationFill').style.width = '0%');
    document.querySelector('#registrationPercent') && (document.querySelector('#registrationPercent').textContent = '0%');
    document.querySelector('#analysisFill') && (document.querySelector('#analysisFill').style.width = '0%');
    document.querySelector('#analysisProgressLabel') && (document.querySelector('#analysisProgressLabel').textContent = 'Waiting for photo • 0%');
    document.querySelector('#aircraftState') && (document.querySelector('#aircraftState').textContent = 'Waiting for an aircraft photo…');
    document.querySelector('#aircraftStateDetail') && (document.querySelector('#aircraftStateDetail').textContent = 'Aircraft detection is waiting for an image.');
  }

  function readFile(f) {
    if (!f || !/^image\/(jpeg|png|webp)$/i.test(f.type)) {
      alert('Please choose a JPEG, PNG or WebP image.');
      return;
    }
    if (opening) return;
    opening = true;

    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        image = img;
        file = f;
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        canvas.style.width = '100%';
        canvas.style.height = 'auto';
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
        data = ctx.getImageData(0, 0, canvas.width, canvas.height);

        if (nameEl) nameEl.textContent = f.name;
        if (metaEl) metaEl.textContent = `${img.naturalWidth} × ${img.naturalHeight}px • ${(f.size / 1048576).toFixed(2)} MB • ${f.type.split('/')[1].toUpperCase()}`;
        if (workspace) workspace.classList.remove('hidden');
        if (drop) drop.classList.add('hidden');

        document.querySelector('#resizeWidth') && (document.querySelector('#resizeWidth').value = img.naturalWidth);
        document.querySelector('#resizeHeight') && (document.querySelector('#resizeHeight').value = img.naturalHeight);
        document.querySelector('#resizeName') && (document.querySelector('#resizeName').value = f.name.replace(/\.[^.]+$/, ''));
        if (typeof updateResize === 'function') updateResize();
        if (typeof setZoom === 'function') setZoom(1);
        if (typeof startAnalysis === 'function') startAnalysis();
        else console.error('JetPhotos Photo Checker: startAnalysis() is unavailable.');
      };
      img.onerror = () => alert('The selected image could not be opened.');
      img.src = reader.result;
    };
    reader.onerror = () => alert('The image could not be read. Please try again.');
    reader.onloadend = () => { opening = false; };
    reader.readAsDataURL(f);
  }

  choose.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    input.click();
  });

  input.addEventListener('change', () => {
    const f = input.files?.[0];
    if (f) readFile(f);
  });

  drop.addEventListener('dragover', e => {
    e.preventDefault();
    drop.classList.add('drag-over');
  });
  drop.addEventListener('dragleave', () => drop.classList.remove('drag-over'));
  drop.addEventListener('drop', e => {
    e.preventDefault();
    drop.classList.remove('drag-over');
    const f = e.dataTransfer?.files?.[0];
    if (f) readFile(f);
  });

  newPhoto?.addEventListener('click', e => {
    e.preventDefault();
    resetState();
    input.click();
  });
})();
