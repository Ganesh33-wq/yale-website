django.jQuery(document).ready(function($) {
    const tocTypeSelect = $('#id_toc_type');
    const manualTocField = $('#id_manual_toc').closest('.form-row');
    
    // Function to toggle manual TOC field visibility
    function toggleManualTocField() {
        if (tocTypeSelect.val() === 'manual') {
            manualTocField.show();
        } else {
            manualTocField.hide();
        }
    }
    
    // Initial state
    toggleManualTocField();
    
    // Handle changes to TOC type
    tocTypeSelect.on('change', toggleManualTocField);
    
    // Add TOC entry helper button
    const addEntryBtn = $('<button type="button" class="button" style="margin-top: 10px;">Add TOC Entry</button>');
    manualTocField.append(addEntryBtn);
    
    addEntryBtn.on('click', function() {
        const manualTocInput = $('#id_manual_toc');
        let currentToc;
        
        try {
            currentToc = JSON.parse(manualTocInput.val() || '[]');
        } catch (e) {
            currentToc = [];
        }
        
        // Create modal for entry
        const modal = $(`
            <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); 
                        background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); z-index: 1000;">
                <h3 style="margin-top: 0;">Add TOC Entry</h3>
                <div style="margin-bottom: 10px;">
                    <label style="display: block; margin-bottom: 5px;">Text:</label>
                    <input type="text" id="toc_text" style="width: 300px;">
                </div>
                <div style="margin-bottom: 10px;">
                    <label style="display: block; margin-bottom: 5px;">ID (for linking):</label>
                    <input type="text" id="toc_id" style="width: 300px;">
                </div>
                <div style="margin-bottom: 15px;">
                    <label style="display: block; margin-bottom: 5px;">Level:</label>
                    <select id="toc_level">
                        <option value="2">Heading 2</option>
                        <option value="3">Heading 3</option>
                        <option value="4">Heading 4</option>
                    </select>
                </div>
                <div style="text-align: right;">
                    <button type="button" class="button" id="cancel_toc">Cancel</button>
                    <button type="button" class="button button-primary" id="save_toc">Add Entry</button>
                </div>
            </div>
        `);
        
        $('body').append(modal);
        
        // Auto-generate ID from text
        $('#toc_text').on('input', function() {
            const text = $(this).val();
            const id = text.toLowerCase()
                         .replace(/[^a-z0-9]+/g, '-')
                         .replace(/^-+|-+$/g, '');
            $('#toc_id').val(id);
        });
        
        // Handle save
        $('#save_toc').on('click', function() {
            const entry = {
                text: $('#toc_text').val(),
                id: $('#toc_id').val(),
                level: parseInt($('#toc_level').val())
            };
            
            if (entry.text && entry.id) {
                currentToc.push(entry);
                manualTocInput.val(JSON.stringify(currentToc, null, 2));
                modal.remove();
            }
        });
        
        // Handle cancel
        $('#cancel_toc').on('click', function() {
            modal.remove();
        });
    });
});