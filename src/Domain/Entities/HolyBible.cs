using Bible.Domain.Common;
using Bible.Domain.Enums;
using Bible.Domain.Events;
using System;
using System.Collections.Generic;

namespace Bible.Domain.Entities
{
    /// <summary>
    /// Holy Bible Complete model
    /// </summary>
    public class HolyBible
    {
        public IList<BibleBook> Bible { get; set; }
    }

    public class BibleBook
    {
        public IList<BibleChapter> Chapter { get; set; }
    }
    public class BibleChapter
    {
        public IList<BibleVerse> Verse { get; set; }
    }
    public class BibleVerse : AuditableEntity
    {
        public string Verseid { get; set; }
        public string Verse { get; set; }
    }
}
